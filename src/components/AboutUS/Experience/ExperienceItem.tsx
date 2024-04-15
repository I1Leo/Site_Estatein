import s from "./ExperienceItem.module.scss"

type ExperienceItemProps = {
    step: number,
    title: string,
    text: string
}


export default function ExperienceItem ({step, title, text} : ExperienceItemProps) {
    return (
        <li className={s.item}>
            <div className={s.item_header}>
                <p>Step 0{step+1}</p>
            </div>
            <div className={`${s.item_body} ${s.border_top}`}>
                <h3 className={s.title}>{title}</h3>
                <p className={s.text}>{text}</p>
            </div>
        </li>
    )
}