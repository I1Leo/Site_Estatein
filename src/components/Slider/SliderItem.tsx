
import s from "./SliderItem.module.scss"

type SliderItemProps = {
   children: any
}

export default function SliderItem ({children} : SliderItemProps) {
   return (
      <li className={s.item}>
         {children}
      </li>
   )
}