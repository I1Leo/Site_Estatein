import type { TValuesItem } from "../../../types/about-us/values-item";
import s from "./values-item.module.scss";

export default function ValuesItem({ title, text, icon }: TValuesItem) {
    return (
        <li className={s.item}>
            <div className={s.container}>
                <div className={s.icon_container}>
                    <img src={icon} alt="" />
                </div>
                <h3 className={s.title}>{title}</h3>
            </div>
            <p className={s.text}>{text}</p>
        </li>
    );
}
