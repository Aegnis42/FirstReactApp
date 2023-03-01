import styles from "./MenuListItem.module.css";

export function MenuListItem (props) {
    return <div className={styles.container}>Set to : {props.difficulty}</div>;
}