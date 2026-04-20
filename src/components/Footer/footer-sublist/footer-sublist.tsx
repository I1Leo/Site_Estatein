import type { FooterDataType } from "../../../data/FooterData"
import FooterItem from "../footer-item/footer-item"
import s from "./footer-sublist.module.scss"

type FooterSubListType = {
    item: FooterDataType
}

export default function FooterSublist ({item} : FooterSubListType) {

    return (
        <ul className={`${s.container} ${s[`${item.style}`]}`}>
            <FooterItem heading text={item.heading} link={item.headingLink}/>
            {
                item.links.map((item) => (
                    <FooterItem key={item} text={item}/>
                ))
            }
        </ul>
    )
}