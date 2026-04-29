import type { TAchievementsItem } from "../../../types/about-us/achievements-item";
import s from "./achievements-item.module.scss";

export default function AchievementsItem({ title, text }: TAchievementsItem) {
    return (
        <li className={s.item}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>{text}</p>
        </li>
    );
}
