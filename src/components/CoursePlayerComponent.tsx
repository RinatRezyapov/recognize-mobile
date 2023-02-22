import { useFocusEffect } from '@react-navigation/native';
import { getOrElse, isNone } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/function';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { NavigationType } from '../../App';
import Course from '../models/Course';
import { getCourseFromStorage, removeCourseFromStorage } from '../utils/storage';



interface IProps extends NavigationType<'Course'> {

}

const CoursePlayerComponent: React.FC<IProps> = ({ navigation, route }) => {

  const [course, setCourse] = useState<Course>();

  useFocusEffect(
    useCallback(() => {
      getCourseFromStorage(route?.params?.id).then(data => {
        if (data) setCourse(data);
      }).catch(err => console.error(err));
    }, [])
  );

  const [pause, setPause] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');
  const [intervalMs, setIntervalMs] = useState(1000);
  const [wordsCount, setWordsCount] = useState(2);
  const [answersCount, setAnswersCount] = useState(7);
  const [background, setBackground] = useState<string>('teal');
  const [phraseVisibility, setPhraseVisibility] = useState(true);


  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!course) {
        return
      }
      if (pause) {
        return
      }
      const data = pipe(course.data, getOrElse(() => ''))
        .replace(/[^\w\s]|_/g, '')
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .split(' ')
      setBackground('teal');
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
      });
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
      setBackground('green');
      setUserInput('');
      setPause(false);
      setAnswer([]);
    } else {
      setBackground('red');
      setUserInput('');
      setPause(false);
      setAnswer([]);
    }
  }

  const onAnswerSelect = (ans: string) => () => {
    const newAnswer = [...answer, ans];
    setAnswer(newAnswer);
    if (newAnswer.length === wordsCount) {
      onUserInputSubmit(answer.join(' '))
    }
  }

  if (!course) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.container}>
      <View style={styles.viewer}>
        {phraseVisibility && <Text style={styles.phrase}>{currentPhrase.join(' ')}</Text>}
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setUserInput}
        value={answer.join(' ')}
      />
      {/* <Button title='Submit' onPress={onUserInputSubmit} /> */}
      <View style={styles.answersContainer}>
        {answers.map(answer => (
          <TouchableOpacity style={styles.answerButton} onPress={onAnswerSelect(answer)}>
            <Text style={styles.answerButtonText}>
              {answer}
            </Text>
          </TouchableOpacity >
        ))}
      </View>
    </View>
  );
}

export default CoursePlayerComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    gap: 16,
    padding: 16,
    backgroundColor: 'teal',
  },
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
  }
});

