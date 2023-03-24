
import Image from "next/image"
import * as React from 'react';
import Header from "./componentes/Header/page"
import svg from "../../public/assets/mobiledevices.svg"




export default function Home() {


  return (
    <div>
      <Header/>
      
      
      <main> 

      
  
    


        <p>MAKE YOUR BUY NEW</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s.
         
        </p>
         <Image 
         
         alt="image svg"
         src={svg}
         width={607}
         height={304}
         />
        <p>50€</p>
        <p>per month</p>
        <button>SUBSCRIBE</button>
      </main>
     

    </div>
  
      
  )
}
