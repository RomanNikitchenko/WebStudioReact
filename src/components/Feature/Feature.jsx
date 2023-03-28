import { Section } from 'components/Section';
import { Container } from 'components/Container';
import { IconSvg } from 'components/IconSvg';
import s from './Feature.module.css';

const items = [
  {
    id: '1',
    svg: 'antenna',
    title: 'Внимание к деталям',
    text: 'Идейные соображения, а также начало повседневной работы по формированию позиции.',
  },
  {
    id: '2',
    svg: 'clock',
    title: 'Пунктуальность',
    text: 'Задача организации, в особенности же рамки и место обучения кадров влечет за собой.',
  },
  {
    id: '3',
    svg: 'diagram',
    title: 'Планирование',
    text: 'Равным образом консультация с широким активом в значительной степени обуславливает.',
  },
  {
    id: '4',
    svg: 'astronaut',
    title: 'Современные технологии',
    text: 'Значимость этих проблем настолько очевидна, что реализация плановых заданий.',
  },
];

export const Feature = () => {
  return (
    <>
      <Section className={s.section}>
        <Container>
          <ul className={s.list}>
            {items.map(({ id, svg, title, text }) => {
              return (
                <li key={id} className={s.item}>
                  <div className={s.box}>
                    <IconSvg
                      className={s.icon}
                      iconId={svg}
                      width="70"
                      height="70"
                    />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </>
  );
};
