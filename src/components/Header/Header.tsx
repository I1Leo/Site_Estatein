import DarkBtn from "../generic/dark-btn/dark-btn";
import Logo from "../generic/logo/logo";
import Nav from "./nav/nav";
import s from "./header.module.scss"
import Burger from "./burger/burger";
import logoDesktop from "../../img/Header/Logo_desktop.svg";
import logoLaptop from "../../img/Header/Logo_laptop.svg";
import logoMobile from "../../img/Header/Logo_mobile.svg";


type HeaderProps = {
   active: string,
   mobileProps: [boolean, (newValue: boolean) => void]
   onChange: (current: string, link: string) => void
}

export default function Header({ active, mobileProps, onChange }: HeaderProps) {

   let width = document.documentElement.clientWidth;

   const logoSrc = width > 1505 ? logoDesktop : width < 1505 || width >= 391 ? logoLaptop : logoMobile;

   const [mobileNav, setMobileNav] = mobileProps;

   return (
      <header className={s.header}>
         <div className={s.wrapper}>
            <Logo src={logoSrc} />
            {
               width > 960 &&
               <>
                  <Nav active={active} onChange={onChange} />
                  <DarkBtn active={active} text="Contact Us" link="/contacts" onChange={onChange} />
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