import GreyBtn from "../generic/GreyBtn";
import NextBtn from "../generic/NextBtn";
import PrevBtn from "../generic/PrevBtn";
import s from "./SliderFooter.module.scss"

type SliderFooterProps = {
   length: number
   page: number
   slides: number
   btnText: string
   onChange: (page: number) => void
}

export default function SliderFooter({ length, page, slides, btnText, onChange }: SliderFooterProps) {

   let width = document.documentElement.clientWidth

   return (
      <footer className={!btnText && width <= 960 ? `${s.footer} ${s.titleless}`: s.footer}>

         {
            width > 960 &&
            <>
               <p><span>{page + 1}</span> of <span>{Math.round(length / slides)}</span></p>
               <div className={s.btns_container}>
                  <PrevBtn page={page} onChange={onChange} />
                  <NextBtn length={length} page={page} slides={slides} onChange={onChange} />
               </div>
            </>
         }

         {
            (width <= 960 && btnText) &&
            <>
               <GreyBtn text={btnText} />
               <div className={s.btns_container}>
                  <PrevBtn page={page}  onChange={onChange} />
                  <p><span>{page + 1}</span> of <span>{Math.round(length / slides)}</span></p>
                  <NextBtn length={length} page={page} slides={slides} onChange={onChange} />
               </div>
            </>
         }

         {
            (width <= 960 && !btnText) &&
            <>
               <div className={s.btns_container}>
                  <PrevBtn page={page} onChange={onChange} />
                  <p><span>{page + 1}</span> of <span>{Math.round(length / slides)}</span></p>
                  <NextBtn length={length} page={page} slides={slides} onChange={onChange} />
               </div>
            </>
         }



      </footer>
   )
}