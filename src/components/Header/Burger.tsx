import s from './Burger.module.scss'

type BurgerType = {
   active: boolean
   onChange: () => void;
}

export default function Burger ({active, onChange} : BurgerType) {
   return (
      <button className={s.burger} onClick={() => onChange()}>
         <img src={active ? "./img/Header/close.svg" : "./img/Header/burger.svg"} alt="" />
      </button>
   )
}