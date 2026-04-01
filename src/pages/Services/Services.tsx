import Features from "../../components/services-features/Features";
import Investments from "../../components/Investments/Investments";
import Managment from "../../components/Managment/Managment";
import Promo from "../../components/services-hero/Promo";
import Value from "../../components/Value/Value";


export default function Services() {
    return (
        <main>
            <Promo />
            <Features />
            <Value />
            <Managment />
            <Investments />
        </main>
    )
}