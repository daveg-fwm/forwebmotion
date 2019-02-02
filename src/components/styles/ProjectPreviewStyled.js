import styled from '@emotion/styled';

const ProjectPreviewStyled = styled.div`
  .intro {
    margin-bottom: 40px;
    transform: translateY(-200%);
  }

  .project {
    display: grid;
    grid-template-columns: 25px 1fr;
    height: 74vw;
    max-height: 460px;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 600;
    position: relative;
    overflow: hidden;
  }

  a.project:active {
    animation: none;
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
    height: 249px;
    width: 240px;
    text-align: right;
    text-transform: uppercase;
  }

  .project-bg {
    height: 64vw;
    max-height: 380px;
    padding: 9px 15px;
    transform: translateX(-110%);

    p {
      color: #fff;
      margin-bottom: 8px;
    }
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

  .banner {
    width: 60.5vw;
    height: 33vw;
    max-width: 550px;
    max-height: 300px;
    position: absolute !important;
    bottom: 6px;
    right: 10px;
    background-color: #fff;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(110%);
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
    width: 40px;
    height: 40px;
    position: relative;
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

  @media screen and (min-width: 1200px) and (min-height: 620px) {
    .intro {
      margin-bottom: 60px;
    }

    .preview {
      margin-bottom: 80px;
    }

    .project {
      height: 34vw;
      margin: 0 -25px;
    }

    .project-bg {
      height: 28.5vw;
    }

    .project-page-bg {
      width: calc(100% - 25px);
    }

    .banner {
      width: 40.3vw;
      height: 22vw;
      right: 40px;
    }

    .project-page-banner {
      right: 0;
    }

    h1 {
      height: 255px;
    }
  }
`;

export default ProjectPreviewStyled;
