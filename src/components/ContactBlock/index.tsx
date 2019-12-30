import React, { ReactNode, useRef } from 'react';
import PagePanel from '../PagePanel';
import Container from '../Container';
import { serialize } from '@src/utils/helpers';

const ContactBlock: React.FC = () => {
  const formName = 'contact-form';
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fetchOptions: RequestInit = {
      body: serialize(form),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    };

    console.log(fetchOptions);

    fetch('/', fetchOptions)
      .then(() => {
        alert("Thanks for reaching out! I'll be in touch soon =)");
        form.reset();
      })
      .catch(error => alert(error));
  };

  return (
    <PagePanel name="contact">
      <Container>
        <h2>Let's Collaborate</h2>
        <form
          name={formName}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <p>
            <label htmlFor={`${formName}-email`}>Your Email:</label>
            <input
              id={`${formName}-email`}
              type="email"
              name={`${formName}-email`}
              placeholder="Email"
              required
            />
          </p>
          <input type="hidden" name="form-name" value={formName} />
          <p>
            <input id={`${formName}-submit`} type="submit" />
          </p>
        </form>
      </Container>
    </PagePanel>
  );
};

export default ContactBlock;
