import styled from 'styled-components';
export const Avatar = styled.img`
  margin: 0 auto 10px auto;
  width: 200px;
  height: auto;
  border-radius: 50%;
  display: block;
`;
export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  color: black;
  font-weight: 700;
`;
export const Tag = styled.p`
  margin-bottom: 5px;
`;
export const StatsItem = styled.li`
  padding: 15px;
  text-align: center;

  :not(:last-child) {
    border-right: 1px solid Gainsboro;
  }
`;
export const StatsLabel = styled.div`
  margin-bottom: 10px;
`;
export const StatsQuantity = styled.div`
  color: Navy;
  font-weight: 600;
`;
