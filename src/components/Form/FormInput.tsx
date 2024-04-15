import s from "./FormInput.module.scss"

type FormInputType = {
    placeholder: string
    type: string
    id: string
}

export default function FormInput ({placeholder, type, id} : FormInputType) {
    return (
        <>
            <input type={type} placeholder={placeholder} id={id} className={s.input}/>
        </>
    )
}