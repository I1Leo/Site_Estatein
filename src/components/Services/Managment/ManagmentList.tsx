import ManagmentBigItem from "./ManagmentBigItem"
import { ManagmentDataType } from "./ManagmentData"
import s from "./ManagmentList.module.scss"

type ManagmentListType = {
    data: ManagmentDataType[]
}

export default function ManagmentList ({data} : ManagmentListType) {
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
            <ManagmentBigItem />
        </ul>
    )
}