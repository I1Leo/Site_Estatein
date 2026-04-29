import type { TContactsFeaturesSocialsItem } from "../../../types/contacts/contacts-features-socials-item";
import s from "./contacts-features-socials-item.module.scss";

export default function ContactsFeaturesSocialsItem({ src, data }: TContactsFeaturesSocialsItem) {
    return (
        <li className={s.container}>
            <div className={s.img_container}>
                <img src={src} alt="" />
            </div>
            <ul className={s.list}>
                {data.map((item) => (
                    <li key={item.social} className={s.item}>
                        <a href={item.link}>{item.social}</a>
                    </li>
                ))}
            </ul>
        </li>
    );
}
