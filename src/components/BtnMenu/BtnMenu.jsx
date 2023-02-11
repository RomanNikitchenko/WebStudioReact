export const BtnMenu = ({ children, className, handleBtnClick }) => {
  return (
    <button type="button" className={className} onClick={handleBtnClick}>
      {children}
    </button>
  );
};
