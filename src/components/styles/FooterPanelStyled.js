import styled from '@emotion/styled';

const FooterPanelStyled = styled.footer`
  width: 100%;
  max-width: 960px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 10px;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 400;

  &.scroll {
    position: fixed;
    opacity: 0;
  }

  .hide-panel {
    overflow: hidden;
    margin: -6px;
    padding: 6px;
  }

  .footer-panel {
    width: 100%;
    height: 180px;
    position: relative;
    z-index: 1;
    padding: 40px 25px;
    margin-bottom: 38px;
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

  p {
    margin-bottom: 0;
  }

  @media (min-width: 400px) {
    font-size: 1.6rem;
  }

  @media (min-width: 600px) {
    .footer-panel {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .email-me {
      margin: -2px 0 0;
    }
  }

  @media (min-width: 700px) {
    padding: 0 40px;
  }

  @media (min-width: 750px) {
    .footer-panel {
      padding: 40px 10%;
    }
  }

  @media (min-width: 900px) {
    .footer-panel {
      padding: 40px 15%;
    }
  }

  @media (min-width: 1200px) and (min-height: 620px) {
    max-width: 1366px;

    &.fixed {
      position: fixed;
      top: 420px;

      .footer-panel {
        width: 300px;
        float: none;
        display: block;
        padding: 40px 25px;
      }

      .email-me {
        margin: 10px 0 15px;
      }
    }

    &.relative {
      position: relative;
      top: 0;

      .footer-panel {
        width: calc(100% - 340px);
        float: right;
        padding: 40px 10%;
      }
    }
  }

  @media (min-width: 1200px) and (min-height: 660px) {
    &.fixed {
      top: 440px;
    }
  }
`;

export default FooterPanelStyled;
