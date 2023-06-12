/* eslint-disable react/prop-types */
import styled from 'styled-components';
import ReactIcon from '../Icons/ReactIcon';
import NodeIcon from '../Icons/NodeIcon';
import Computer from '../Icons/Computer';

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.textColor};
  padding: 40px 30px;
  margin-bottom: 10px;

  @media screen and (min-width: 1200px) {
    width: 366px;
    height: 332px;
  }
`;

const SkillHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SkillIconContainer = styled.div`
  margin-right: 2rem;
`;

const SkillTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.textColor};
  font-size: 2rem;
  line-height: 2rem;
  white-space: nowrap;
`;

const SkillDescription = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
  margin-top: 30px;
  text-align: justify;
`;

const SkillContent = (props) => {
  const { icon, title, text } = props.info;

  return (
    <SkillCard>
      <SkillHeader>
        <SkillIconContainer>
          {icon === 'ReactIcon' ? (
            <ReactIcon width={60} height={60} />
          ) : icon === 'NodeIcon' ? (
            <NodeIcon width={60} height={60} />
          ) : (
            <Computer width={60} height={60} />
          )}
        </SkillIconContainer>
        <SkillTitle>{title}</SkillTitle>
      </SkillHeader>
      <SkillDescription>{text}</SkillDescription>
    </SkillCard>
  );
};

export default SkillContent;
