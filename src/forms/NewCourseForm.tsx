import styled from '@emotion/native';
import React, {FC} from 'react';
import {Controller, useFieldArray, useForm} from 'react-hook-form';
import {Button, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FormMode} from '../types/forms';
import {Switch} from '@react-native-material/core';

export interface IFormFields {
  title: string;
  description: string;
  avatar: string;
  words: {value: string}[];
  text: string;
}

interface IProps {
  mode: FormMode;
  defaultValues?: Partial<IFormFields>;
  onSubmit: (value: IFormFields) => void;
}

enum WordsInput {
  oneInput = 'oneInput',
  multiInput = 'multiInput',
}

const NewCourseForm: FC<IProps> = ({mode, defaultValues, onSubmit}) => {
  const [image, setImage] = React.useState<string | null>(null);
  const [wordsInput, setWordsInput] = React.useState<WordsInput>(WordsInput.oneInput);

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: {errors},
  } = useForm<IFormFields>({
    defaultValues: {
      title: defaultValues?.title,
      description: defaultValues?.description,
      avatar: defaultValues?.avatar,
      words: defaultValues?.words || new Array(5).fill(null).map(() => ({value: ''})),
      text: defaultValues?.words?.map(v => v.value)?.join(' ') || '',
    },
  });

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'words',
  });

  const onChooseImageClick = () => {
    ImagePicker.openPicker({
      width: 135,
      height: 135,
      cropping: true,
      includeBase64: true,
      mediaType: 'photo',
    }).then(image => {
      if (image?.data) {
        setImage(image.path);
        setValue('avatar', image?.data);
      }
    });
  };

  const avatar = getValues().avatar;

  const avatarUri = avatar ? 'data:image/png;base64,' + avatar : null;

  const generateRandomNumber = (n: number) => {
    const min = Math.pow(10, n - 1);
    const max = Math.pow(10, n) - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const onGenerateWords = () => {
    const arr = new Array(30).fill(0).map(() => ({value: generateRandomNumber(3).toString()}));
    setValue('words', arr);
  };

  const onCustomSubmit = (values: any) => {
    if (wordsInput === WordsInput.oneInput) {
      onSubmit(values);
    } else {
      onSubmit({
        ...values,
        text: getValues()
          .words.map(v => v.value)
          .join(' '),
      });
    }
  };

  return (
    <ScrollView>
      <Wrapper>
        <ImageWithDetailsWrapper>
          <ImageWrapper>
            {image || avatarUri ? (
              <StyledImage source={{uri: avatarUri || image}} />
            ) : (
              <TouchableOpacity onPress={onChooseImageClick}>
                <ImagePlaceholder>
                  <Icon name="add-photo-alternate" size={30} />
                </ImagePlaceholder>
              </TouchableOpacity>
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
        <Button title="Generate words" onPress={onGenerateWords} />
        <Switch
          value={wordsInput === WordsInput.oneInput}
          onValueChange={() =>
            setWordsInput(wordsInput === WordsInput.oneInput ? WordsInput.multiInput : WordsInput.oneInput)
          }
        />
        {wordsInput === WordsInput.oneInput ? (
          <FieldWithHelper>
            <Controller
              name="text"
              rules={{required: {value: true, message: 'Required'}}}
              control={control}
              render={({field: {value, onChange, onBlur}}) => (
                <TextInputNeo
                  placeholder="Words"
                  multiline
                  numberOfLines={8}
                  value={value}
                  onChangeText={value => onChange(value)}
                  onBlur={onBlur}
                />
              )}
            />
            {errors.description && <ErrorText>{errors.description.message}</ErrorText>}
          </FieldWithHelper>
        ) : (
          fields.map((field, idx) => (
            <FieldRowContainer key={field.id}>
              <WordWrapper>
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
              </WordWrapper>
              <TouchableOpacity onPress={() => remove(idx)}>
                <Icon name="remove" size={30} />
              </TouchableOpacity>
            </FieldRowContainer>
          ))
        )}
        <AddTouchableWrapper onPress={() => append({value: ''})}>
          <Icon name="add" size={30} />
        </AddTouchableWrapper>
        <Button title={mode === FormMode.update ? 'Update' : 'Create'} onPress={handleSubmit(onCustomSubmit)} />
      </Wrapper>
    </ScrollView>
  );
};

export default NewCourseForm;

const WordWrapper = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  display: flex;
  gap: 16px;
  padding: 16px;
  height: 100%;
`;

const TextInputNeo = styled(TextInput)`
  border-radius: 16px;
  elevation: 5;
  background-color: white;
  border-width: 0;
  text-align-vertical: ${({multiline}) => (multiline ? 'top' : 'center')};
  padding: 16px;
  flex: 2;
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
  background-color: white;
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
