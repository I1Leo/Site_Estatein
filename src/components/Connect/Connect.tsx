import Section from "../generic/section/section";
import SectionHeader from "../generic/section-header/section-header";
import ConnectForm from "./connect-form/connect-form";
import { ConnectFormData } from "../../data/ConnectFormData";


export default function Connect() {
   return (
      <Section>
         <SectionHeader title="Let's Connect" text="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need." />
         <ConnectForm data={ConnectFormData} />
      </Section>
   )
}