import Link from 'next/link';
import styles from './learn.module.css';

export default function Learn(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>How It Works</h2>
        <p>Essential DNA Testing provides a variety of DNA services for personal and legal needs. Our Home Paternity Kit allows for convenient, private testing from home. For legal cases, our Legal Paternity Test meets standards for issues like custody and social security. We also offer Sibling and Grandparent DNA Tests to confirm sibling relationships or biological ties to grandparents when needed. Each test is handled professionally, delivering accurate results.</p>
        <Link className='main-link' href={`/contact`}>Contact</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/learn.webp" alt="image of a woman on couch relaxing" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};