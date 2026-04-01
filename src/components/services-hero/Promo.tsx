import s from "./Promo.module.scss"

export default function Promo () {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h1 className={s.title}>Elevate Your Real Estate Experience</h1>
                <p className={s.text}>Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.</p>
            </div>
        </div>
    )
}