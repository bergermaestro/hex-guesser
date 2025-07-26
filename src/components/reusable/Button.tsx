interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="py-4 px-16 text-neutral-900 bg-white rounded-lg text-xl hover:bg-pink-200 transition-all"
    >
      {label}
    </button>
  );
};

// Button.propTypes = {
//     onClick: PropTypes.func
// }

export default Button;
