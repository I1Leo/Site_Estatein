import s from "./FormSelectList.module.scss"

type FormSelectListType = {
    items: string[]
    onChange: (choice: string) => void
}

export default function FormSelectList ({items, onChange} : FormSelectListType) {
    return (
        <ul className={s.list}>
            {
                items.map(item => (
                    <li key={item} className={s.item} onClick={() =>onChange(item)}>{item}</li>
                ))
            }
        </ul>
    )
}