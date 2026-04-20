import Logo from "../generic/logo/logo";
import s from "./footer.module.scss";
import FooterCopyrigth from "./footer-copyright/footer-copyright";
import { FooterData } from "../../data/FooterData";
import FooterList from "./footer-list/footer-list";
import logoDesktop from "../../img/Footer/Logo_desktop.svg";
import logoLaptop from "../../img/Footer/Logo_laptop.svg";
import logoMobile from "../../img/Footer/Logo_mobile.svg";
import sendIcon from "../../img/Footer/send-icon.svg";


export default function Footer() {

    let width = document.documentElement.clientWidth

    const logoSrc = width > 1505 ? logoDesktop : width < 1505 || width >= 391 ? logoLaptop : logoMobile;

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
                                <img src={sendIcon} alt="" />
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