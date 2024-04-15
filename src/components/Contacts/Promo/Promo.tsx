import s from "./Promo.module.scss"

export default function Promo () {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h1 className={s.title}>Get in Touch with Estatein</h1>
                <p className={s.text}>Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.</p>
            </div>
        </div>
    )
}