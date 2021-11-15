import React from "react";
import styles from "./card.module.scss";
import { Button } from "@jonakru/ui.button";

export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Card({ text }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{text}</h2>
      <Button text='Click me'></Button>
    </div>
  );
}
