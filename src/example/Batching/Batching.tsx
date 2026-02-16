import React, { useState } from "react";
import styles from "./Batching.module.css";

// Batching нжен для оптимизации приолжения, уменьшает количество перерисовок
// До React 18 Batching позволял сгруппировать только изменения стейтов в событиях
// В React 18, теперь все state групируются и вызывают только один Рендер и в setTimeout и в Promise

export const Batching = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);

  const handleEventClick = () => {
    // Группировалось до React 18 и вызывался один рендер
    setState1((prev) => prev + 1);
    setState1((prev) => prev + 1);
  };

  const handleTimeoutClick = () => {
    // До React 18 было 2 рендера
    // С React 18  стало группироваться и вызывается один рендер
    setTimeout(() => {
      setState2((prev) => prev + 1);
      setState2((prev) => prev + 1);
    }, 1000);
  };

  const handlePromiseClick = () => {
    // С React 18  стало группироваться и вызывается один рендер
    Promise.resolve().then(() => {
      setState3((prev) => prev + 1);
      setState3((prev) => prev + 1);
    });
  };

  console.log("Render");

  return (
    <div>
      <div className={styles.btnGroup}>
        <button onClick={handleEventClick}>Event</button> <p>State1 {state1}</p>
      </div>
      <div className={styles.btnGroup}>
        <button onClick={handleTimeoutClick}>Timeout</button>{" "}
        <p>State2 {state2}</p>
      </div>
      <div className={styles.btnGroup}>
        <button onClick={handlePromiseClick}>Promise</button>{" "}
        <p>State3 {state3}</p>
      </div>
    </div>
  );
};
