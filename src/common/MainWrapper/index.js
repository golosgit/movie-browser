import styled, { css } from "styled-components";

export const MainWrapper = styled.main`
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1400px;

  ${({ movie }) => movie && css`
    margin-bottom: 336px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-bottom: 180px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      margin-bottom: 88px;
    }
  `}

  ${({ person }) => person && css`
    margin-bottom: 220px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-bottom: 120px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      margin-bottom: 32px;
    }
  `}
`;