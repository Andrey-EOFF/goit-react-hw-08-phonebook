import styled from 'styled-components';

const FilterContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #ffffff;
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #e2e1e1;
  border-radius: 0.25rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #62b4e8;
  }
`;

export { FilterContainer, FilterInput };
