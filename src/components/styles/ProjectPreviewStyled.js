import styled from '@emotion/styled';

const ProjectPreviewStyled = styled.div`
  .intro {
    transform: translateY(-200%);
  }

  .project {
    display: grid;
    grid-template-columns: 25px 1fr;
    height: 80vw;
    max-height: 460px;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 600;
    position: relative;
    overflow: hidden;
  }

  a.project {
    margin-top: 40px;

    &:active {
      animation: none;
    }
  }

  .project-arrow {
    display: flex;
    flex-direction: column;
    margin-left: 2px;
    transform: translateX(-100%);
  }

  h1 {
    font-size: inherit;
    transform: rotate(-90deg);
    height: 255px;
    width: 240px;
    text-align: right;
    text-transform: uppercase;
  }

  .project-bg {
    height: 64vw;
    max-height: 380px;
    padding: 9px 15px;
    transform: translateX(-115%);
    border-radius: 3px;

    p {
      color: #fff;
      margin-bottom: 8px;
    }
  }

  .project-page-bg {
    margin-left: -25px;
    padding: 25px;
  }

  .rsc-project {
    color: #fedf2f;

    .project-arrow {
      color: #fedf2f;

      .arrow {
        span:nth-of-type(2) {
          background-color: #fedf2f;
        }
      }
    }

    .project-bg {
      background-color: #fedf2f;
    }
  }

  .iotga-project {
    h1 {
      color: #bb9847;
    }

    .project-arrow {
      color: #bb9847;

      .arrow {
        span:nth-of-type(2) {
          background-color: #bb9847;
        }
      }
    }

    .project-bg {
      background-color: #bb9847;
    }
  }

  .wkmpg-project {
    h1 {
      color: #41a940;
    }

    .project-arrow {
      color: #41a940;

      .arrow {
        span:nth-of-type(2) {
          background-color: #41a940;
        }
      }
    }

    .project-bg {
      background-color: #41a940;
    }
  }

  .expat-project {
    h1 {
      color: #bc2224;
    }

    .project-arrow {
      color: #bc2224;

      .arrow {
        span:nth-of-type(2) {
          background-color: #bc2224;
        }
      }
    }

    .project-bg {
      background-color: #bc2224;
    }
  }

  .forwebmotion-project {
    h1 {
      color: #40afe9;
    }

    .project-arrow {
      color: #40afe9;

      .arrow {
        span:nth-of-type(2) {
          background-color: #40afe9;
        }
      }
    }

    .project-bg {
      background-color: #40afe9;
    }
  }

  .banner {
    width: 60.5vw;
    height: 33vw;
    max-width: 550px;
    max-height: 300px;
    position: absolute !important;
    bottom: 12px;
    right: 12px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    transform: translateY(120%);
  }

  a.project.allow-hover .banner {
    transition: transform 0.2s ease-out;
  }

  a.project.allow-hover:hover .banner {
    transform: translateY(-10px) translateX(-16px) scale(1.05455, 1.05455) !important;
  }

  .project-page-banner {
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(110%) scale(1.05455, 1.05455);
  }

  img {
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 4.55%;
    object-fit: contain !important;
  }

  .close-project {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    background-color: #fff;
    transform: translateX(-100%);

    span {
      display: block;
      width: 16px;
      height: 2px;
      background-color: #40afe9;
      position: absolute;
      top: 7px;
    }
  }

  @media (min-width: 400px) {
    a.project {
      margin-top: 60px;
    }

    .banner {
      right: 20px;
    }

    .project-page-banner {
      right: 0;
    }
  }

  @media (min-width: 600px) {
    .project {
      margin: 0 -25px;
    }

    .project-page-bg {
      width: calc(100% - 25px);
      padding: 9px 15px;
      margin-left: 0;
    }

    .close-project {
      width: 40px;
      height: 40px;
      background-color: transparent;
    }

    .banner {
      right: 40px;
    }

    .project-page-banner {
      right: 0;
    }
  }

  @media (min-width: 1200px) and (min-height: 620px) {
    .project {
      height: 34vw;
    }

    .project-bg {
      height: 28.5vw;
    }

    .banner {
      width: 40.3vw;
      height: 22vw;
    }
  }
`;

export default ProjectPreviewStyled;
