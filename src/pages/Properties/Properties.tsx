import PropertiesFormSection from "../../components/PropertiesForm/PropertiesFormSection";
import PropertiesRange from "../../components/PropertiesRange/PropertiesRange";
import Search from "../../components/Search/Search";
import { SearchData } from "../../data/SearchData";

export default function Properties() {
    return (
        <main>
            <Search data={SearchData} />
            <PropertiesRange />
            <PropertiesFormSection />
        </main>
    )
}