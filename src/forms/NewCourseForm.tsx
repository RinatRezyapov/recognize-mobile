import styled from "@emotion/native";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

import { FormMode } from "../types/forms";
import { Asset, ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";

export interface IFormFields {
  title: string;
  description: string;
  data: string;
  avatar: string;
}

interface IProps {
  mode: FormMode;
  defaultValues?: Partial<IFormFields>;
  onSubmit: (value: IFormFields) => void;
}


const NewCourseForm: FC<IProps> = ({ mode, defaultValues, onSubmit }) => {
  const [image, setImage] = React.useState<Asset | null>(null);

  const { control, handleSubmit, setValue, formState: { errors } } = useForm<IFormFields>({
    defaultValues: defaultValues || {
      title: '',
      description: '',
      data: '',
      avatar: '',
    }
  });



  const onChooseImageClick = () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64: true }, (response) => {
      const img = response.assets?.[0];
      if (img?.base64) {
        setImage(img);
        setValue('avatar', img.base64)
      }
    });
  }

  return <Wrapper>
    <ImageWithDetailsWrapper>
      <ImageWrapper>
        {image && <StyledImage source={{ uri: image.uri }} />}
      </ImageWrapper>
      <DetailsWrapper>
        <Controller
          name='title'
          rules={{ required: true }}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInputNeo
              style={styles.input}
              placeholder="Label"
              value={value}
              onChangeText={value => onChange(value)}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          name='description'
          rules={{ required: true }}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInputNeo
              style={styles.input}
              placeholder="Description"
              value={value}
              onChangeText={value => onChange(value)}
              onBlur={onBlur}
            />
          )}
        />

      </DetailsWrapper>
    </ImageWithDetailsWrapper>
    <Controller
      name='data'
      rules={{ required: true }}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <TextInputNeo
          multiline
          numberOfLines={7}
          placeholder="Words"
          style={styles.input}
          value={value}
          onChangeText={value => onChange(value)}
          onBlur={onBlur}
        />
      )}
    />

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



const StyledImage = styled(Image)`
  width: 135px;
  height: 135px;
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
  flex: 2;
`;

const DetailsWrapper = styled(View)`
  display: flex;
  gap: 16px;
  flex: 3;
`;