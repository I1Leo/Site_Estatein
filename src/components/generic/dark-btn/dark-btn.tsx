import s from "./dark-btn.module.scss";

type DarkBtnProps = {
   text: string,
   link?: string,
   active?: string,
   onChange?: (current: string, link: string) => void
}

export default function DarkBtn ({text, link, active, onChange}: DarkBtnProps) {

   return (
      <button className={active === "Contact Us" ? `${s.btn} ${s.active}` : s.btn} onClick={()=> (onChange && link) && onChange(text, link)}>{text}</button>
   )
}