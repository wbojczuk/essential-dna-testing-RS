import Link from 'next/link';
import styles from './vision.module.css';

export default function Vision(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>Our Vision</h2>
        <p>Essential DNA Testing is dedicated to empowering families with the knowledge to strengthen bonds and make informed decisions. We bring reliable DNA testing directly to you, ensuring convenience and privacy without compromising on accuracy or service quality. With a range of testing options—from paternity to ancestry and health risk assessments—we’re here to meet diverse needs with the utmost discretion. Our commitment to the St. Louis community extends beyond testing; we build partnerships that support and uplift families. At Essential DNA Testing, we’re proud to provide trusted expertise and a supportive, client-centered experience.</p>
        <Link className='main-link' href={`/contact`}>Contact</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/vision.webp" alt="image of lab" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};