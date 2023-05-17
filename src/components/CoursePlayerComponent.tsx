import styled from '@emotion/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {graphql, useFragment} from 'react-relay';
import {CanvasContext} from '../utils/context/CanvasProvider';
import {NavigationType} from '../App';
import {useAddScoreMutation} from '../mutations/AddScoreMutation';
import Icon from 'react-native-vector-icons/Entypo';
import MenuDrawer from 'react-native-side-drawer';
import {Button, TextInput} from '@react-native-material/core';

function selectRandomWords(arr: string[], num: number) {
  if (arr.length <= num) {
    return arr;
  }

  const selected = new Set();
  while (selected.size < num) {
    const index = Math.floor(Math.random() * arr.length);
    selected.add(arr[index]);
  }

  return Array.from(selected);
}

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
  const [timeStart, setTimeStart] = useState<number>();
  const [reactionTime, setReactionTime] = useState<number>();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const [showCounter, setShowCounter] = useState(true);
  const [counterValue, setCounterValue] = useState(3);

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

      const data = course.body
        .replace(/[^\w\s]|_/g, '')
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .split(' ');

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
      resultRef?.current?.measure((width, height, px, py, fx, fy) => {
        animateSparks(fx, fy);
      });
    } else {
      setBackground('#ff4569');
      setPause(false);
      setShowCounter(true);
      setCounterValue(3);
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
        <Text ref={resultRef} style={styles.reactionTime}>
          {reactionTime ? reactionTime : '-'}
        </Text>
        {renderCanvas()}
      </StopWatchResult>
      <View style={styles.viewer}>
        {showCounter && <Text>{counterValue}</Text>}
        <Text style={styles.phrase}>{phraseVisibility ? currentPhrase.join(' ') : answer.join(' ')}</Text>
      </View>
      <View style={styles.answersContainer}>
        {answers.map((answerArg, idx) => (
          <TouchableOpacity
            key={idx}
            disabled={answer.length === parseInt(wordsCount)}
            style={styles.answerButton}
            onPress={onAnswerSelect(answerArg)}>
            <Text style={styles.answerButtonText}>{answerArg}</Text>
          </TouchableOpacity>
        ))}
      </View>
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

const styles = StyleSheet.create({
  viewer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  phrase: {
    color: 'white',
    fontSize: 36,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  answersContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    gap: 9,
  },
  answerButton: {
    display: 'flex',
    borderWidth: 1,
    padding: 8,
    minWidth: 70,
    borderRadius: 4,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  answerButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  selectedAnswers: {
    color: 'white',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
  },
  reactionTime: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});
