import type { TTeamItem } from "../../../types/about-us/team-item";
import s from "./team-item.module.scss";
import twitterIcon from "../../../img/about-us/team/twitter-icon.svg";
import telegramIcon from "../../../img/about-us/team/telegram-icon.svg";

export default function TeamItem({ name, position, img }: TTeamItem) {
    return (
        <li className={s.item}>
            <div className={s.img_container}>
                <img src={img} alt="" />
            </div>
            <div className={s.social_container}>
                <button>
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
    );
}
