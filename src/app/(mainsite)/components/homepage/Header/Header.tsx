"use client"

import Link from 'next/link';
import styles from './header.module.css';
// import FreeEstimateForm from './FreeEstimateForm/FreeEstimateForm';


export default function Header(){

    
    



return (
 <div className={styles.header}>

    <div className={styles.textWrapper}>

        <h1>Empowering Families, One Result at a Time.</h1>

        <h3>Leading Mobile DNA Testing Solutions based in ST. Louis, MO.</h3>

        <Link href={"/contact"} className='main-link'>Contact</Link>

    </div>

    <div className={styles.imgWrapper}>
    <img src="/img/header-bg.webp" alt="image of dna strand" className={`bg-img ${styles.img}`} />
    </div>


    {/* <div className="shader"></div> */}
    
 </div>
)};