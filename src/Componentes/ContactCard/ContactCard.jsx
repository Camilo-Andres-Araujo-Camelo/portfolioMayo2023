/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { contactData } from '../../info';
import {
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
  FaMailBulk,
} from 'react-icons/fa';

const CardContainer = styled.a`
  background-color: red;
  display: flex;
  height: 50px;
  width: 100%;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #430d79;
  color: ${({ theme }) => theme.textColor};
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  max-width: 250px;

  &:hover {
  }
`;

const ContactCard = ({ data }) => {
  return (
    <>
      {data.icon === 'FaMailBulk' ? (
        <CardContainer href="mailto:caac3095@hotmail.com">
          {data.socialNetwork}
          <FaMailBulk width={60} height={60} />
        </CardContainer>
      ) : (
        <CardContainer href={data.link} target="_blank">
          <p>{data.socialNetwork}</p>
          {data.icon === 'FaGithubSquare' ? (
            <FaGithubSquare width={60} height={60} />
          ) : data.icon === 'FaLinkedin' ? (
            <FaLinkedin width={60} height={60} />
          ) : (
            <FaWhatsappSquare width={60} height={60} />
          )}
        </CardContainer>
      )}
    </>
  );
};

export default ContactCard;
