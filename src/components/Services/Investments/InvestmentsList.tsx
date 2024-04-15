import { InvestmentsDataType } from "./InvestmentsData"
import s from "./InvestmentsList.module.scss"

type InvestmentsListType = {
    data: InvestmentsDataType[]
}

export default function ManagmentList ({data} : InvestmentsListType) {
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
        </ul>
    )
}