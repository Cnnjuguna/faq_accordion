import React from 'react';
import './index.css';
import Accordion from './components/Accordion';

const faqs = [
  {
    title: 'How do I reset my password?',
    text: "To reset your password, go to the login page and click on the 'Forgot Password' link. You will receive an email with instructions on how to create a new password.",
  },

  {
    title: 'What are the system requirements for this software?',
    text: 'The system requirements for our software vary depending on the product version. Please check our website or the product documentation for the specific system requirements for the version you are using.',
  },

  {
    title: 'How can I contact customer support?',
    text: "You can contact our customer support team by phone, email, or through our online chat support. Visit our 'Contact Us' page on our website for more details and options.",
  },

  {
    title: 'What is your return policy for products?',
    text: "Our return policy allows for returns within 30 days of purchase, provided the product is in its original condition. Please review our 'Return Policy' page for detailed information and instructions.",
  },

  {
    title: 'Do you offer discounts for educational institutions?',
    text: "Yes, we offer special discounts for educational institutions and students. Please contact our sales team or visit our 'Education Discounts' page for more information on eligibility and how to apply.",
  },

  {
    title: 'Can I upgrade my subscription plan?',
    text: "Yes, you can upgrade your subscription plan at any time. Simply log in to your account, go to the subscription settings, and choose the plan you'd like to upgrade to.",
  },

  {
    title: 'How do I report a bug or issue?',
    text: 'If you encounter a bug or issue with our software, please report it through our dedicated bug tracking system. Provide as much detail as possible, including steps to reproduce the issue, and our development team will investigate.',
  },

  {
    title: 'What payment methods do you accept?',
    text: 'We accept a variety of payment methods, including credit cards, PayPal, and bank transfers. During the checkout process, you can select your preferred payment method and follow the instructions to complete your purchase.',
  },
];
function App() {
  return (
    <>
      <div>
        <Accordion data={faqs} />
      </div>
    </>
  );
}

export default App;
