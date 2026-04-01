
export type SearchDataType = {
   id: string
   placeholder: string
   options: string[]
   icon: string
}

export const SearchData : SearchDataType[] = [
   {
      id: "loc",
      placeholder: "Location",
      options: ["Location1", "Location2", "Location3"],
      icon: "./img/Properties/Search/location-icon.svg" 
   },
   {
      id: "property",
      placeholder: "Property Type",
      options: ["Type1", "Type2", "Type3"],
      icon: "./img/Properties/Search/property-icon.svg"
   },
   {
      id: "pricing",
      placeholder: "Pricing Range",
      options: ["Type1", "Type2", "Type3"],
      icon: "./img/Properties/Search/pricing-icon.svg"
   },
   {
      id: "size",
      placeholder: "Property Size",
      options: ["Size1", "Size2", "Size3"],
      icon: "./img/Properties/Search/size-icon.svg"
   },
   {
      id: "buildYear",
      placeholder: "Build Year",
      options: ["Year1", "Year2", "Year3"],
      icon: "./img/Properties/Search/year-icon.svg"
   },
]