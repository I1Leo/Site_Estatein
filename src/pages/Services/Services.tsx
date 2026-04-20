import ServicesFeatures from "../../components/services-features/services-features";
import Investments from "../../components/investments/investments";
import Managment from "../../components/managment/managment";
import ServicesHero from "../../components/services-hero/services-hero";
import Value from "../../components/value/value";


export default function Services() {
    return (
        <main>
            <ServicesHero />
            <ServicesFeatures />
            <Value />
            <Managment />
            <Investments />
        </main>
    )
}