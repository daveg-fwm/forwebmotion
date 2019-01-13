import styled from '@emotion/styled';
import ButtonStyled from './elements/ButtonStyled';

const HomePanelStyled = styled.div`
  .fwm-logo {
    width: 90%;
    height: auto;
    max-width: 520px;
    max-height: 64.36px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 300;
    margin: 10px 0 30px;
  }

  @media screen and (min-width: 600px) {
    h1 {
      font-size: 3.6rem;
    }
  }
`;

export { HomePanelStyled, ButtonStyled };
