import FooterSocials from "../footer-socials/footer-socials.tsx";
import { FooterSocialsData } from "../../../data/FooterSocialsData.ts";
import s from "./footer-copyright.module.scss"

export default function FooterCopyrigth () {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <p className={s.text_container}>
                    <span>@2026 Estatein. All Rights Reserved.</span>
                    <span>Terms & Condition</span>
                </p>
                <FooterSocials data={FooterSocialsData}/>
            </div>
        </div>
    )
}