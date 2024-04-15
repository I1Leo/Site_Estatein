import s from "./GreyBtn.module.scss"

type GreyBtnProps = {
   text: string
   onChange?: (type : string) => void
}

export default function GreyBtn ({text, onChange} : GreyBtnProps) {
   return (
      <button className={s.btn} onClick={() => onChange && onChange(text)}>{text}</button>
   )
}