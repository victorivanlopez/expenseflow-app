import { LinkContainer } from './styles';

interface Props {
  textButton: string;
  navigateTo: string;
}

export const LinkButton = ({ textButton, navigateTo }: Props) => {
  return (
    <LinkContainer
      to={navigateTo}
    >
      {textButton}
    </LinkContainer>
  )
}