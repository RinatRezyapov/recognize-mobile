import { useFocusEffect } from "@react-navigation/native";
import { fromNullable, none, of } from "fp-ts/lib/Option";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { v4 as uuidv4 } from 'uuid';
import { NavigationType } from "../components/App";
import Course from "../models/Course";
import { addCourseToStorage, getCourseFromStorage } from "../utils/storage";

export interface IFormFields {
  title: string;
  description: string;
  data: string;
}

interface IProps {
  defaultValues?: Partial<IFormFields>;
  onSubmit: (value: IFormFields) => void;
}


const NewCourseForm: FC<IProps> = ({ defaultValues, onSubmit }) => {

  const { control, handleSubmit, formState: { errors } } = useForm<IFormFields>({
    defaultValues: defaultValues || {
      title: '',
      description: '',
      data: ''
    }
  });

  return <View style={styles.container}>
    <View>
      <Text style={styles.label}>Title</Text>
      <Controller
        name='title'
        rules={{ required: true }}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={value => onChange(value)}
            onBlur={onBlur}
          />
        )}
      />
    </View>
    <View>
      <Text style={styles.label}>Description</Text>
      <Controller
        name='description'
        rules={{ required: true }}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={value => onChange(value)}
            onBlur={onBlur}
          />
        )}
      />
    </View>
    <View>
      <Text style={styles.label}>Text</Text>
      <Controller
        name='data'
        rules={{ required: true }}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={value => onChange(value)}
            onBlur={onBlur}
          />
        )}
      />
    </View>
    <Button title='Create' onPress={handleSubmit(onSubmit)} />
  </View>
}

export default NewCourseForm;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 16,
    padding: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
  }
})
