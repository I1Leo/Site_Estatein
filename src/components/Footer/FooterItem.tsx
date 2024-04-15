import s from "./FooterItem.module.scss"

type FooterItemType = {
    text: string,
    heading?: boolean
}

export default function FooterItem ({text, heading} : FooterItemType) {
    return (
        <li className={heading ? `${s.item} ${s.heading}` : s.item}>
            <button>{text}</button>
        </li>
    )
}