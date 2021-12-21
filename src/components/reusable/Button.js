import PropTypes from 'prop-types';

const Button = ({onClick}) => {

    let text = "Submit";

    return (
            <button onClick={() => onClick} className="py-4 px-16 text-neutral-900 bg-white rounded-lg text-xl hover:bg-pink-200 transition-all">{text}</button>

    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;