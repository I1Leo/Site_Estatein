import type { TPurpleBtn } from "../../../types/generic/purple-btn";
import s from "./purple-btn.module.scss";

export default function PurpleBtn({ text, icon }: TPurpleBtn) {
    return (
        <button className={s.btn}>
            {icon && <img src={icon} alt="" />}
            {text}
        </button>
    );
}
