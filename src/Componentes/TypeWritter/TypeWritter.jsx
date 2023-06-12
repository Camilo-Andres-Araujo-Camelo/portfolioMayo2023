/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const blinkTextCursor = keyframes`
  from {border-right-color: rgba(255, 255, 255, 0.75);}
  to {border-right-color: transparent}
`;

const TextCursor = styled.span`
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

const Container = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 2rem;
  color: ${({ theme }) => theme.textColor};
  line-height: 3rem;
  opacity: 0.7;
  font-weight: 600;
  display: inline-block;
  margin: 0;
`;

function TypeWriter({ value }) {
  const [text, setText] = useState('');

  const typeWriter = (text, i = 0) => {
    if (i < value.length) {
      setText(value.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 100);
    }
  };

  useEffect(() => {
    typeWriter(value);
  }, []);

  return (
    <Container>
      {text}
      <TextCursor />
    </Container>
  );
}

TypeWriter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default TypeWriter;
