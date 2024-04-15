import PurpleBtn from "../../generic/PurpleBtn";
import { SearchDataType } from "./SearchData";
import s from "./Search.module.scss"
import SearchItem from "./SearchItem";

type SearchType = {
    data: SearchDataType[]
}

export default function Search({data} : SearchType) {
    
    function handleSubmit (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); 
      }

    return (
        <section>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <h1 className={s.title}>Find Your Dream Property</h1>
                    <p className={s.text}>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
                </div>
            </div>

            <form action="#" className={s.form} onSubmit={handleSubmit}>
                <div className={s.form_wrapper}>
                    <div className={s.search_container}>
                        <input type="search" placeholder="Search For A Property"/>
                        <PurpleBtn  text= {document.documentElement.clientWidth > 630 ?"Find Property" : "Find"}/>
                    </div>
                    <ul className={s.search_list}>
                        {
                            data.map(item => (
                                <SearchItem key={item.id} id={item.id} icon={item.icon} placeholder={item.placeholder} options={item.options}/>
                            ))
                        }
                    </ul>
                </div>
                
            </form>
        </section>
    )
}