import React from 'react';
import cn from 'classnames';
import PagePanel from '@components/PagePanel';
import Grid, { Col } from '@components/Grid';
import VerticalTitle from '@components/VerticalTitle';
import componentStyles from './styles.module.scss';

export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorUrl?: string;
}

interface Props {
  testimonial: Testimonial;
}

const TestimonialsPanel: React.FC<Props> = ({ testimonial }) => {
  const {
    quote,
    authorName,
    authorRole,
    authorCompany,
    authorUrl,
  } = testimonial;
  const attributionText = `${authorName}, ${authorRole} | ${authorCompany}`;

  return (
    <PagePanel name="testimonials">
      <Grid>
        <Col md={10} mdOffset={1} lg={8}>
          <blockquote aria-label="testimonial">
            <p className={componentStyles.quote}>{quote}</p>
            <footer className={componentStyles['quote-footer']}>
              {authorUrl ? (
                <a
                  className={cn(
                    componentStyles.attribution,
                    componentStyles['attribution-link']
                  )}
                  href={authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {attributionText}
                </a>
              ) : (
                <span className={componentStyles.attribution}>
                  {attributionText}
                </span>
              )}
            </footer>
          </blockquote>
        </Col>
        <Col md={1} lgOffset={2}>
          <VerticalTitle className={componentStyles['vertical-title']}>
            Testimonials
          </VerticalTitle>
        </Col>
      </Grid>
    </PagePanel>
  );
};

export default TestimonialsPanel;
