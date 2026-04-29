import type { TValueList } from "../../../types/services/value-list";
import ValueBigItem from "../value-big-item/value-big-item";
import s from "./value-list.module.scss";

export default function ValueList({ data }: TValueList) {
    return (
        <ul className={s.list}>
            {data.map((item) => (
                <li key={item.title} className={s.item}>
                    <div className={s.item_header}>
                        <img src={item.icon} alt="" />
                        <h3 className={s.title}>{item.title}</h3>
                    </div>
                    <p className={s.text}>{item.text}</p>
                </li>
            ))}
            <ValueBigItem />
        </ul>
    );
}
