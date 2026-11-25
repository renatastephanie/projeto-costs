import styles from "./SubmitButton.module.scss";

export const SubmitButton = ({ text }) => {
  return (
    <>
      <button className={styles.btn}>{text}</button>
    </>
  );
};
