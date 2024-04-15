
import DarkBtn from "../generic/DarkBtn"
import s from "./NavItem.module.scss"

type NavItemProps = {
   text: string,
   active: string,
   onChange: (current: string) => void
}

export default function NavItem ({text, active, onChange} : NavItemProps) {
   
   return (
      <li>
         {
            text === active ? <DarkBtn text={text} active={active} onChange={onChange}/> : <button className={s.btn} onClick={()=>onChange(text)}>{text}</button>
         }
      </li>
   )
}