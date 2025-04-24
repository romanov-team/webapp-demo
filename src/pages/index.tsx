import React from "react";
import styles from "./index.module.scss"


export default function IndexPage() {
  return (
    <div className={(styles.index)}>
      <div className={styles.list}>
        {Array.from({ length: 100 }).map((it, key) =>

          <div className={styles.item}>{key}</div>
        )}
      </div>
    </div>
  );
}
