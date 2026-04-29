import type { THeader } from "../../types/generic/header";
import DarkBtn from "../generic/dark-btn/dark-btn";
import Logo from "../generic/logo/logo";
import Nav from "./nav/nav";
import s from "./header.module.scss";
import Burger from "./burger/burger";
import logoDesktop from "../../img/header/logo-desktop.svg";
import logoLaptop from "../../img/header/logo-laptop.svg";
import logoMobile from "../../img/header/logo-mobile.svg";
import { useWindowWidth } from "../../hooks";

export default function Header({ active, mobileProps, onChange }: THeader) {
    const width = useWindowWidth();

    const logoSrc = width > 1505 ? logoDesktop : width >= 391 ? logoLaptop : logoMobile;

    const [mobileNav, setMobileNav] = mobileProps;

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <Logo src={logoSrc} />
                {width > 960 && (
                    <>
                        <Nav active={active} onChange={onChange} />
                        <DarkBtn
                            active={active}
                            text="Contact Us"
                            link="/contacts"
                            onChange={onChange}
                        />
                    </>
                )}
                {width <= 960 && (
                    <Burger active={mobileNav} onChange={() => setMobileNav(!mobileNav)} />
                )}
            </div>
            {mobileNav && <Nav active={active} onChange={onChange} />}
        </header>
    );
}
