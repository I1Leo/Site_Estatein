import s from "./team-item.module.scss";
import twitterIcon from "../../../img/AboutUs/Team/twitter-icon.svg";
import telegramIcon from "../../../img/AboutUs/Team/telegram-icon.svg";

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
                    <img src={twitterIcon} alt="" />
                </button>
            </div>
            <h3 className={s.title}>{name}</h3>
            <p className={s.text}>{position}</p>
            <form action="#" className={s.form}>
                <input type="text" placeholder="Say Hello" />
                <button>
                    <img src={telegramIcon} alt="" />
                </button>
            </form>
        </li>
    )
}