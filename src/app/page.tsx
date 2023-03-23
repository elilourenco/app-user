
import Image from "next/image"
import Header from "./componentes/Header/page"
import svg from "../../public/assets/undraw_mobile_devices_k1ok.svg"


export default function Home() {
  return (
    <div>
      <Header/>
      
      
      <main> 
        <p>FRONTEND DEVELOPER</p>
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
