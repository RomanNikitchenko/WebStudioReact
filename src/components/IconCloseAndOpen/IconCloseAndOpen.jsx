import icon from 'assets/symbol-defs.svg';

export const IconCloseAndOpen = ({ s, openMenu }) => {
  return (
    <svg className={s.icon} width="40" height="40">
      <use href={`${icon}#${openMenu ? 'menuClose' : 'menuOpen'}`}></use>
    </svg>
  );
};
