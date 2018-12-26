import styled from '@emotion/styled';
import NavButton from './elements/NavButton';

const HeaderPanel = styled.header`
  width: 100%;
  max-width: 1366px;
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  padding: 0 40px;
  margin: 0 auto;

  div:not(.top-nav) {
    width: 300px;
    height: 360px;
    padding: 0 25px 30px;
    background-color: #fff;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-rows: 85px 1fr;
    position: relative;
    overflow: hidden;
  }

  .top-nav {
    width: 100%;
    background-color: inherit;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  .fwm-icon {
    width: 64.48px;
    height: 25px;
  }

  nav {
    position: absolute;
    width: 100%;
    height: calc(100% - 85px);
    top: 85px;
    left: 0;
    padding: 0 25px;
    background-color: inherit;
    transform: translateY(-100%);
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
      text-decoration: underline;

      &.active {
        text-decoration: line-through;
      }
    }
  }
`;

export { HeaderPanel, NavButton };
