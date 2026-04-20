import s from "./search-form-select-list.module.scss"

type FormSelectListType = {
    items: string[]
    onChange: (choice: string) => void
}

export default function SearchFormSelectList ({items, onChange} : FormSelectListType) {
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