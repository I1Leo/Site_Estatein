import type { TOfficesRangeItem } from "../../../types/contacts/offices-range-item";
import PurpleBtn from "../../generic/purple-btn/purple-btn";
import s from "./offices-range-item.module.scss";
import mailIcon from "../../../img/contacts/offices/mail-icon.svg";
import telIcon from "../../../img/contacts/offices/tel-icon.svg";
import locIcon from "../../../img/contacts/offices/loc-icon.svg";

export default function OfficesRangeItem({
    type,
    location,
    description,
    mail,
    tel,
    city,
}: TOfficesRangeItem) {
    return (
        <li className={s.item}>
            <p className={s.type}>{type}</p>
            <h3 className={s.location}>{location}</h3>
            <p className={s.description}>{description}</p>
            <ul className={s.info}>
                <li className={s.info_item}>
                    <div>
                        <img src={mailIcon} alt="" />
                    </div>
                    <p>{mail}</p>
                </li>
                <li className={s.info_item}>
                    <div>
                        <img src={telIcon} alt="" />
                    </div>
                    <p>{tel}</p>
                </li>
                <li className={s.info_item}>
                    <div>
                        <img src={locIcon} alt="" />
                    </div>
                    <p>{city}</p>
                </li>
            </ul>
            <PurpleBtn text="Get Direction" />
        </li>
    );
}
