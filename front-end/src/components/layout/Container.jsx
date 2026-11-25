import styles from "./Container.module.scss";

export const Container = (props) => {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
};
