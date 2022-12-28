import styled, { css } from "styled-components";

export const OptionalText = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin: 8px 0 0 0;

  ${({ person }) => person && css`
    font-size: 18px;
  `}

  ${({ list }) => list && css`
    margin: 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      font-size: 13px;
      transform: translateY(-1px);
    }
  `}

  ${({ movie }) => movie && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      margin-top: 4px;
      font-size: 13px;
    }
  `}
`;