import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  padding: 0 16px;
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  aspect-ratio: 1368 / 769;
  color: ${({ theme }) => theme.color.white};
  background-image: ${({ picture }) => `url(${picture})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 56px;
  box-shadow: 
    inset 0 0 30px 38px ${({ theme }) => theme.color.black},
    inset 0 -120px 240px 60px ${({ theme }) => theme.color.black};
  
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    box-shadow: 
      inset 0 0 20px 30px ${({ theme }) => theme.color.black},
      inset 0 -120px 200px 40px ${({ theme }) => theme.color.black};
    padding-bottom: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    box-shadow: 
      inset 0 0 20px 24px ${({ theme }) => theme.color.black},
      inset 0 -100px 160px 20px ${({ theme }) => theme.color.black};
    padding-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    box-shadow: 
      inset 0 0 10px 10px ${({ theme }) => theme.color.black},
      inset 0 -45px 80px 16px ${({ theme }) => theme.color.black};
    padding-bottom: 8px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    font-size: 44px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    font-size: 24px;
  }
`;