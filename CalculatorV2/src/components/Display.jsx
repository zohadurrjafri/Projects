import styles from "./Display.module.css"

const Display = () => {
  return(
    <>
      <div className="wrapper">
        <input id="display" className={styles.disp} type="text" />
      </div>
    </>
  )
}

export default Display;