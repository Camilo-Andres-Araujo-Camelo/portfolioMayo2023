import styled from 'styled-components';
import { cardInfo } from '../../info.js';
import SkillContent from '../SkillContent/SkillContent.jsx';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Skills = () => {
  return (
    <SkillsContainer>
      {cardInfo.map((info, i) => {
        return <SkillContent key={i} info={info} />;
      })}
    </SkillsContainer>
  );
};

export default Skills;
