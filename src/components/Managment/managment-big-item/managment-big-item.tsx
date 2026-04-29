import DarkBtn from "../../generic/dark-btn/dark-btn";
import s from "./managment-big-item.module.scss"

export default function ManagmentBigItem () {
    return (
        <li className={s.big_item}>
            <div className={s.big_item_header}>
                <h3 className={s.title}>Experience Effortless Property Management</h3>
                <DarkBtn text="Learn More"/>
            </div>
            <p className={s.text}>Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
        </li>
    )
}