import s from "./next-btn.module.scss";
import arrow from "../../../img/generic/arrow.svg";

type NextBtnProps = {
   length: number
   page: number
   slides: number
   onChange: (page: number) => void;
}

export default function NextBtn({ length, page, slides, onChange }: NextBtnProps) {
   
   return (
      <button disabled={page === Math.round((length / slides) - 1)} className={page  === Math.round((length / slides) - 1) ? `${s.btn} ${s.disabled}` : s.btn} onClick={() => onChange(page + 1)}>
         <img src={arrow} alt="" />
      </button>
   )
}