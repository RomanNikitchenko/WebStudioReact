import icon from 'assets/symbol-defs.svg';

export const IconCloseAndOpen = ({ className, iconBtn }) => {
  return (
    <svg className={className.icon} width="40" height="40">
      <use href={`${icon}#${iconBtn}`}></use>
    </svg>
  );
};
