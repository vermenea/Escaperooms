import { FAQItem } from '../../types/types';

const parentsQuestions: FAQItem[] = [
  {
    question: 'How long does the game last?',
    answer:
      'The game typically lasts for 60 minutes, but it can vary depending on the specific room and scenario.',
    category: 'Najczęściej zadawane przez rodziców',
  },
  {
    question: 'Is the game suitable for children?',
    answer:
      'Yes, we have rooms that are suitable for children aged 10 and above.',
    category: 'Najczęściej zadawane przez rodziców',
  },
];

const guideQuestions: FAQItem[] = [
  {
    question: 'What should I bring to the game?',
    answer:
      'You should bring a positive attitude and a willingness to solve puzzles!',
    category: 'Poradnik do gry w Escaperooms',
  },
  {
    question: 'Can I leave the room if I need to?',
    answer: 'Yes, you can leave the room at any time if you need to.',
    category: 'Poradnik do gry w Escaperooms',
  },
];

const locationQuestions: FAQItem[] = [
  {
    question: 'Where are you located?',
    answer: 'We are located at 123 Escape Room St.',
    category: 'Wszystko o naszej lokalizacji i jak do nas dotrzeć',
  },
  {
    question: 'Is there parking available?',
    answer: 'Yes, we have a parking lot available for our customers.',
    category: 'Wszystko o naszej lokalizacji i jak do nas dotrzeć',
  },
];

// inne dodamy potem

export const faqItems: FAQItem[] = [
  ...parentsQuestions,
  ...guideQuestions,
  ...locationQuestions,
  // ...inne
];
