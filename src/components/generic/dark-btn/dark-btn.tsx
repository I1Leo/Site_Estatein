import type { TDarkBtn } from "../../../types/generic/dark-btn";
import s from "./dark-btn.module.scss";

export default function DarkBtn({ text, link, active, onChange }: TDarkBtn) {
    return (
        <button
            className={active === "Contact Us" ? `${s.btn} ${s.active}` : s.btn}
            onClick={() => onChange && link && onChange(text, link)}
        >
            {text}
        </button>
    );
}
