import type { TSectionHeader } from "../../../types/generic/section-header";
import GreyBtn from "../grey-btn/grey-btn";
import s from "./section-header.module.scss";

export default function SectionHeader({ title, text, btnText }: TSectionHeader) {
    return (
        <div className={s.container}>
            <div className={s.body}>
                <h2 className={s.title}>{title}</h2>
                <p className={s.text}>{text}</p>
            </div>
            {btnText && (
                <div className={s.btn_container}>
                    {document.documentElement.clientWidth > 960 && <GreyBtn text={btnText} />}
                </div>
            )}
        </div>
    );
}
