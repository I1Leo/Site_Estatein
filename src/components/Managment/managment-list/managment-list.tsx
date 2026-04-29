import type { TManagmentList } from "../../../types/services/managment-list";
import ManagmentBigItem from "../managment-big-item/managment-big-item";
import s from "./managment-list.module.scss";

export default function ManagmentList({ data }: TManagmentList) {
    return (
        <ul className={s.list}>
            {data.map((item) => (
                <li key={item.title} className={s.item}>
                    <div className={s.item_header}>
                        <img src={item.icon} alt="" />
                        <h3 className={s.title}>{item.title}</h3>
                    </div>
                    <p className={s.text}>{item.text}</p>
                </li>
            ))}
            <ManagmentBigItem />
        </ul>
    );
}
