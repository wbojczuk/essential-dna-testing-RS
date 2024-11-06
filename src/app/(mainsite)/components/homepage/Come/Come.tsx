import Link from 'next/link';
import styles from './come.module.css';

export default function Come(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>We come to you!</h2>
        <p>No need to plan around us, contact us now and we’ll come to you. Mobile DNA Testing Units allow us to bring you testing on the go!</p>
        <Link className='main-link' href={`/contact`}>Contact</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/come.png" alt="image of a woman on couch relaxing" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};