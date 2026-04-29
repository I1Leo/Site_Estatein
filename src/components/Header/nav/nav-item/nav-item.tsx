import type { TNavItem } from "../../../../types/generic/nav-item";
import DarkBtn from "../../../generic/dark-btn/dark-btn";
import s from "./nav-item.module.scss";

export default function NavItem({ text, link, active, onChange }: TNavItem) {
    return (
        <li>
            {text === active ? (
                <DarkBtn text={text} active={active} onChange={onChange} />
            ) : (
                <button className={s.btn} onClick={() => onChange(text, link)}>
                    {text}
                </button>
            )}
        </li>
    );
}
