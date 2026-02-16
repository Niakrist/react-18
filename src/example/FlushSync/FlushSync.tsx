import React, { useState } from "react";
import styles from "./FlushSync.module.css";
import { flushSync } from "react-dom";

// React старается группировать обновления состояния (batching) для повышения производительности.
// flushSync позволяет выйти из этого режима, и заставляет React немедленно выполнить все ожидающие обновления состояния и синхронно обновить DOM.

// Предостережения
// flushSync — это инструмент для крайних случаев. Злоупотребление им может серьезно ухудшить производительность, потому что:
// 1. Отключает механизм батчинга (группировки обновлений)
// 2. Заставляет React выполнять рендер немедленно, блокируя основной поток
// 3. Может привести к лишним повторным рендерам
// 4. Влияет на приоритеты, заставляет выполнить рендер с самым высоким приоритетом, игнорируя оптимизацию Concurrent Mode
// 5. В одном цикле можно вызвать несколько flushSync, но они будут выполняться последовательно, что может привести к множественным синхронным рендерам.

export const FlushSync = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);

  const handleEventClick = () => {
    flushSync(() => {
      setState1((prev) => prev + 1);
    });
    flushSync(() => {
      setState1((prev) => prev + 1);
    });
  };

  const handleTimeoutClick = () => {
    setTimeout(() => {
      flushSync(() => {
        setState2((prev) => prev + 1);
      });
      flushSync(() => {
        setState3((prev) => prev + 1);
      });
    }, 1000);
  };

  const handlePromiseClick = () => {
    Promise.resolve().then(() => {
      flushSync(() => {
        setState3((prev) => prev + 1);
      });
      flushSync(() => {
        setState3((prev) => prev + 1);
      });
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
