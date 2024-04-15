import DarkBtn from "../generic/DarkBtn";
import Logo from "../generic/Logo";
import Nav from "./Nav";
import s from "./Header.module.scss"
import Burger from "./Burger";


type HeaderProps = {
   active: string,
   mobileProps: [boolean, (newValue: boolean) => void]
   onChange: (current: string) => void
}

export default function Header({ active, mobileProps, onChange }: HeaderProps) {

   let width = document.documentElement.clientWidth;

   const logoSrc = width > 1505 ? "./img/Header/Logo_desktop.svg" : width < 1505 || width >= 391 ? "./img/Header/Logo_laptop.svg" : "./img/Header/Logo_mobile.svg";

   const [mobileNav, setMobileNav] = mobileProps;

   return (
      <header className={s.header}>
         <div className={s.wrapper}>
            <Logo src={logoSrc} />
            {
               width > 960 &&
               <>
                  <Nav active={active} onChange={onChange} />
                  <DarkBtn active={active} text="Contact Us" onChange={onChange} />
               </>
            }
            {
               width <= 960 && <Burger active={mobileNav} onChange={() => setMobileNav(!mobileNav)}/>
            }

         </div>
         {mobileNav && 
               <Nav  active={active} onChange={onChange}/>
            }
      </header>
   )
}