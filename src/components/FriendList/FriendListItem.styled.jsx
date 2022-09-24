import styled from 'styled-components';
export const Friend = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Status = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: ${({ isOnline }) => (isOnline ? 'yellow' : 'grey')};
`;
export const Avatar = styled.img`
  transition: 250ms;
  :hover {
    transform: scale(1.2);
  }
`;
export const Name = styled.p`
  font-size: 16px;
`;
