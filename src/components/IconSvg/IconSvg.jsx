import icon from 'assets/symbol-defs.svg';

export const IconSvg = ({ className, iconId, width = '40', height = '40' }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${icon}#${iconId}`}></use>
    </svg>
  );
};
