import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import ConnectForm from "./ConnectForm/ConnectForm";
import { ConnectFormData } from "./ConnectForm/ConnectFormData";


export default function Connect () {
   return (
      <Section>
         <SectionHeader title="Let's Connect" text="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."/>
         <ConnectForm data={ConnectFormData}/>
      </Section>
   )
}