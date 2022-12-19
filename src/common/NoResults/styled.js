import styled from "styled-components";
import { ReactComponent as NoResultImage } from "../images/no-results.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 0px;
  }
`;

export const StyledImage = styled(NoResultImage)`
  width: 668px;
  height: 508px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 334px;
    height: 254px;
    min-width: 334px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 167px;
    height: 127px;
  }
`;