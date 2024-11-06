"use client"

import styles from "./services.module.css"
import Service from "./Service"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Services(props: servicesModuleType) {

  const [isOnMobile, setisOnMobile] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

    const serviceElems = props.services.map((service, i)=>{
        return <Service hidden={((i+1) > 3)} {...service} key={i} />
    })

    function showMoreHandler(evt: any){

      evt.currentTarget.classList.add("hidden")

      const hiddenElems = document.querySelectorAll(`.${styles.services} .mobile-hidden`)

      hiddenElems.forEach((elem)=>{
        elem.classList.remove("mobile-hidden")
      })
      setIsHidden(false)
    }

    useEffect(()=>{
      if(typeof window !== "undefined"){
        setisOnMobile(window.matchMedia("(max-width: 649px)").matches)
      }
    }, [])

  return (
    <section className={styles.services}>

            <div className={styles.servicesWrapper}>
                {serviceElems}
            </div>
            
    </section>
  )
}
