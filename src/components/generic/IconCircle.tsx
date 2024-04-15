import s from "./IconCircle.module.scss"

type IconCircle = {
    src: string
    dark?: boolean
}

export default function IconCircle ({src, dark} : IconCircle) {
    return (
        <div className={dark ? `${s.container} ${s.dark}` : s.container}>
            <img src={src} alt="" />
        </div>
    )
}