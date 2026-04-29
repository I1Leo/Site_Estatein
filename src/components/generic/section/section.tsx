import type { TSection } from "../../../types/generic/section";
import s from "./section.module.scss";

export default function Section({ children }: TSection) {
    return (
        <section className={s.section}>
            <div className={s.container}>{children}</div>
        </section>
    );
}
