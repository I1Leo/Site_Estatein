import type { THomeHeroItem } from "../../../types/home/home-hero-item";
import s from "./home-hero-item.module.scss";

export default function HomeHeroItem({ title, text, big }: THomeHeroItem) {
    return (
        <li className={big ? `${s.container} ${s.big}` : s.container}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>{text}</p>
        </li>
    );
}
