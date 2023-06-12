/* eslint-disable react/prop-types */
import styled from 'styled-components';

const AcademicTitleContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.containerBgColor};
  color: ${({ theme }) => theme.textColor};
  margin-top: 10px;
  column-gap: 5px;
  padding-right: 10px;
  align-items: center;
  border-radius: 8px;
  height: 110px;
  @media screen and (min-width: 400px) {
    width: 390px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e8e8e8;
  border-radius: 8px 0 0 8px;
  padding: 0 5px;
  height: 110px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: space-between;
  padding: 10px;
`;

const AcademicH4 = styled.h4`
  font-family: 'Roboto Mono', monospace;
  color: ${({ theme }) => theme.textColor};
  font-size: 13px;
  text-align: justify;
`;

const AcademicP = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: ${({ theme }) => theme.textColor};
  font-size: 13px;
  text-align: justify;
`;

const AcademicFormation = ({ data }) => {
  return (
    <AcademicTitleContainer>
      <LogoContainer>
        <Img src={data.logo} />
      </LogoContainer>
      <DescriptionContainer>
        <AcademicH4>{data.institute}</AcademicH4>
        <AcademicP>
          <strong>Título:</strong> {data.title}
        </AcademicP>
        <AcademicP>
          <strong>Estado:</strong> {data.state}
        </AcademicP>
      </DescriptionContainer>
    </AcademicTitleContainer>
  );
};

export default AcademicFormation;
