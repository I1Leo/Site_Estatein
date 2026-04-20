import DarkBtn from "../../generic/dark-btn/dark-btn";
import s from "./value-big-item.module.scss"

export default function ValueBigItem () {
    return (
        <li className={s.big_item}>
            <div className={s.big_item_header}>
                <h3 className={s.title}>Unlock the Value of Your Property Today</h3>
                <DarkBtn text="Learn More"/>
            </div>
            <p className={s.text}>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
        </li>
    )
}