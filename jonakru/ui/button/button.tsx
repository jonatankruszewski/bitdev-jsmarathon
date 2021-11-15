import React from "react";
import styles from "./button.module.scss";

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  /**
   * sets primary / secondary color
   */
  importance?: "primary" | "secondary";
};

export function Button({ text, importance }: ButtonProps) {
  return (
    <button data-variation={importance || "primary"} className={styles.button}>
      {text}
    </button>
  );
}
