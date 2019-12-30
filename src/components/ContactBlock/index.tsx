import React, { ReactNode, useRef } from 'react';
import PagePanel from '../PagePanel';
import Container from '../Container';
import { serialize } from '@src/utils/helpers';

const ContactBlock: React.FC = () => {
  const formId = 'contact-form';
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fetchOptions: RequestInit = {
      body: serialize(form),
      method: 'post',
    };

    fetch(form.action, fetchOptions).then(() => {
      alert("Thanks for reaching out! I'll be in touch soon =)");
      form.reset();
    });
  };

  return (
    <PagePanel name="contact">
      <Container>
        <h2>Let's Collaborate</h2>
        <form
          id={formId}
          name={formId}
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <p>
            <label htmlFor={`${formId}-email`}>Your Email:</label>
            <input
              id={`${formId}-email`}
              type="email"
              name={`${formId}-email`}
              placeholder="Email"
              required
            />
          </p>
          <p>
            <input id={`${formId}-submit`} type="submit" />
          </p>
        </form>
      </Container>
    </PagePanel>
  );
};

export default ContactBlock;
