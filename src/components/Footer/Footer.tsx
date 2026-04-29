import Logo from "../generic/logo/logo";
import s from "./footer.module.scss";
import FooterCopyrigth from "./footer-copyright/footer-copyright";
import { FooterData } from "../../data/footer-data";
import FooterList from "./footer-list/footer-list";
import logoDesktop from "../../img/footer/logo-desktop.svg";
import logoLaptop from "../../img/footer/logo-laptop.svg";
import logoMobile from "../../img/footer/logo-mobile.svg";
import sendIcon from "../../img/footer/send-icon.svg";
import { useWindowWidth } from "../../hooks";

export default function Footer() {
    const width = useWindowWidth();

    const logoSrc = width > 1505 ? logoDesktop : width >= 391 ? logoLaptop : logoMobile;

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
    );
}
