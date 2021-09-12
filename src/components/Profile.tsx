import styles from "../styles/components/Profile.module.scss";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ericpandrade.png" alt="Eric Andrade" />
      <div>
        <strong>Eric Andrade</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
