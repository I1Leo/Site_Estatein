import PropertiesFormSection from "../../components/properties-form/properties-form-section/PropertiesFormSection";
import PropertiesRange from "../../components/properties-range/properties-range";
import Search from "../../components/search/search";
import { SearchData } from "../../data/search-data";

export default function Properties() {
    return (
        <main>
            <Search data={SearchData} />
            <PropertiesRange />
            <PropertiesFormSection />
        </main>
    );
}
