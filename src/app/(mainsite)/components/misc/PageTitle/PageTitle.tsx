import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.pageTitle}</h1>

        <img src="/img/pagetitle-bg.webp" className="bg-img" aria-hidden />
        <div style={{backgroundColor: "rgba(8.8,1.2,36.5,.7)"}} className="shader"></div>
    </header>
  )
}
