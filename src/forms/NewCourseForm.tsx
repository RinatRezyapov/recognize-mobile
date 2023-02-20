import { fromNullable, none, of } from "fp-ts/lib/Option";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { v4 as uuidv4 } from 'uuid';
import Course from "../models/Course";
import { addCourseToStorage } from "../utils/storage";

interface IFormFields {
  title: string;
  description: string;
  data: string;
}

interface IProps {
  navigation: any;
}

const NewCourseForm: FC<IProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormFields>({
    defaultValues: {
      title: '',
      description: '',
      data: ''
    }
  });

  const onSubmit = async (fields: IFormFields) => {
    const course = new Course({
      id: of(uuidv4()),
      title: fromNullable(fields.title),
      data: fromNullable(fields.data),
      picture: none,
      description: fromNullable(fields.description),
      tags: none,
      createdAt: of(new Date()),
      updatedAt: of(new Date()),
    });
    await addCourseToStorage(course);
    navigation.navigate('Courses');
  }

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
