/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import Skills from '../Skills/Skills';
import ProfEx from '../ProfEx/ProfEx';
import { Container } from '@mui/material';
import AcademicFormation from '../AcademicFormation/AcademicFormation';
import { academicTitles } from '../../info';
import ContactCard from '../ContactCard/ContactCard';
import { contactData } from '../../info';

const SectionsWrapper = styled.div`
  padding: 2rem 0 0;
  width: 100%;
  background-color: ${({ theme }) => theme.navBarBgColor};
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.7rem;
  color: ${({ theme }) => theme.titlesColor};
  text-align: center;
  margin: 2rem 0;
  line-height: 2.5rem;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100%;
    border-bottom: 1px solid;
    margin-top: 10px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  &:hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const SectionText = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;
  text-align: justify;
`;

const AcademicContainer = styled.div`
  display: flex;
  column-gap: 15px;
  justify-content: space-between;
  margin-top: 15px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 50px;
  flex-wrap: wrap;
  @media screen and (min-width: 400px) {
    flex-direction: row;
  }
`;

const Sections = () => {
  return (
    <SectionsWrapper>
      <Container maxWidth="lg">
        <SectionTitle>Habilidades</SectionTitle>
        <Skills />
      </Container>
      <Container maxWidth="lg">
        <SectionTitle>Acerca de mí</SectionTitle>
        <SectionText>
          Soy un desarrollador con experiencia en creación de SPA's con React JS
          y API's Rest con Node JS, Express JS y PostgreSQL. En la actualidad me
          encuentro profundizando en tecnologías relacionadas y aprendiendo
          nuevas, tales como, React Native, TypeScript, MongoDB y Java. <br />
          <br />
          Además brindo asesorías a estudiantes universitarios en trabajos sobre
          fundamentos de programación, HTML, CSS, JavaScript, PSeInt, RUR-PLE
          (Phyton) o cualquier tema relacionado con la carrera de Ing. de
          Sistemas. <br />
          <br />
          Dentro de mi formación académica destaca:
        </SectionText>
        <AcademicContainer>
          {academicTitles.map((Ac, i) => {
            return <AcademicFormation key={i} data={Ac} />;
          })}
        </AcademicContainer>
      </Container>
      <Container maxWidth="md">
        <SectionTitle>Proyectos</SectionTitle>
        <ProfEx />
      </Container>
      <Container maxWidth="md">
        <SectionTitle>Experiencia Profesional</SectionTitle>
        <ProfEx />
      </Container>
      <Container maxWidth="lg">
        <SectionTitle>Contáctame</SectionTitle>
        <SectionText>
          Si necesitas un desarollador responsable y comprometido para tu
          empresa, ¡Soy a quien buscas! <br />
          <br /> Estoy abierto a aprender nuevos lenguajes y frameworks para
          adaptarme a las necesidades y requerimientos de tu compañía.
          <br />
          <br /> Tengo disponiblidad para cambiar de ciudad de residencia en
          caso de que así lo requira el trabajo. <br />
          <br />
          ¡Contáctame ahora!
          <br />
          <br />
        </SectionText>
        <ContactContainer>
          {contactData.map((cd, i) => {
            return <ContactCard data={cd} key={i} />;
          })}
        </ContactContainer>
      </Container>
    </SectionsWrapper>
  );
};

export default Sections;
