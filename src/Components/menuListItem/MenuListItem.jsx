import styles from "./MenuListItem.module.css";
import { useState } from "react";

export function MenuListItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ backgroundColor: isHovered ? "#a5e9ff" : "#eff0ef" }}
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Set to : {props.difficulty}
    </div>
  );
}
