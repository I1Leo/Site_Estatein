import type { TContactsFeaturesItem } from "../../../types/contacts/contacts-features-item";
import s from "./contacts-features-item.module.scss";

export default function ContactsFeaturesItem({ src, text }: TContactsFeaturesItem) {
    return (
        <li className={s.container}>
            <div className={s.img_container}>
                <img src={src} alt="" />
            </div>
            <p className={s.text}>{text}</p>
        </li>
    );
}
