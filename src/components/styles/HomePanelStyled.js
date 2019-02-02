import styled from '@emotion/styled';
import ArrowStyled from './elements/ArrowStyled';

const HomePanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .fwm-icon {
    width: 76px;
    height: 46.09px;
    display: block;
  }

  .fwm-logo {
    width: 100%;
    height: auto;
    max-width: 370px;
    max-height: 45.8px;
  }

  span.fwm-logo {
    margin: 25px 0 20px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 300;
    margin: 0 0 30px;
  }

  button {
    background-color: transparent;
    border: 0;
    margin-top: 40px;
    padding: 10px 20px;
    color: #40afe9;
  }

  @media screen and (min-width: 600px) {
    h1 {
      font-size: 2.6rem;
    }
  }
`;

export { HomePanelStyled, ArrowStyled };
