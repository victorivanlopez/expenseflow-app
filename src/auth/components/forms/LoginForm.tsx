import { 
  ButtonForm,
  ContainerForm, 
  FieldForm, 
  InputForm 
} from './styles';

export const LoginForm = () => {
  return (
    <ContainerForm>
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
        Iniciar sesión
      </ButtonForm>
    </ContainerForm>
  )
}
