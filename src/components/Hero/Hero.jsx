import React from 'react';
import { Section } from 'components/Section';
// import { BtnMenu } from 'components/BtnMenu';
import s from './Hero.module.css';

export const Hero = () => {
  return (
    <Section className={s.heroSection}>
      <h1 className={s.heroTitle}>Эффективные решения для вашего бизнеса</h1>
      {/* <BtnMenu /> */}
    </Section>
  );
};
