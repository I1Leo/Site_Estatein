import type { TFooterList } from "../../../types/generic/footer-list";
import FooterSublist from "../footer-sublist/footer-sublist";
import s from "./footer-list.module.scss";

export default function FooterList({ data }: TFooterList) {
    return (
        <ul className={s.container}>
            {data.map((item) => (
                <FooterSublist key={item.heading} item={item} />
            ))}
        </ul>
    );
}
