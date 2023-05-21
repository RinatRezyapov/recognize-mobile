import styled from '@emotion/native';
import {Button, TextInput} from '@react-native-material/core';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import Icon from 'react-native-vector-icons/Entypo';
import {graphql, useFragment} from 'react-relay';
import {NavigationType} from '../App';
import {useAddScoreMutation} from '../mutations/AddScoreMutation';
import {CanvasContext} from '../utils/context/CanvasProvider';
import {getWordsFromString, selectRandomWords} from '../utils/wordsPlayer';
import {useAddStreakMutation} from '../mutations/AddStreakMutation';

interface IProps extends NavigationType<'Course'> {}

const CoursePlayerComponent: React.FC<IProps> = ({route}) => {
  const user = useFragment(
    graphql`
      fragment CoursePlayerComponent_user on User {
        id
        _id
        username
      }
    `,
    route.params.userRef,
  );

  const course = useFragment(
    graphql`
      fragment CoursePlayerComponent_course on Course {
        id
        title
        description
        body
      }
    `,
    route.params.courseRef,
  );

  const commitAddScoreMutation = useAddScoreMutation(user.id, course.id);
  const commitAddStreakMutation = useAddStreakMutation(user.id, course.id);

  const resultRef = useRef<Text>(null);
  const {animateSparks, renderCanvas} = useContext(CanvasContext);
  const [pause, setPause] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [intervalMs, setIntervalMs] = useState('1000');
  const [wordsCount, setWordsCount] = useState('2');
  const [answersCount, setAnswersCount] = useState(7);
  const [background, setBackground] = useState<string>('#4615b2');
  const [phraseVisibility, setPhraseVisibility] = useState(true);
  const [timeStart, setTimeStart] = useState<number>(0);
  const [reactionTime, setReactionTime] = useState<number>();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const [showCounter, setShowCounter] = useState(true);
  const [counterValue, setCounterValue] = useState(3);

  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounterValue(v => v - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [showCounter]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!course) return;
      if (pause) return;

      const data = getWordsFromString(course.body);

      setAnswer([]);
      setBackground('#4615b2');

      const words = selectRandomWords(data, parseInt(wordsCount));
      const answers = selectRandomWords(data, answersCount);
      setAnswers([...words, ...answers].sort(() => Math.random() - 0.5));
      setCurrentPhrase(words);
      setShowCounter(false);
      setPhraseVisibility(true);
      setTimeout(() => setPhraseVisibility(false), parseInt(intervalMs));
      setPause(true);
      setTimeStart(Date.now());
    }, 3000);

    return () => clearInterval(intervalId);
  }, [pause, course]);

  const onUserInputSubmit = (userInput: string) => {
    if (userInput === currentPhrase.join(' ')) {
      setBackground('#03a9f4');
      const newReactionTime = (Date.now() - timeStart) / 1000;
      setReactionTime(newReactionTime);
      commitAddScoreMutation(newReactionTime, userInput);
      setPause(false);
      setShowCounter(true);
      setCounterValue(3);
      setStreak(prevStreak => {
        const newStreak = prevStreak + 1;
        commitAddStreakMutation(newStreak);

        return newStreak;
      });
      resultRef?.current?.measure((width, height, px, py, fx, fy) => {
        animateSparks(fx, fy);
      });
    } else {
      setBackground('#ff4569');
      setPause(false);
      setShowCounter(true);
      setCounterValue(3);
      setStreak(0);
    }
  };

  const onAnswerSelect = (ans: string) => () => {
    const newAnswer = [...answer, ans];
    setAnswer(prevAnswer => [...prevAnswer, ans]);
    if (newAnswer.length === parseInt(wordsCount)) {
      setTimeout(() => onUserInputSubmit(newAnswer.join(' ')), 1000);
    }
  };

  const drawerContent = () => {
    return (
      <DrawerWrapper>
        <TextInput keyboardType="numeric" label="Count" value={wordsCount} onChangeText={setWordsCount} />
        <TextInput keyboardType="numeric" label="Interval" value={intervalMs} onChangeText={setIntervalMs} />
        <Button title="Close" onPress={() => setDrawerOpen(false)} />
      </DrawerWrapper>
    );
  };

  if (!course) return <ActivityIndicator size="large" />;

  return (
    <Container backgroundColor={background}>
      <StopWatchResult>
        <Icon name="stopwatch" size={40} color="white" />
        <ReactionTime ref={resultRef}>{reactionTime ? reactionTime : '-'}</ReactionTime>
        <ReactionTime>{streak}</ReactionTime>
        {renderCanvas()}
      </StopWatchResult>
      <WordsDisplay>
        {showCounter && <Text>{counterValue}</Text>}
        <WordsDisplayPhrase>{phraseVisibility ? currentPhrase.join(' ') : answer.join(' ')}</WordsDisplayPhrase>
      </WordsDisplay>
      <Answers>
        {answers.map((answerArg, idx) => (
          <Answer key={idx} disabled={answer.length === parseInt(wordsCount)} onPress={onAnswerSelect(answerArg)}>
            <AnswerText>{answerArg}</AnswerText>
          </Answer>
        ))}
      </Answers>
      <DrawerButtonWrapper onPress={() => setDrawerOpen(true)}>
        <Icon name="chevron-up" size={40} color="white" />
      </DrawerButtonWrapper>
      <MenuDrawer
        open={drawerOpen}
        position="right"
        drawerContent={drawerContent()}
        drawerPercentage={77}
        animationTime={250}
        overlay={true}
        opacity={0.4}
      />
    </Container>
  );
};

export default CoursePlayerComponent;

const Container = styled.View<{backgroundColor: string}>`
  display: flex;
  height: 100%;
  gap: 16px;
  padding: 16px;
  background-color: ${props => props.backgroundColor};
`;

const StopWatchResult = styled.View`
  display: flex;
  position: absolute;
  padding-top: 8px;
  align-items: center;
  width: 60px;
`;

const DrawerWrapper = styled.View`
  height: 100%;
  padding: 16px;
  background-color: white;
`;

const DrawerButtonWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
`;

const WordsDisplay = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const WordsDisplayPhrase = styled.Text`
  color: white;
  font-size: 36px;
`;

const Answers = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 300px;
  gap: 9px;
`;

const Answer = styled.TouchableOpacity`
  display: flex;
  border-width: 1px;
  padding: 8px
  min-width: 70px;
  border-radius: 4px;
  border-color: white;
  background-color: transparent;
`;

const AnswerText = styled.Text`
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const ReactionTime = styled.Text`
  color: white;
  text-align: center;
  font-weight: 700;
`;
