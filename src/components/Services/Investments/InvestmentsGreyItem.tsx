import DarkBtn from "../../generic/DarkBtn";
import s from "./InvestmentsGreyItem.module.scss"

export default function InvestmentsGreyItem () {
    return (
        <li className={s.big_item}>
            <h3 className={s.title}>Unlock Your Investment Potential</h3>
            <p className={s.text}>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
            <DarkBtn text="Learn More"/>
        </li>
    )
}