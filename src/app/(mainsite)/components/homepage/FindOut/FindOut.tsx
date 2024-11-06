"use client"
import Link from 'next/link';
import styles from './findout.module.css';

export default function FindOut(){
return (
 <div className={styles.helping}>

    <h2>Find out who you <span className="highlight">Really</span> are!</h2>

    <p>For peace of mind and informed decision-making for individuals and families.</p>

    <Link href="/contact" target='_blank' className="main-link light">Contact</Link>
 
    <img src='/img/findout.png' alt='Image of woman' className='bg-img' />
    <div className='gradient-shader'></div>
 </div>
)};