/* eslint-disable no-unused-vars */
import styled, { keyframes } from 'styled-components';
import profileImg from '../../assets/images/profilePicture1.jpg';
import background from '../../assets/images/homeCover.jpg';
import TypeWriter from '../TypeWritter/TypeWritter';

const HeaderWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  padding: 2rem 1rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${background});
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 65px;
  margin-bottom: 40px;

  @media screen and (min-width: 600px) {
    @media screen and (max-width: 800px) {
      height: calc(100vw - 65px);
    }
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 1.5rem;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.textColor};
  font-size: 2.7rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
`;

const Dev = styled.span`
  position: absolute;
  right: 8px;
  top: 50px;
  font-family: 'Satisfy', cursive;
  font-weight: 100;
`;

const AcademicTitle = styled.h2`
  font-family: 'Manrope', sans-serif;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textColor};
  line-height: 3rem;
  font-weight: 600;
`;

const LightBulbAnimation = keyframes`
  0% {
    opacity:.5;
    -webkit-opacity: .5;
  }
  40% {
    opacity:1;
    -webkit-opacity: 1;
  }
  80% {
    opacity:0;
    -webkit-opacity: 0.5;
  }
  100% {
    opacity:0;
    -webkit-opacity: .5;
  }
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border: 5px solid #16222e;
  border-radius: 50%;
  margin-bottom: 2rem;
  animation: ${LightBulbAnimation} 5s infinite;
  -webkit-animation: ${LightBulbAnimation} 5s infinite;
`;

const ArrowAnimation = keyframes`
  0% {
    opacity:0;
    -webkit-opacity: 0;
  }
  40% {
    opacity:1;
    -webkit-opacity: 1;
  }
  80% {
    opacity:0;
    -webkit-opacity: 0;
  }
  100% {
    opacity:0;
    -webkit-opacity: 0;
  }
`;

const ArrowsSVG = styled.svg`
  width: 60px;
  height: 72px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  bottom: 20px;
`;

const Path = styled.path`
  stroke: #2994d1;
  fill: transparent;
  stroke-width: 1px;
  animation: ${ArrowAnimation} 2s infinite;
  -webkit-animation: ${ArrowAnimation} 2s infinite;
`;
const Path1 = styled(Path)`
  animation-delay: -1s;
  -webkit-animation-delay: -1s; /* Safari 和 Chrome */
`;
const Path2 = styled(Path)`
  animation-delay: -0.5s;
  -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
`;
const Path3 = styled(Path)`
  animation-delay: 0s;
  -webkit-animation-delay: 0s; /* Safari 和 Chrome */
`;

const Header = () => {
  return (
    <HeaderWrapper className="HeaderWrapper">
      <MainContainer>
        <DescriptionContainer>
          <Title>
            Camilo Araujo<Dev>Dev</Dev>
          </Title>
          <ProfileImg src={profileImg}></ProfileImg>
          <TypeWriter value="Full Stack Developer !"></TypeWriter>
        </DescriptionContainer>
        <ArrowsSVG>
          <Path1 className="a1" d="M0 0 L30 32 L60 0"></Path1>
          <Path2 className="a2" d="M0 20 L30 52 L60 20"></Path2>
          <Path3 className="a3" d="M0 40 L30 72 L60 40"></Path3>
        </ArrowsSVG>
      </MainContainer>
    </HeaderWrapper>
  );
};

export default Header;
