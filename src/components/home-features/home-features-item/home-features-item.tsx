import type { THomeFeaturesItem } from "../../../types/home/home-features-item";
import s from "./home-features-item.module.scss";

export default function HomeFeaturesItem({ src, text }: THomeFeaturesItem) {
    return (
        <li className={s.container}>
            <div className={s.img_container}>
                <img src={src} alt="" />
            </div>
            <p className={s.text}>{text}</p>
        </li>
    );
}
