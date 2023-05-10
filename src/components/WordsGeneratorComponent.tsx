import styled from '@emotion/native';
import React, {useState} from 'react';
import {Text} from 'react-native';
import {generateRandomNumber} from '../utils/generators';
import {Button, TextInput} from '@react-native-material/core';

interface IProps {
  onSubmit: (words: string[]) => void;
  onClose: () => void;
}

const WordsGeneratorComponent: React.FC<IProps> = ({onSubmit, onClose}) => {
  const [count, setCount] = useState('5');
  const [length, setLength] = useState('3');

  const onSubmitHandler = () => {
    const arr = new Array(parseInt(count)).fill(0).map(() => generateRandomNumber(parseInt(length)).toString());
    onSubmit(arr);
    onClose();
  };
  return (
    <Wrapper>
      <TextInput label="Count" value={count} onChangeText={v => setCount(v)} />
      <TextInput label="Word length" value={length} onChangeText={v => setLength(v)} />
      <Buttons>
        <Button title="Close" color="secondary" onPress={onClose} />
        <Button title="Submit" color="primary" onPress={onSubmitHandler} />
      </Buttons>
    </Wrapper>
  );
};

export default WordsGeneratorComponent;

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-end;
`;
