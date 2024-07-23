import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--lightest-mimir-green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    //background-color: var(--lightest-mimir-green);
    background-color: white;
    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--mimir-green);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--lightest-mimir-green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'HTML & CSS',
    'React.js',
    'Node.js',
    'Next.js',
    'Spring Boot',
    'C/C++',
    'Git',
    'Java',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello there! My name is <span style={{color:"#BBE1DD"}}>Hasan</span> and I am a <span style={{color:"#BBE1DD"}}>Software Engineer</span> with solid expertise in developing large-scale web applications. I have strong problem-solving skills in data structures & algorithms. Additionally, I possess solid low level design and system design skills. Technology is not a restriction for me as I'm a quick learner & pick up a new tech stack within a short span of time.
            </p>
            {/* <p>
              My interest in Computers and Robotics started back in 2015 when I built and programmed
              my first modular robot using RobotC and a Lego NXT 2.0 Kit. The robots that I built
              and programmed as a novice won several of the national competitions that I
              participated in, and it only ignited my passion for learning new programming languages
              and technologies even further.
            </p> */}

            <p>
              Fast-forward to today, I have completed my bachelors
              from 
              <a href="https://www.manit.ac.in/" target='_blank'> National Institute of Technology Bhopal </a>, batch of 2021. 
            </p>



            <p>Here are a few technologies I’ve been working with/learning about:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li style={{color:"#CCE1DD"}} key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.JPG"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
