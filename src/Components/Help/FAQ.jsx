import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework for creating custom designs."
    },
    {
      question: "How does useState work?",
      answer: "useState is a React hook that lets you add state to functional components."
    },
    {
      question: "What is a component?",
      answer: "A component is a reusable piece of UI in React."
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension that allows mixing HTML with JavaScript."
    },
    {
      question: "What are props in React?",
      answer: "Props are inputs to components that allow data to be passed from one component to another."
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            className="w-full flex justify-between items-center focus:outline-none"
            onClick={() => toggleQuestion(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            {openQuestion === index ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </button>
          {openQuestion === index && (
            <div className="mt-2 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
