import styles from "./button.module.css";

export const ButtonDarkBlue = ({ name, style, className }) => {
  return (
    <button className={`${styles.darkBlueButton} ${className} `} style={style}>
      {name}
    </button>
  );
};

export default ButtonDarkBlue;
