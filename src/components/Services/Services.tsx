import Features from "./Features/Features";
import Investments from "./Investments/Investments";
import Managment from "./Managment/Managment";
import Promo from "./Promo/Promo";
import Value from "./Value/Value";


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