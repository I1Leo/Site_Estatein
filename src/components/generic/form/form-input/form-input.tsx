import type { TFormInput } from "../../../../types/generic/form-input";
import s from "./form-input.module.scss";

export default function FormInput({ placeholder, type, id }: TFormInput) {
    return (
        <>
            <input type={type} placeholder={placeholder} id={id} className={s.input} />
        </>
    );
}
