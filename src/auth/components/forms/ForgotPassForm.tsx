import { 
  ButtonForm, 
  FieldForm, 
  Form, 
  InputForm 
} from './styles';

export const ForgotPassForm = () => {
  return (
    <Form>
      <FieldForm>
        <InputForm
          type="email"
          placeholder="Email"
        />
      </FieldForm>

      <ButtonForm
        type="submit"
      >
        Continuar
      </ButtonForm>
    </Form>
  )
}