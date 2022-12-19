import styled from "styled-components";

export const Header = styled.h2`
  margin: 56px 0 0 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 24px;
    font-size: 20px;
  }
`;