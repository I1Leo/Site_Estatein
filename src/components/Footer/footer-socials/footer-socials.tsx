import IconCircle from "../../generic/icon-circle/icon-circle"
import s from "./footer-socials.module.scss"

type FooterSocialsType = {
    data: string[]
}

export default function FooterSocials ({data} : FooterSocialsType) {
    return (
        <ul className={s.container}>
            {
                data.map((src, index) => (
                    <li key={index}>
                        <IconCircle dark src={src}/>
                    </li>
                ))
            }
        </ul>
    )
}