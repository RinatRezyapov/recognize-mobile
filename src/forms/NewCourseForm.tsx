import styled from '@emotion/native';
import React, {FC} from 'react';
import {Controller, useFieldArray, useForm} from 'react-hook-form';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FormMode} from '../types/forms';

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

  const {fields, append, remove} = useFieldArray({
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

  console.log(errors.title);

  return (
    <ScrollView>
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
            <FieldWithHelper>
              <Controller
                name="title"
                rules={{required: {value: true, message: 'Required'}}}
                control={control}
                render={({field: {value, onChange, onBlur}}) => (
                  <TextInputNeo
                    placeholder="Label"
                    value={value}
                    onChangeText={value => onChange(value)}
                    onBlur={onBlur}
                  />
                )}
              />
              {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
            </FieldWithHelper>
            <FieldWithHelper>
              <Controller
                name="description"
                rules={{required: {value: true, message: 'Required'}}}
                control={control}
                render={({field: {value, onChange, onBlur}}) => (
                  <TextInputNeo
                    placeholder="Description"
                    value={value}
                    onChangeText={value => onChange(value)}
                    onBlur={onBlur}
                  />
                )}
              />
              {errors.description && <ErrorText>{errors.description.message}</ErrorText>}
            </FieldWithHelper>
          </DetailsWrapper>
        </ImageWithDetailsWrapper>
        {fields.map((field, idx) => (
          <FieldRowContainer key={field.id}>
            <Controller
              key={field.id}
              name={`words.${idx}.value`}
              rules={{required: {value: true, message: 'Required'}}}
              control={control}
              render={({field: {value, onChange, onBlur}}) => (
                <FieldWithHelper>
                  <TextInputNeo
                    placeholder="Word"
                    value={value}
                    onChangeText={value => onChange(value)}
                    onBlur={onBlur}
                  />
                  {errors.words?.[idx] && <ErrorText>{errors.words?.[idx]?.value?.message}</ErrorText>}
                </FieldWithHelper>
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
    </ScrollView>
  );
};

export default NewCourseForm;

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
  width: 200px;
`;

const FieldRowContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const FieldWithHelper = styled.View`
  display: flex;
  flex-direction: column;
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

const ErrorText = styled.Text`
  color: red;
  font-size: 10px;
  margin: 8px 0 0 16px;
`;
