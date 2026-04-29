import type { TServicesFeaturesItem } from "../../../types/services/services-features-item";
import s from "./services-features-item.module.scss";

export default function ServicesFeaturesItem({ src, text }: TServicesFeaturesItem) {
    return (
        <li className={s.container}>
            <div className={s.img_container}>
                <img src={src} alt="" />
            </div>
            <p className={s.text}>{text}</p>
        </li>
    );
}
