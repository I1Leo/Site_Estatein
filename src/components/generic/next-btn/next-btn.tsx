import type { TNextBtn } from "../../../types/generic/next-btn";
import s from "./next-btn.module.scss";
import arrow from "../../../img/generic/arrow.svg";

export default function NextBtn({ length, page, slides, onChange }: TNextBtn) {
    return (
        <button
            disabled={page === Math.ceil(length / slides) - 1}
            className={page === Math.ceil(length / slides) - 1 ? `${s.btn} ${s.disabled}` : s.btn}
            onClick={() => onChange(page + 1)}
        >
            <img src={arrow} alt="" />
        </button>
    );
}
