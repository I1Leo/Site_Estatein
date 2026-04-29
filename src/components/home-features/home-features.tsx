import HomeFeaturesItem from "./home-features-item/home-features-item";
import s from "./home-features.module.scss";
import icon1 from "../../img/home/features/icon-1.svg";
import icon2 from "../../img/home/features/icon-2.svg";
import icon3 from "../../img/home/features/icon-3.svg";
import icon4 from "../../img/home/features/icon-4.svg";

export default function HomeFeatures() {
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <ul className={s.list}>
                    <HomeFeaturesItem src={icon1} text="Find Your Dream Home" />
                    <HomeFeaturesItem src={icon2} text="Unlock Property Value" />
                    <HomeFeaturesItem src={icon3} text="Effortless Property Management" />
                    <HomeFeaturesItem src={icon4} text="Smart Investments, Informed Decisions" />
                </ul>
            </div>
        </section>
    );
}
