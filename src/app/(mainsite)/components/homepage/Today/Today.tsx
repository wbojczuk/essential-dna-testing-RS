"use client"

import Link from 'next/link';
import styles from './today.module.css';

export default function Today(){
return (
 <div className={styles.find}>

    <h2>Find Out <span className="underline">Today!</span></h2>

    <h3>Don’t guess where you’re from, know. Contact us today and we can help you have peace of mind about your origins!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/contact`}>Contact</Link>
    </div>
 
    <img src='/img/today.png' alt='Image of woman' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,0.73)"}} className='shader'></div>
 </div>
)};