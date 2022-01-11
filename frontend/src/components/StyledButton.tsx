import styled from 'styled-components';

const Button = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const StyledButton = () => {
  return <Button>YO!</Button>;
};

export default StyledButton;
