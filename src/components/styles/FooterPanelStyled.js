import styled from '@emotion/styled';

const FooterPanelStyled = styled.footer`
  width: 100%;
  max-width: 1366px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 40px;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: 400;

  div {
    width: 100%;
    height: 180px;
    position: relative;
    z-index: 1;
    float: right;
    padding: 40px 25px;
    margin-bottom: 40px;
    background-color: #fff;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  }

  .linkedin-icon {
    width: 20px;
    height: 20px;
  }

  .email-me {
    display: block;
    margin: 10px 0 15px;
  }

  @media screen and (min-width: 1200px) and (min-height: 620px) {
    &.fixed {
      position: fixed;
      top: 420px;

      div {
        width: 300px;
        float: none;
      }
    }

    &.relative {
      position: relative;
      top: 0;

      div {
        width: calc(100% - 340px);
        float: right;
      }
    }
  }

  @media screen and (min-width: 1200px) and (min-height: 660px) {
    &.fixed {
      top: 440px;
    }
  }
`;

export default FooterPanelStyled;
