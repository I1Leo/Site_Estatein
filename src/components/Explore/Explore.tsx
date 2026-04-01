import Section from "../../generic/Section";
import SectionHeader from "../../generic/SectionHeader";
import s from "./Explore.module.scss"


export default function Explore() {

   const text = "Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."

   return (
      <Section>
         {
            document.documentElement.clientWidth > 960 &&
            <div className={s.container}>
               <div className={`${s.item} ${s.item_text}`}>
                  <SectionHeader title="Explore Estatein's World" text={text} />
               </div>
               <div className={`${s.item} ${s.item_1}`}>
                  <img src="./img/Contacts/Explore/img1.jpeg" alt="" />
               </div>
               <div className={`${s.item} ${s.item_2}`}>
                  <img src="./img/Contacts/Explore/img2.jpeg" alt="" />
               </div>
               <div className={`${s.item} ${s.item_3}`}>
                  <img src="./img/Contacts/Explore/img3.jpeg" alt="" />
               </div>
               <div className={`${s.item} ${s.item_4}`}>
                  <img src="./img/Contacts/Explore/img4_small.jpeg" alt="" />
               </div>
               <div className={`${s.item} ${s.item_5}`}>
                  <img src="./img/Contacts/Explore/img5_small.jpeg" alt="" />
               </div>
               <div className={`${s.item} ${s.item_6}`}>
                  <img src="./img/Contacts/Explore/img6.jpeg" alt="" />
               </div>
            </div>
         }
         {
            document.documentElement.clientWidth <= 960 &&
            <div className={s.container}>
               <div className={s.header}>
                  <div className={`${s.item} ${s.item_1}`}>
                     <img src="./img/Contacts/Explore/img1.jpeg" alt="" />
                  </div>
                  <div className={`${s.item} ${s.item_2}`}>
                     <img src="./img/Contacts/Explore/img2.jpeg" alt="" />
                  </div>
                  <div className={`${s.item} ${s.item_3}`}>
                     <img src="./img/Contacts/Explore/img3.jpeg" alt="" />
                  </div>
                  <div className={`${s.item} ${s.item_4}`}>
                     <img src="./img/Contacts/Explore/img4_small.jpeg" alt="" />
                  </div>
                  <div className={`${s.item} ${s.item_5}`}>
                     <img src="./img/Contacts/Explore/img5_small.jpeg" alt="" />
                  </div>
               </div>
               <div className={`${s.item} ${s.item_text}`}>
                  <SectionHeader title="Explore Estatein's World" text={text} />
               </div>
               <div className={`${s.item} ${s.item_6}`}>
                  <img src="./img/Contacts/Explore/img6.jpeg" alt="" />
               </div>
            </div>
         }
      </Section>
   )
}