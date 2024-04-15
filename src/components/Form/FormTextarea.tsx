import s from "./FormTextarea.module.scss"

type FormTextareaType = {
    id: string
    placeholder: string
    cols: number
    rows: number
}

export default function FormTextarea ({id, placeholder, cols, rows} : FormTextareaType) {
    return (
        <textarea name={id} id={id} cols={cols} rows={rows} placeholder={placeholder} style={{ resize: "none" }} className={s.textarea}></textarea>
    )
}