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

export const Year = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 120%;
  color: ${({ theme }) => theme.color.black};
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 12px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    margin-top: 4px;
    font-size: 13px;
    line-height: 130%;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const List = styled.dl`
  margin: 24px 0 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    font-size: 12px;

    ${({ movie }) => movie && css`
      margin-top: 8px;
    `}
  }
`;

export const ListRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 4px;
  }

  ${({ nextItem }) => nextItem && css`
    margin-top: 8px;
  `}
`;

export const ListTerm = styled.dt`
  color: ${({ theme }) => theme.color.stormGray};

  ${({ movie }) => movie && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      display: none;
    }
  `}
`;

export const ListDescription = styled.dd`
  color: ${({ theme }) => theme.color.black};
  margin: 0;
`;

export const Description = styled.div`
  grid-area: description;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 16px;
  }
`;