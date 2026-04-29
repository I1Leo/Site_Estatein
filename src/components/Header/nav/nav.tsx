import type { TNav } from "../../../types/generic/nav";
import NavItem from "./nav-item/nav-item";
import s from "./Nav.module.scss";

export default function Nav({ active, onChange }: TNav) {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <NavItem text="Home" link="/" active={active} onChange={onChange} />
                <NavItem text="About Us" link="/about-us" active={active} onChange={onChange} />
                <NavItem text="Properties" link="/properties" active={active} onChange={onChange} />
                <NavItem text="Services" link="/services" active={active} onChange={onChange} />
                {document.documentElement.clientWidth <= 960 && (
                    <NavItem
                        text="Contact Us"
                        link="/contacts"
                        active={active}
                        onChange={onChange}
                    />
                )}
            </ul>
        </nav>
    );
}
