import type { TBurger } from "../../../types/generic/burger";
import s from "./burger.module.scss";
import close from "../../../img/header/close.svg";
import burger from "../../../img/header/burger.svg";

export default function Burger({ active, onChange }: TBurger) {
    return (
        <button className={s.burger} onClick={() => onChange()}>
            <img src={active ? close : burger} alt="" />
        </button>
    );
}
