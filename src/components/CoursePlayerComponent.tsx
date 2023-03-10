import styled from '@emotion/native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { graphql, useFragment, useLazyLoadQuery } from 'react-relay';
import { NavigationType } from './App';
import { CanvasContext } from '../utils/context/CanvasProvider';

interface IProps extends NavigationType<'Course'> {

}

const CoursePlayerComponent: React.FC<IProps> = ({ navigation, route }) => {
  const course = useFragment(
    graphql`
      fragment CoursePlayerComponent_course on Course {
        title
        description
        body
      }
    `,
    route.params.courseRef,
  );

  const resultRef = useRef(null);
  const { animateSparks, renderCanvas } = useContext(CanvasContext)
  const [pause, setPause] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [intervalMs, setIntervalMs] = useState(1000);
  const [wordsCount, setWordsCount] = useState(2);
  const [answersCount, setAnswersCount] = useState(7);
  const [background, setBackground] = useState<string>('#4615b2');
  const [phraseVisibility, setPhraseVisibility] = useState(true);
  const [timeStart, setTimeStart] = useState<number>();
  const [reactionTime, setReactionTime] = useState<number>();

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!course) return;
      if (pause) return;

      const data = course.body
        .replace(/[^\w\s]|_/g, '')
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .split(' ')

      setAnswer([]);
      setBackground('#4615b2');

      const words = [...Array(wordsCount)].map(e => {
        const idx = getRandomInt(0, data.length);
        const word = data[idx];
        data.splice(idx, 1);
        return word;
      });
      const answers = [...Array(answersCount)].map(e => {
        const idx = getRandomInt(0, data.length);
        const word = data[idx];
        data.splice(idx, 1);
        return word;
      }).filter(v => v);
      setAnswers([...words, ...answers].sort(() => Math.random() - 0.5));
      setCurrentPhrase(words);
      setPhraseVisibility(true);
      setTimeout(() => setPhraseVisibility(false), intervalMs);
      setPause(true);
      setTimeStart(Date.now())
    }, 1000);

    return () => clearInterval(intervalId);
  }, [pause, course]);

  const onUserInputSubmit = (userInput: string) => {
    if (userInput === currentPhrase.join(' ')) {
      setBackground('#03a9f4');
      setReactionTime(Date.now() - timeStart);
      setPause(false);

      resultRef?.current?.measure((width, height, px, py, fx, fy) => {
        animateSparks(fx + 50, fy)
      });

    } else {
      setBackground('#ff4569');
      setPause(false);
    }
  }

  const onAnswerSelect = (ans: string) => () => {
    const newAnswer = [...answer, ans];
    setAnswer(newAnswer);
    if (newAnswer.length === wordsCount) {
      setTimeout(() => onUserInputSubmit(newAnswer.join(' ')), 1000)
    }
  }

  if (!course) return <ActivityIndicator size="large" />;

  return (
    <Container backgroundColor={background}>
      <View style={styles.viewer}>
        <Text ref={resultRef} style={styles.phrase}>{phraseVisibility ? currentPhrase.join(' ') : answer.join(' ')}</Text>
        <Text style={styles.reactionTime}>{reactionTime ? (reactionTime / 1000) : ''}</Text>
        {renderCanvas()}
      </View>
      <View style={styles.answersContainer}>
        {answers.map((answer, idx) => (
          <TouchableOpacity key={idx} style={styles.answerButton} onPress={onAnswerSelect(answer)}>
            <Text style={styles.answerButtonText}>
              {answer}
            </Text>
          </TouchableOpacity >
        ))}
      </View>
    </Container>
  );
}

export default CoursePlayerComponent;

const Container = styled.View<{ backgroundColor: string }>`
  display: flex;
  height: 100%;
  gap: 16px;
  padding: 16px;
  background-color: ${props => props.backgroundColor};
`

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
  }
});

