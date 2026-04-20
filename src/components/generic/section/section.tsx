import type { ReactNode } from "react"
import s from "./section.module.scss"

type SectionType = {
    children: ReactNode
}

export default function Section({children} : SectionType) {
    return (
        <section className={s.section}>
            <div className={s.container}>{children}</div>
        </section>
    )
}