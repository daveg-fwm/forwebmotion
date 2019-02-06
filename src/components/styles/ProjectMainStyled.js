import styled from '@emotion/styled';

const ProjectMainStyled = styled.div`
  max-width: 530px;
  margin: 0 auto;
  transform: translateY(10%);
  opacity: 0;

  .heading {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    margin: 60px 0 40px;

    h1 {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 20px;
    }

    span {
      background-color: #121415;
      height: 1px;
    }
  }

  .gatsby-image-wrapper,
  .video-container {
    margin: 60px 0;
  }

  .video-container {
    position: relative;
  }

  button {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 1;

    &.hide {
      display: none;
    }

    span {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 60px;
      height: 40px;
      background-color: #40afe9;
      border-radius: 10px;

      span {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-left: 15px solid #fff;
        border-bottom: 10px solid transparent;
        border-radius: 0;
        left: 2px;
      }
    }
  }

  video {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  @media (min-width: 400px) {
    .gatsby-image-wrapper,
    .video-container {
      margin: 100px 0;
    }

    .heading {
      margin-top: 100px;
    }
  }

  @media (min-width: 1200px) and (min-height: 620px) {
    width: 40.3vw;
  }
`;

export default ProjectMainStyled;
