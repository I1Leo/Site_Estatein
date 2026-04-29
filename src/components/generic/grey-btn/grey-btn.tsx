import type { TGreyBtn } from "../../../types/generic/grey-btn";
import s from "./grey-btn.module.scss";

export default function GreyBtn({ text, onChange }: TGreyBtn) {
    return (
        <button className={s.btn} onClick={() => onChange && onChange(text)}>
            {text}
        </button>
    );
}
