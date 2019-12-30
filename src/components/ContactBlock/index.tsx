import React, { useRef } from 'react';
import PagePanel from '../PagePanel';
import Container from '../Container';
import { serialize } from '@src/utils/helpers';
import componentStyles from './styles.module.scss';
import cn from 'classnames';

const ContactBlock: React.FC = () => {
  const formName = 'contact-form';
  const formInputEmailRef = useRef<HTMLInputElement>(null);
  const handleInputChange = () => {
    const formInput = formInputEmailRef.current;

    if (formInput) {
      const isEmpty = !!formInput.value;
      const nonEmptyClass = componentStyles['non-empty'];

      if (isEmpty) {
        formInput.classList.add(nonEmptyClass);
      } else {
        formInput.classList.remove(nonEmptyClass);
      }
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Netlify Ajax form handling: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-a-stateful-react-form
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fetchOptions: RequestInit = {
      body: serialize(form),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    };

    fetch(form.action, fetchOptions)
      .then(() => {
        alert("Thanks for reaching out! I'll be in touch soon =)");
        form.reset();
      })
      .catch(error => alert(error));
  };

  return (
    <PagePanel name="contact" theme="black">
      <Container>
        <h2 className={componentStyles.title}>Let's Collaborate</h2>
        <form
          name={formName}
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className={componentStyles.form}
        >
          <p className={componentStyles['form-item']}>
            <input
              ref={formInputEmailRef}
              id={`${formName}-email`}
              type="email"
              name={`${formName}-email`}
              className={componentStyles['form-input']}
              onChange={handleInputChange}
              required
            />
            <label
              className={componentStyles['form-label']}
              htmlFor={`${formName}-email`}
            >
              Email
            </label>
          </p>
          <input type="hidden" name="form-name" value={formName} />
          <p>
            <input
              id={`${formName}-submit`}
              type="submit"
              className={componentStyles['form-submit']}
            />
          </p>
        </form>
      </Container>
    </PagePanel>
  );
};

export default ContactBlock;
