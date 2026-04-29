import type { TFormTextarea } from "../../../../types/generic/form-textarea";
import s from "./form-textarea.module.scss";

export default function FormTextarea({ id, placeholder, cols, rows }: TFormTextarea) {
    return (
        <textarea
            name={id}
            id={id}
            cols={cols}
            rows={rows}
            placeholder={placeholder}
            style={{ resize: "none" }}
            className={s.textarea}
        ></textarea>
    );
}
