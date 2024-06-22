import { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  { question: 'What is Next.js?', answer: 'Next.js is a React framework for production.' },
  { question: 'How do I use Next.js?', answer: 'You can use Next.js by creating a new project and writing React components.' },
  // Add more FAQs here
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
        className="faq-question"
      >
        {question}
      </motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="faq-answer"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
