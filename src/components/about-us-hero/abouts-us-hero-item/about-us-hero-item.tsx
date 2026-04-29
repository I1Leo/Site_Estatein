import type { TAboutUsHeroItem } from "../../../types/about-us/about-us-hero-item";
import s from "./about-us-hero-item.module.scss";

export default function AboutUsHeroItem({ title, text, big }: TAboutUsHeroItem) {
    return (
        <li className={big ? `${s.container} ${s.big}` : s.container}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>{text}</p>
        </li>
    );
}
