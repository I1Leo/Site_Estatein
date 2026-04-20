import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks"
import s from "./footer-item.module.scss"
import { setPage } from "../../../services/app";

type FooterItemType = {
    text: string,
    heading?: boolean,
    link?: string
}

export default function FooterItem ({text, heading, link} : FooterItemType) {
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const clickHandler = (text: string, link: string) => {
        dispatch(setPage(text));
        navigate(link);
    }

    return (
        <li className={heading ? `${s.item} ${s.heading}` : s.item}>
            <button onClick={() => link && clickHandler(text, link)}>{text}</button>
        </li>
    )
}