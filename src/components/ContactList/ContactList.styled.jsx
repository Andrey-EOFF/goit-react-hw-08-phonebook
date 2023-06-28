import styled from 'styled-components';

const StyledContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #e2e1e1;
  margin-bottom: 10px;
  background-color: #f7f7f7;
`;

const StyledName = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  color: #444444;
`;

const StyledNumber = styled.span`
  font-size: 14px;
  color: #62b4e8;
`;

export { StyledContactList, StyledContactItem, StyledName, StyledNumber };
