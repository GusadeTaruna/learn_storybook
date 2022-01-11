import Proptypes from "prop-types";

function Button({ label, backgroundColor = "red", size = "md", handleClick }) {
  let scale = 1;
  if (size === "sm") {
    scale = 0.75;
  }

  if (size === "lg") {
    scale = 1.5;
  }

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: "10px",
    color: "white"
  }

  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

Button.Proptypes = {
  label: Proptypes.string,
  backgroundColor: Proptypes.string,
  size: Proptypes.oneOf(["sm", "md", "lg"]),
  handleClick: Proptypes.func,
};

export default Button;
