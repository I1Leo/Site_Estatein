import s from './logo.module.scss'

type LogoProps = {
   src: string
}

export default function Logo ({src} : LogoProps) {
   return (
      <div className={s.container}>
         <img src={src}  alt="" />
      </div>
   )
}