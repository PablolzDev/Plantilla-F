import styled from 'styled-components';

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #e81919;
  background-color: #fff8e7;
  &:focus {
    border-color: #e81919;
    outline: none;
  }
`;

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, id , onChange }) => {
  return <Input type={type} id = {id} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default InputField;