import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { ReactComponent as Icon } from "./search.svg";

export const SearchWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 33px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 44px;
  }
`;

export const StyledInput = styled(DebounceInput)`
  width: auto;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  background-color: transparent;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const SearchIcon = styled(Icon)`
  margin: 0 16px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 13px;
    min-width: 13px;
    margin: 0 10px 0 18px;
  }
`;