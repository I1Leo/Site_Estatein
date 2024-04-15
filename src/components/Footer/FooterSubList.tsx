import { FooterDataType } from "./FooterData"
import FooterItem from "./FooterItem"
import s from "./FooterSubList.module.scss"

type FooterSubListType = {
    item: FooterDataType
}

export default function FooterSubList ({item} : FooterSubListType) {

    return (
        <ul className={`${s.container} ${s[`${item.style}`]}`}>
            <FooterItem heading text={item.heading}/>
            {
                item.links.map((item) => (
                    <FooterItem key={item} text={item}/>
                ))
            }
        </ul>
    )
}