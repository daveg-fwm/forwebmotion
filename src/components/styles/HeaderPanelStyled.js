import styled from '@emotion/styled';
import NavButtonStyled from './elements/NavButtonStyled';
import ArrowStyled from './elements/ArrowStyled';
import HeaderContentStyled from './HeaderContentStyled';

const HeaderPanelStyled = styled.header`
  width: 100%;
  max-width: 1366px;
  height: 85px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 400;
  z-index: 2;

  &.scroll {
    position: absolute;
  }

  .header-panel-inner {
    width: 100%;
    height: inherit;
    min-height: 85px;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }

  .top-nav {
    max-width: 930px;
    margin: 0 auto;
    padding: 30px 25px 20px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    position: relative;
    z-index: 1;
  }

  .fwm-icon {
    width: 46px;
    height: 27.89px;
  }

  .header-content-container {
    padding: 85px 25px 30px;
    background-color: #fff;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(-100%);
  }

  div.hide-panel {
    overflow: hidden;
    margin: 0 -25px;
    padding: 0 25px;
  }

  nav {
    width: 100%;
    max-width: 600px;
    height: calc(100% - 85px);
    background-color: #fff;
    margin: 30px auto 0;
    border-top: 1px solid #ccc;
    padding-top: 20px;
  }

  ul {
    display: grid;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: grid;
    align-items: center;

    a {
      padding: 15px 0;

      &.active {
        text-decoration: line-through;
      }
    }
  }

  .github-icon {
    width: 25px;
    height: 25px;
    fill: #40afe9;

    .tooltip {
      display: none;
    }
  }

  div.SVGInline {
    display: inline-table;
  }

  @media (min-width: 400px) {
    font-size: 1.6rem;
  }

  @media (min-width: 930px) {
    div.hide-panel {
      max-width: 930px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1200px) and (min-height: 620px) {
    height: auto;
    padding: 0 40px;
    top: 20px;
    z-index: 1;

    .header-panel-inner {
      width: 300px;
      min-height: 360px;
      background-color: #fff;
      box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }

    .header-content-container {
      padding-top: 0;
      box-shadow: none;
      transform: none;
    }

    div.hide-panel {
      max-width: auto;
      margin: 0 -25px;
    }

    nav {
      position: absolute;
      top: 85px;
      left: 0;
      padding: 0 25px;
      margin-top: 0;
      border-top: 0;
      transform: translateY(-100%);
    }
  }

  @media (min-width: 1200px) and (min-height: 660px) {
    top: 40px;
  }
`;

export { HeaderPanelStyled, HeaderContentStyled, NavButtonStyled, ArrowStyled };
