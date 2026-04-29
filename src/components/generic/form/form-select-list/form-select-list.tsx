import type { TFormSelectList } from "../../../../types/generic/form-select-list";
import s from "./form-select-list.module.scss";

export default function FormSelectList({ items, onChange }: TFormSelectList) {
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
