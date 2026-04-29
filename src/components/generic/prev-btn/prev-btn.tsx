import type { TPrevBtn } from "../../../types/generic/prev-btn";
import s from "./prev-btn.module.scss";
import arrow from "../../../img/generic/arrow.svg";

export default function PrevBtn({ page, onChange }: TPrevBtn) {
    return (
        <button
            disabled={page === 0}
            className={page === 0 ? `${s.btn} ${s.disabled}` : s.btn}
            onClick={() => onChange(page - 1)}
        >
            <img src={arrow} alt="" />
        </button>
    );
}
