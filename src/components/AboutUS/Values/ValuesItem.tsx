import s from "./ValuesItem.module.scss"

type ValuesItemProps = {
   [key: string] : string
}

export default function ValuesItem ({title, text, icon} : ValuesItemProps) {
   return (
      <li className={s.item}>
         <div className={s.container}>
            <div className={s.icon_container}>
               <img src={icon} alt="" />
            </div>
            <h3 className={s.title}>{title}</h3>
         </div>
         <p className={s.text}>{text}</p>
      </li>
   )
}