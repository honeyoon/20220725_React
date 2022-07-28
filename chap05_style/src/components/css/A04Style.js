import styled from 'styled-components'

export const MYBOX = styled.div`
  background: ${props => props.color || 'lightgray'};
  color: orange;
  font-size: 24pt;
  padding: 10px;
`;
export const MYBTN = styled.button`
  background: ${props => props.color || 'lightgray'};
  color: white;
  border: 1px solid gray;
  padding: 3px;

  &:hover {
    background: white;
    color: orange;
  }
`