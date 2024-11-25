import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

import './FAQ.css';
import { faqItems } from './questions';

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const filteredFaqItems = selectedCategory
    ? faqItems.filter((item) => item.category === selectedCategory)
    : faqItems;

  return (
    <main className='main-wrapper'>
      <h2>Najczęściej zadawane pytania</h2>
      <p className='body'>
        W tej sekcji strony prawdopodobnie znajdziesz
        <strong> odpowiedź na wszystkie pytania</strong> związane z grą w
        escaperoomie, naszym lokalem, lokalizacją. Dowiesz się wszystkiego o
        wejściach szkolnych, firmowych, grupach zorganizowanych, a nawet
        udzielimy
        <strong> wskazówek do gry w escaperooms</strong> .
      </p>
      <hr style={{ backgroundColor: 'white', height: '1px', border: 'none' }} />

      <section className='categories'>
        {[
          'Najczęściej zadawane przez rodziców',
          'Poradnik do gry w Escaperooms',
          'Wszystko o naszej lokalizacji i jak do nas dotrzeć',
          'Zadawane przez nauczycieli',
          'Urodziny w Escaperooms',
          'Zadawane przez firmy i organizatorów wycieczek',
          'Wszystko o rezerwacji pokoi',
        ].map((category, index) => (
          <div
            key={index}
            className={`category-box ${
              selectedCategory === category ? 'selected' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </section>

      <section className='question-box'>
        {filteredFaqItems.map((item, index) => (
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
      </section>

      <hr style={{ backgroundColor: 'white', height: '1px', border: 'none' }} />
      <p className='body'>
        <span>Masz więcej pytań ?</span> Z przyjemnością pomozemy. Skontaktuj
        się z nami telefonicznie pod numer "tutaj wstawimy numer
        przekierowujący"
      </p>
    </main>
  );
}
