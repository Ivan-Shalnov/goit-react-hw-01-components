import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 14px;
  thead {
    background-color: grey;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
  tr,
  th,
  td {
    padding: 15px;
  }
  tr:nth-child(even) {
    background-color: lightgrey;
  }
`;
export const Type = styled.td`
  display: flex;
  justify-content: center;
`;
