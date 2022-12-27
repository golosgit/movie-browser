import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 8px;
`;

export const GenreTile = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  background-color: ${({ theme }) => theme.color.mystic};
  padding: 8px 16px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
    line-height: 1.1;
    padding: 4px 8px;
  }
`;