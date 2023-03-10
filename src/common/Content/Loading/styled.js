import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "./loading.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    margin-top: 24px;
  }

  ${({ biggerMargin }) => biggerMargin && css`
    margin-top: 220px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      margin-top: 66px;
    }
  `}
`;

export const StyledIcon = styled(Icon)`
  width: 90px;
  height: 90px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 35px;
    height: 35px;
  }
`;