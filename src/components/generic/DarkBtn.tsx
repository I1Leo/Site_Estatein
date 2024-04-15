import s from "./DarkBtn.module.scss"

type DarkBtnProps = {
   text: string,
   active?: string,
   onChange?: (current: string) => void
}

export default function DarkBtn ({text, active, onChange}: DarkBtnProps) {

   return (
      <button className={active === "Contact Us" ? `${s.btn} ${s.active}` : s.btn} onClick={()=> onChange && onChange(text)}>{text}</button>
   )
}