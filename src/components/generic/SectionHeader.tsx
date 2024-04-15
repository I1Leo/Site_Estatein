import GreyBtn from "./GreyBtn";
import s from "./SectionHeader.module.scss"

type SectionHeaderProps = {
   title: string
   text: string,
   btnText?: string
}

export default function SectionHeader({ title, text, btnText }: SectionHeaderProps) {
   return (
      <div className={s.container}>
         <div className={s.body}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.text}>{text}</p>
         </div>
            {
               btnText &&
               <div className={s.btn_container}>
                  {
                     document.documentElement.clientWidth > 960 && <GreyBtn text={btnText} />
                  }

                  
               </div>
            }


      </div>
   )
}