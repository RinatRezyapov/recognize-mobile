import styled from '@emotion/native';
import React, {FC} from 'react';
import {Controller, useFieldArray, useForm} from 'react-hook-form';
import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FormMode} from '../types/forms';
import {Asset, ImagePickerResponse, launchImageLibrary} from 'react-native-image-picker';

export interface IFormFields {
  title: string;
  description: string;
  avatar: string;
  words: {value: string}[];
}

interface IProps {
  mode: FormMode;
  defaultValues?: Partial<IFormFields>;
  onSubmit: (value: IFormFields) => void;
}

const NewCourseForm: FC<IProps> = ({mode, defaultValues, onSubmit}) => {
  const [image, setImage] = React.useState<Asset | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<IFormFields>({
    defaultValues: defaultValues || {
      title: '',
      description: '',
      avatar: '',
      words: new Array(5).fill(null).map(() => ({value: ''})),
    },
  });

  const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
    control,
    name: 'words',
  });

  const onChooseImageClick = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, response => {
      const img = response.assets?.[0];
      if (img?.base64) {
        setImage(img);
        setValue('avatar', img.base64);
      }
    });
  };

  return (
    <Wrapper>
      <ImageWithDetailsWrapper>
        <ImageWrapper>
          {image ? (
            <StyledImage source={{uri: image.uri}} />
          ) : (
            <ImagePlaceholder>
              <TouchableOpacity onPress={onChooseImageClick}>
                <Icon name="add-photo-alternate" size={30} />
              </TouchableOpacity>
            </ImagePlaceholder>
          )}
        </ImageWrapper>
        <DetailsWrapper>
          <Controller
            name="title"
            rules={{required: true}}
            control={control}
            render={({field: {value, onChange, onBlur}}) => (
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
            name="description"
            rules={{required: true}}
            control={control}
            render={({field: {value, onChange, onBlur}}) => (
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
      {fields.map((field, idx) => (
        <FieldRowContainer key={field.id}>
          <Controller
            key={field.id}
            name={`words.${idx}.value`}
            rules={{required: true}}
            control={control}
            render={({field: {value, onChange, onBlur}}) => (
              <FielInput
                placeholder="Word"
                style={styles.input}
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
              />
            )}
          />
          <TouchableOpacity onPress={() => remove(idx)}>
            <Icon name="remove" size={30} />
          </TouchableOpacity>
        </FieldRowContainer>
      ))}
      <AddTouchableWrapper onPress={() => append({value: ''})}>
        <Icon name="add" size={30} />
      </AddTouchableWrapper>
      <Button title={mode === FormMode.update ? 'Update' : 'Create'} onPress={handleSubmit(onSubmit)} />
    </Wrapper>
  );
};

export default NewCourseForm;

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
  },
});

const Wrapper = styled.View`
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
  text-align-vertical: ${({multiline}) => (multiline ? 'top' : 'center')};
  padding: 16px;
`;

const FielInput = styled(TextInputNeo)`
  flex: 1;
`;

const FieldRowContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const ImagePlaceholder = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 135px;
  border-width: 1px;
  border-radius: 16px;
  border-color: lightgrey;
`;

const AddTouchableWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: flex-end;
`;

const StyledImage = styled(Image)`
  width: 135px;
  height: 135px;
  border-radius: 16px;
`;

const ImageWithDetailsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const ImageWrapper = styled.View`
  width: 70px;
  height: 70px;
  flex: 2;
`;

const DetailsWrapper = styled.View`
  display: flex;
  gap: 16px;
  flex: 3;
`;
