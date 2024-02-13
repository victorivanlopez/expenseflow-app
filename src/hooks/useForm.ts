import { ChangeEvent, useState } from 'react';
import type { NewUserInputForm } from '../interfaces';

type InputForm = NewUserInputForm;

export const useForm = (initialForm: InputForm) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}