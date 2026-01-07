import * as React from "react";
import { cn } from "./utils";
import styles from "../styles/Textarea.module.css";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(styles.textarea, className)}
      {...props}
    />
  );
}

export { Textarea };