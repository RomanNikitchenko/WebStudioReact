import React from 'react';
import { Section } from 'components/Section';
import s from './Hero.module.css';

export const Hero = () => {
  return (
    <Section className={s.heroSection}>
      <h1 className={s.heroTitle}>Эффективные решения для вашего бизнеса</h1>
      <button type="button" className="button button--primary">
        Заказать услугу
      </button>
    </Section>
  );
};
