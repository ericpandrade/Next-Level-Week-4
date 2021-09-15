import { useContext } from "react";

import { CountDownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/CountDown.module.scss";

export function CountDown() {
  const {
    hasFinished,
    minutes,
    seconds,
    startCountDown,
    resetCountDown,
    isActive,
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={styles.countDownButton}>
          Ciclo Encerrado<span> &#10004;</span>
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countDownButton}
              onClick={startCountDown}
            >
              Iniciar Ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
