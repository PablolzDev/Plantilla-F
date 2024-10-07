import styled from 'styled-components';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  background-color:#bd280a;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #ff2a00;
  }
`;

const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;