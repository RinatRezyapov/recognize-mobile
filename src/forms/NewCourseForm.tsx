import styled from "@emotion/native";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

import { FormMode } from "../types/forms";
import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";

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
  const [photo, setPhoto] = React.useState<ImagePickerResponse | null>(null);

  const { control, handleSubmit, formState: { errors } } = useForm<IFormFields>({
    defaultValues: defaultValues || {
      title: '',
      description: '',
      data: ''
    }
  });

  const onUploadImageClick = () => {

  }

  const onChooseImageClick = () => {
    launchImageLibrary({ noData: true }, (response) => {
      if (response) setPhoto(response.assets?.[0]);
    });
  }

  return <Wrapper>
    <ImageWithDetailsWrapper>
      <ImageWrapper>
        {photo && <StyledImage source={{ uri: photo.uri }} />}
      </ImageWrapper>
      <DetailsWrapper>
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
      </DetailsWrapper>
    </ImageWithDetailsWrapper>

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
    <Button title="Upload Image" onPress={onChooseImageClick} />
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



const StyledImage = styled(Image)`
  width: 100px;
  height: 100px;
  borderRadius: 16px;
`;

const ImageWithDetailsWrapper = styled(View)`
  display: flex;
  flexDirection: row;
  gap: 16px;
`;

const ImageWrapper = styled(View)`
  width: 70px;
  height: 70px;
  flex: 1;
`;

const DetailsWrapper = styled(View)`
  flex: 2;
`;