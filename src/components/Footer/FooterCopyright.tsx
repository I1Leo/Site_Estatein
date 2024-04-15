import FooterSocials from "./FooterSocials";
import { FooterSocialsData } from "./FooterSocialsData.ts";
import s from "./FooterCopyright.module.scss"

export default function FooterCopyrigth () {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <p className={s.text_container}>
                    <span>@2023 Estatein. All Rights Reserved.</span>
                    <span>Terms & Condition</span>
                </p>
                <FooterSocials data={FooterSocialsData}/>
            </div>
        </div>
    )
}