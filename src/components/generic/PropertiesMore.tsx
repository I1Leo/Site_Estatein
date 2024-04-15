import PurpleBtn from "./PurpleBtn";
import s from "./PropertiesMore.module.scss";

export default function PropertiesMore () {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.body}>
                    <h2 className={s.title}>Start Your Real Estate Journey Today</h2>
                    <p className={s.text}>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                <PurpleBtn text="Explore Properties"/>
            </div>

        </section>
    )
}