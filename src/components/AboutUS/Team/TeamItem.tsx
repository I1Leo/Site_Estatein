import s from "./TeamItem.module.scss"

type TeamItemProps = {
    name: string,
    position: string,
    img: string
}

export default function TeamItem ({name, position, img} : TeamItemProps) {
    return (
        <li className={s.item}>
            <div className={s.img_container}>
                <img src={img} alt="" />
            </div>
            <div className={s.social_container}>
                <button >
                    <img src="./img/AboutUs/Team/twitter-icon.svg" alt="" />
                </button>
            </div>
            <h3 className={s.title}>{name}</h3>
            <p className={s.text}>{position}</p>
            <form action="#" className={s.form}>
                <input type="text" placeholder="Say Hello" />
                <button>
                    <img src="./img/AboutUs/Team/telegram-icon.svg" alt="" />
                </button>
            </form>
        </li>
    )
}