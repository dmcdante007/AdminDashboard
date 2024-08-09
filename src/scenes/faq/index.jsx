import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography m='20px'>
            Yeah it is and Important question, we dont know know the answer to
            your question. Kindly use Google.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            2nd Important question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography m='20px'>
            Yeah it is and Important question, we dont know know the answer to
            your question. Kindly use Google.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            3rd Important question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography m='20px'>
            Yeah it is and Important question, we dont know know the answer to
            your question. Kindly use Google.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            4th Important question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography m='20px'>
            Yeah it is and Important question, we dont know know the answer to
            your question. Kindly use Google.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            5th Important question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography m='20px'>
            Yeah it is and Important question, we dont know know the answer to
            your question. Kindly use Google.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            6th Important question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography m='20px'>
            Yeah it is and Important question, we dont know know the answer to
            your question. Kindly use Google.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            7th Important question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography m='20px'>
            Yeah it is and Important question, we dont know know the answer to
            your question. Kindly use Google.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
