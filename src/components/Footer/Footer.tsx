import Logo from "../generic/Logo"
import s from "./Footer.module.scss"
import FooterCopyrigth from "./FooterCopyright"
import { FooterData } from "./FooterData"
import FooterList from "./FooterList"


export default function Footer() {

    let width = document.documentElement.clientWidth

    const logoSrc = width > 1505 ? "./img/Footer/Logo_desktop.svg" : width < 1505 || width >= 391 ? "./img/Footer/Logo_laptop.svg" : "./img/Footer/Logo_mobile.svg";

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.footer_body}>
                    <div className={s.footer_subbody}>
                        <div className={s.logo_container}>
                            <Logo src={logoSrc} />
                        </div>
                        <form action="#" className={s.form}>
                            <div className={s.input_container}>
                                <input type="text" name="" id="" placeholder="Enter Your Email" />
                            </div>
                            <button className={s.btn}>
                                <img src="./img/Footer/send-icon.svg" alt="" />
                            </button>
                        </form>
                    </div>
                    <FooterList data={FooterData} />
                </div>
            </div>
            <FooterCopyrigth />
        </footer>
    )
}