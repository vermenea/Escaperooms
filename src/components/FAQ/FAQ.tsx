import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import './FAQ.css';

const faqItems = [
  {
    question: 'How long does the game last?',
    answer:
      'The game typically lasts for 60 minutes, but it can vary depending on the specific room and scenario.',
  },
  {
    question: 'How long does the game last?',
    answer:
      'The game typically lasts for 60 minutes, but it can vary depending on the specific room and scenario.',
  },
  {
    question: 'How long does the game last?',
    answer:
      'The game typically lasts for 60 minutes, but it can vary depending on the specific room and scenario.',
  },
  {
    question: 'How long does the game last?',
    answer:
      'The game typically lasts for 60 minutes, but it can vary depending on the specific room and scenario.',
  },
  {
    question: 'How long does the game last?',
    answer:
      'The game typically lasts for 60 minutes, but it can vary depending on the specific room and scenario.',
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <main className='main-wrapper'>
      <Typography variant='h3'>Najczęściej zadawane pytania</Typography>
      <p className='body'>
        W tej sekcji strony prawdopodobnie znajdziesz odpowiedź na wszystkie
        pytania związane z grą w escaperoomie, naszym lokalem, lokalizacją.
        Dowiesz się wszystkiego o wejściach szkolnych, firmowych, grupach
        zorganizowanych, a nawet udzielimy wskazówek do gry w escaperooms.
      </p>
      <hr style={{ backgroundColor: 'white', height: '1px', border: 'none' }} />
      {faqItems.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          style={{
            backgroundColor: 'transparent',
            color: 'rgb(242, 242, 242)',
            padding: '1em',
            boxShadow: 'none',
            border: 'none',
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: 'rgb(223, 87, 14)' }} />
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
            style={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: 'none',
            }}
          >
            <Typography style={{ color: 'rgb(223, 87, 14)' }}>
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: 'none',
            }}
          >
            <Typography variant='body1'>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <hr style={{ backgroundColor: 'white', height: '1px', border: 'none' }} />
      <p className='body'>
        <span>Masz więcej pytań ?</span> Z przyjemnością pomozemy. Skontaktuj
        się z nami telefonicznie pod numer "tutaj wstawimy numer
        przekierowujący"
      </p>
    </main>
  );
}
