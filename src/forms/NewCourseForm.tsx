import styled from "@emotion/native";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FormMode } from "../types/forms";

export interface IFormFields {
  title: string;
  description: string;
  data: string;
}

interface IProps {
  mode: FormMode;
  defaultValues?: Partial<IFormFields>;
  onSubmit: (value: IFormFields) => void;
}


const NewCourseForm: FC<IProps> = ({ mode, defaultValues, onSubmit }) => {

  const { control, handleSubmit, formState: { errors } } = useForm<IFormFields>({
    defaultValues: defaultValues || {
      title: '',
      description: '',
      data: ''
    }
  });

  return <Wrapper>
    <View>
      <TextInputLabel>Title</TextInputLabel>
      <Controller
        name='title'
        rules={{ required: true }}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInputNeo
            style={styles.input}
            value={value}
            onChangeText={value => onChange(value)}
            onBlur={onBlur}
          />
        )}
      />
    </View>
    <View>
      <TextInputLabel>Description</TextInputLabel>
      <Controller
        name='description'
        rules={{ required: true }}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInputNeo
            style={styles.input}
            value={value}
            onChangeText={value => onChange(value)}
            onBlur={onBlur}
          />
        )}
      />
    </View>
    <View>
      <TextInputLabel>Words</TextInputLabel>
      <Controller
        name='data'
        rules={{ required: true }}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInputNeo
            multiline
            numberOfLines={7}
            style={styles.input}
            value={value}
            onChangeText={value => onChange(value)}
            onBlur={onBlur}
          />
        )}
      />
    </View>
    <Button title={mode === FormMode.update ? 'Update' : 'Create'} onPress={handleSubmit(onSubmit)} />
  </Wrapper>
}

export default NewCourseForm;

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
  }
})

const Wrapper = styled(View)`
  display: flex;
  gap: 16px;
  padding: 16px;
  height: 100%;
  background-color: white;
`;

const TextInputNeo = styled(TextInput)`
  border-radius: 16px;
  elevation: 5;
  background-color: white;
  border-width: 0;
  text-align-vertical: ${({ multiline }) => multiline ? 'top' : 'center'};
  padding: 16px;
`;

const TextInputLabel = styled(Text)`
  margin: 0 0 8px 8px;

`;