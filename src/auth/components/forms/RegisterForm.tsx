import { ButtonForm, FieldForm, Form, InputForm } from './styles';

export const RegisterForm = () => {
  return (
    <Form>
      <FieldForm>
        <InputForm
          type="text"
          placeholder="Nombre Completo"
        />
      </FieldForm>
      <FieldForm>
        <InputForm
          type="email"
          placeholder="Email"
        />
      </FieldForm>
      <FieldForm>
        <InputForm
          type="password"
          placeholder="Contraseña"
        />
      </FieldForm>

      <ButtonForm
        type="submit"
      >
        Registrarse
      </ButtonForm>
    </Form>
  )
}