import NavItem from "./NavItem";
import s from "./Nav.module.scss"

type NavProps = {
   active: string,
   onChange: (current: string) => void
}

export default function Nav ({active, onChange} : NavProps) {
   return (
      <nav className={s.nav}>
         <ul className={s.list}>
            <NavItem text="Home" active={active} onChange={onChange}/>
            <NavItem text="About Us" active={active} onChange={onChange}/>
            <NavItem text="Properties" active={active} onChange={onChange}/>
            <NavItem text="Services" active={active} onChange={onChange}/>
            {document.documentElement.clientWidth <= 960 && 
               <NavItem text="Contact Us" active={active} onChange={onChange}/>
            }
         </ul>
      </nav>
   )
}