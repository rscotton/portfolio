import React, { useRef } from 'react';
import cn from 'classnames';
import { serialize } from '@src/utils/helpers';
import PagePanel from '@components/PagePanel';
import Grid, { Col } from '@components/Grid';
import Icon from '@components/Icon';
import componentStyles from './styles.module.scss';

const ContactPanel: React.FC = () => {
  const formName = 'contact-form';
  const formInputEmailRef = useRef<HTMLInputElement>(null);
  const handleInputChange = () => {
    const formInput = formInputEmailRef.current;

    if (formInput) {
      const isNonEmpty = !!formInput.value;
      const nonEmptyClass = componentStyles['non-empty'];

      if (isNonEmpty) {
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
        alert(`Thanks for reaching out! I'll be in touch soon =)`);
        form.reset();
      })
      .catch(error => alert(error));
  };

  return (
    <PagePanel name="contact">
      <Grid rowClassName={componentStyles.row}>
        <Col md={10} mdOffset={1} lg={4}>
          <h2 className={componentStyles.title}>Let's Collaborate</h2>
        </Col>
        <Col md={10} mdOffset={1} lg={4} lgOffset={0}>
          <form
            className={componentStyles.form}
            name={formName}
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <div
              className={cn(
                componentStyles['form-item'],
                componentStyles['form-item-email']
              )}
            >
              <input
                ref={formInputEmailRef}
                id={`${formName}-email`}
                type="email"
                name={`${formName}-email`}
                className={cn(
                  componentStyles['form-input'],
                  componentStyles['form-input-email']
                )}
                onChange={handleInputChange}
                required
              />
              <label
                aria-hidden={true}
                className={componentStyles['form-label']}
                htmlFor={`${formName}-email`}
              >
                Email
              </label>
            </div>
            <input type="hidden" name="form-name" value={formName} />
            <div
              className={cn(
                componentStyles['form-item'],
                componentStyles['form-item-submit']
              )}
            >
              <input
                id={`${formName}-submit`}
                type="submit"
                className={componentStyles['form-submit']}
              />
              <div className={componentStyles['icon-wrap']}>
                <Icon name="long-arrow" />
              </div>
            </div>
          </form>
        </Col>
      </Grid>
    </PagePanel>
  );
};

export default ContactPanel;
