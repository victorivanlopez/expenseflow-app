import { ButtonForm, FieldForm, Form, InputForm } from './styles';

export const ResetPasswordForm = () => {
  return (
    <Form>
      <FieldForm>
        <InputForm
          type="password"
          placeholder="Nueva contraseña"
        />
      </FieldForm>

      <ButtonForm
        type="submit"
      >
        Restablecer contraseña
      </ButtonForm>
    </Form>
  )
}
