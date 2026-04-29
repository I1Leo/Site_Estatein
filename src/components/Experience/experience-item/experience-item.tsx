import type { TExperienceItem } from "../../../types/about-us/experience-item";
import s from "./experience-item.module.scss";

export default function ExperienceItem({ step, title, text }: TExperienceItem) {
    return (
        <li className={s.item}>
            <div className={s.item_header}>
                <p>Step 0{step + 1}</p>
            </div>
            <div className={`${s.item_body} ${s.border_top}`}>
                <h3 className={s.title}>{title}</h3>
                <p className={s.text}>{text}</p>
            </div>
        </li>
    );
}
