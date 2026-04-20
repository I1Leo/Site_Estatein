
import DarkBtn from "../../../generic/dark-btn/dark-btn"
import s from "./nav-item.module.scss"

type NavItemProps = {
   text: string,
   link: string,
   active: string,
   onChange: (current: string, link: string) => void
}

export default function NavItem ({text, link, active, onChange} : NavItemProps) {
   
   return (
      <li>
         {
            text === active ? <DarkBtn text={text} active={active} onChange={onChange}/> : <button className={s.btn} onClick={()=>onChange(text,link)}>{text}</button>
         }
      </li>
   )
}