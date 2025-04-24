import React from "react";
import styles from "./index.module.scss"


export default function IndexPage() {
  return (
    <div className={(styles.index)}>
      <h1>Page 2</h1>

      <div className={styles.list}>
        {Array.from({ length: 100 }).map((it, key) =>

          <div className={styles.item}>{key}
            <input type="text"/>

          </div>
        )}
      </div>
    </div>
  );
}
