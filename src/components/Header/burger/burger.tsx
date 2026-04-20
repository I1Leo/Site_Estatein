import s from './burger.module.scss';
import close from "../../../img/Header/close.svg";
import burger from "../../../img/Header/burger.svg";

type BurgerType = {
   active: boolean
   onChange: () => void;
}

export default function Burger ({active, onChange} : BurgerType) {
   return (
      <button className={s.burger} onClick={() => onChange()}>
         <img src={active ? close : burger} alt="" />
      </button>
   )
}