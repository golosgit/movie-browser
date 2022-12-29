import styled, { css } from "styled-components";
import noPersonImage from "../images/profile.svg";
import noMovieImage from "../images/video.svg";

export const Container = styled.div`
  margin-top: 56px;
  display: grid;
  align-items: start;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "image info"
    "image description";

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    padding: 24px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    margin-top: 16px;
    padding: 16px;
    grid-template-areas:
      "image info"
      "description description";
  }
`;

export const Image = styled.img`
  grid-area: image;
  aspect-ratio: 399 / 564;
  width: 399px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};
  background-image: url(${noPersonImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;
  margin-right: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    width: 300px;
    margin-right: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 199px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    width: 116px;
    margin-right: 16px;
  }

  ${({ movie }) => movie && css`
    aspect-ratio: 312 / 464;
    max-width: 312px;
    background-image: url(${noMovieImage});

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
      width: 260px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      width: 200px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      width: 114px;
    }
  `}
`;

export const Info = styled.div`
  grid-area: info;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
`;

export const List = styled.dl`
  margin: 24px 0 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    font-size: 12px;
    grid-template-columns: auto;
  }
`;

export const ListTerm = styled.dt`
  color: ${({ theme }) => theme.color.stormGray};
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    margin: 0;
  }

  ${({ nextItem }) => nextItem && css`
    margin-top: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      margin-top: 8px;
    }
  `}
`;

export const ListDescription = styled.dd`
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    margin: 4px 0 0;
  }

  ${({ nextItem }) => nextItem && css`
    margin-top: 8px;
  `}
`;

export const Description = styled.div`
  grid-area: description;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 16px;
  }
`;