import { useState } from 'react';
import PurpleBtn from "../../generic/PurpleBtn";
import s from "./PropertiesRangeSlider.module.scss"
import PropertiesFeature from "./PropertiesRangeFeature";
import SliderItem from '../../Slider/SliderItem';
import Slider from '../../Slider/Slider';
import { PropertiesRangeDataType } from "./PropertiesRangeData";

type PropertiesRangeSliderType = {
   data: PropertiesRangeDataType[]
}

export default function PropertiesSlider({data} : PropertiesRangeSliderType) {

   const [page, setPage] = useState(0)
   let width = document.documentElement.clientWidth
   const slides = width > 1087 ? 3 : width > 740 ? 2 : 1; 
   const list = data.slice(0 + slides * page, slides + slides * page);
   const length = data.length;

   return (
      <Slider length={length} page={page} slides={slides} onChange={(page) => setPage(page)}>
            {
               list.map((item) => (
                  <SliderItem key={item.name}>
                     <div className={s.img_container}>
                        <img src={item.img} alt="" />
                     </div>
                     <h3 className={s.title}>{item.name}</h3>
                     <p className={s.text}>{item.description}</p>
                     <ul className={s.list}>
                        {item.features.map((feature, index) => (
                           <PropertiesFeature key={index} type={index} text={feature} />
                        ))}
                     </ul>
                     <footer className={s.footer}>
                        <div >
                           <p className={s.footer_heading}>Price</p>
                           <p className={s.price}>{item.price}</p>
                        </div>
                        <PurpleBtn text="View Property Details" />
                     </footer>
                  </SliderItem>
               ))
            }    
      </Slider>
   )
}