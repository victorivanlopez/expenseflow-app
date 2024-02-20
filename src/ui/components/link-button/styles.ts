import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkContainer = styled(Link)`
  margin: 1rem 0;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  text-align: center;
  background-color: #e05935;
  color: #FFFFFF;
  border: none;
  transition: background-color .3s;
  &:hover {
    background-color: #d13e25;
  }
`;