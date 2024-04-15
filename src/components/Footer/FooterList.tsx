import { FooterDataType } from "./FooterData";
import FooterSubList from "./FooterSubList";
import s from "./FooterList.module.scss"

type FooterListType = {
    data: FooterDataType[]
}

export default function FooterList ({data} : FooterListType) {

    return (
        <ul className={s.container}>
            {
                data.map((item) => (
                    <FooterSubList key={item.heading} item={item}/>
                ))
            }
        </ul>
    )
}