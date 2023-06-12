import { useState } from 'react';
// import Box from '@mui/material/Box';
import {
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const CustomizedAccordion = styled(Accordion)`
  background-color: #430d79;
  &:hover {
    background-color: #3d0d6e;
  }
`;

const CustomizedAccordionSummary = styled(AccordionSummary)`
  color: #ffffff;
`;

const CustomizedAccordionDetails = styled(AccordionDetails)`
  background-color: #241d41;
`;

const CustomizedTypography = styled(Typography)`
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
`;

const ProfEx = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Container maxWidth="md">
        <CustomizedAccordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{ mb: 2 }}
        >
          <CustomizedAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <CustomizedTypography sx={{ width: '33%', flexShrink: 0 }}>
              General settings
            </CustomizedTypography>
            <CustomizedTypography>I am an accordion</CustomizedTypography>
          </CustomizedAccordionSummary>
          <CustomizedAccordionDetails>
            <CustomizedTypography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </CustomizedTypography>
          </CustomizedAccordionDetails>
        </CustomizedAccordion>
      </Container>
    </>
  );
};

export default ProfEx;
