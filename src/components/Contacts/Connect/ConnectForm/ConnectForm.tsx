import PurpleBtn from "../../../generic/PurpleBtn";
import s from "./ConnectForm.module.scss"
import { ConnectFormDataType } from "./ConnectFormData";
import FormSelect from "../../../Form/FormSelect";
import FormTextarea from "../../../Form/FormTextarea";
import FormInput from "../../../Form/FormInput";


type ConnectFormType = {
    data: ConnectFormDataType[]
}

export default function Form ({data} : ConnectFormType) {
    
     function handleSubmit (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); 
      }

    return (
        <form action="#" className={s.form} onSubmit={handleSubmit}>
            {
                data.map(item => (
                    <div key={item.id} className={item.label === "Budget" ? `${s.item} ${s.big}` : item.label === "Message" ? `${s.item} ${s.textarea}` : s.item}>
                        <label htmlFor={item.id}>{item.label}</label>
                        {(item.type === "select" && item.options) && <FormSelect id={item.id} placeholder={item.placeholder} options={item.options} />}
                        {(item.type === "textarea" && <FormTextarea id={item.id} placeholder={item.placeholder} cols={1} rows={6}/>)}
                        {(item.type !== "select" && item.type !== "textarea")  && <FormInput id={item.id} placeholder={item.placeholder} type={item.type}/>}
                    </div>
                ))
            }
            <div className={s.form_footer}>
                <div className={s.agreement}>
                    <input type="checkbox" id="agreement" className={s.agreement_checkbox}/>
                    <label htmlFor="agreement">I agree with <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></label>
                </div>
                <PurpleBtn text="Send Your Message"/>
            </div>
        </form>
    )
}