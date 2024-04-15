import ValueBigItem from "./ValueBigItem"
import { ValueDataType } from "./ValueData"
import s from "./ValueList.module.scss"

type ValueListType = {
    data: ValueDataType[]
}

export default function ValueList ({data} : ValueListType) {
    return (
        <ul className={s.list}>
            {
                data.map(item => (
                    <li key={item.title} className={s.item}>
                        <div className={s.item_header}>
                            <img src={item.icon} alt="" />
                            <h3 className={s.title}>{item.title}</h3>
                        </div>
                        <p className={s.text}>{item.text}</p>
                    </li>
                ))
            }
            <ValueBigItem />
        </ul>
    )
}