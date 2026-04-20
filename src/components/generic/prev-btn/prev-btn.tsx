
import s from "./prev-btn.module.scss";
import arrow from "../../../img/generic/arrow.svg";

type PrevBtnProps = {
   page: number
   onChange: (page: number) => void;
}

export default function PrevBtn({ page,  onChange }: PrevBtnProps) {
   return (
      <button disabled={page === 0} className={page === 0 ? `${s.btn} ${s.disabled}` : s.btn} onClick={() => onChange(page - 1)}>
         <img src={arrow} alt="" />
      </button>
   )
}