export const Button = ({
  type = 'button',
  disabled = false,
  children,
  className = '',
  handleBtnClick = () => {
    return;
  },
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={handleBtnClick}
    >
      {children}
    </button>
  );
};
