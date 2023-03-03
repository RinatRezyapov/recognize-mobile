import styled from '@emotion/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { NavigationType } from '../../App';

interface IProps extends NavigationType<'Course'> {

}

const CoursePlayerComponent: React.FC<IProps> = ({ navigation, route }) => {
  const { course } = useLazyLoadQuery<any>(graphql`
    query CoursePlayerComponentQuery($id: String) {
      course(id: $id) {
        id,
        title, 
        body,

      }
    }
  `, { id: route.params.id });


  const [pause, setPause] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [intervalMs, setIntervalMs] = useState(1000);
  const [wordsCount, setWordsCount] = useState(2);
  const [answersCount, setAnswersCount] = useState(7);
  const [background, setBackground] = useState<string>('#4615b2');
  const [phraseVisibility, setPhraseVisibility] = useState(true);


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
    }, 1000);

    return () => clearInterval(intervalId);
  }, [pause, course]);

  const onUserInputSubmit = (userInput: string) => {
    if (userInput === currentPhrase.join(' ')) {
      setBackground('#03a9f4');
      setPause(false);
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
        <Text style={styles.phrase}>{phraseVisibility ? currentPhrase.join(' ') : answer.join(' ')}</Text>
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
  }
});

