import type { FooterDataType } from "../../../data/FooterData";
import FooterSublist from "../footer-sublist/footer-sublist";
import s from "./footer-list.module.scss"

type FooterListType = {
    data: FooterDataType[]
}

export default function FooterList ({data} : FooterListType) {

    return (
        <ul className={s.container}>
            {
                data.map((item) => (
                    <FooterSublist key={item.heading} item={item}/>
                ))
            }
        </ul>
    )
}