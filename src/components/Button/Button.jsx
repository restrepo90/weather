import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick, isCelsius }) => {
  return (
    <button className="weather_button" onClick={onClick}>
      Change &deg;{isCelsius ? "F" : "C"}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCelsius: PropTypes.bool.isRequired,
};

export default Button;