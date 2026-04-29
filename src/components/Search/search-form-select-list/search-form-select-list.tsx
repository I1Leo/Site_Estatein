import type { TSearchFormSelectList } from "../../../types/properties/search-form-select-list";
import s from "./search-form-select-list.module.scss";

export default function SearchFormSelectList({ items, onChange }: TSearchFormSelectList) {
    return (
        <ul className={s.list}>
            {items.map((item) => (
                <li key={item} className={s.item} onClick={() => onChange(item)}>
                    {item}
                </li>
            ))}
        </ul>
    );
}
