import s from "./contacts-features.module.scss";
import { FeaturesSocialsData } from "../../data/features-socials-data";
import ContactsFeaturesItem from "./contacts-features-item/contacts-features-item";
import ContactsFeaturesSocialsItem from "./contacts-features-socials-item/contacts-features-socials-item";
import icon1 from "../../img/contacts/features/icon-1.svg";
import icon2 from "../../img/contacts/features/icon-2.svg";
import icon3 from "../../img/contacts/features/icon-3.svg";
import icon4 from "../../img/contacts/features/icon-4.svg";

export default function ContactsFeatures() {
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <ul className={s.list}>
                    <ContactsFeaturesItem src={icon1} text="info@estatein.com" />
                    <ContactsFeaturesItem src={icon2} text="+1 (123) 456-7890" />
                    <ContactsFeaturesItem src={icon3} text="Main Headquarters" />
                    <ContactsFeaturesSocialsItem src={icon4} data={FeaturesSocialsData} />
                </ul>
            </div>
        </section>
    );
}
