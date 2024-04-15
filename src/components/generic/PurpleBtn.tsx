
import s from "./PurpleBtn.module.scss"

type PurpleBtnProps = {
   text: string
   icon?: string
}

export default function PurpleBtn ({text, icon} : PurpleBtnProps) {
   return (
      <button className={s.btn}>
         {
            icon && <img src={icon} alt="" />
         }
         {text}
      </button>
   )
}