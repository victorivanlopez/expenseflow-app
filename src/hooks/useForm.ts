import { ChangeEvent, useState } from 'react';
import type { NewUserInputForm } from '../interfaces';

export const useForm = (initialForm: NewUserInputForm) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target as HTMLInputElement;
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