import PropertiesFormSection from "./PropertiesForm/PropertiesFormSection";
import PropertiesRange from "./PropertiesRange/PropertiesRange";
import Search from "./Search/Search";
import { SearchData } from "./Search/SearchData";

export default function Properties () {
    return (
        <main>
            <Search data={SearchData}/>
            <PropertiesRange />
            <PropertiesFormSection />
        </main>
    )
}