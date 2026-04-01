import s from "./AchievementsItem.module.scss"

type AchievementsItemProps = {
    title: string,
    text: string
}

export default function AchievementsItem ({title, text} : AchievementsItemProps) {
    return (
        <li className={s.item}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>{text}</p>
        </li>
    )
}