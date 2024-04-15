import IconCircle from "../generic/IconCircle"
import s from "./FooterSocials.module.scss"

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