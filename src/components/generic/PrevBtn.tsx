
import s from "./PrevBtn.module.scss"

type PrevBtnProps = {
   page: number
   onChange: (page: number) => void;
}

export default function PrevBtn({ page,  onChange }: PrevBtnProps) {
   return (
      <button disabled={page === 0} className={page === 0 ? `${s.btn} ${s.disabled}` : s.btn} onClick={() => onChange(page - 1)}>
         <img src="./img/generic/arrow.svg" alt="" />
      </button>
   )
}