import styles from "./Display.module.css"

const Display = ({displayValue}) => {
  return(
    <>
      <div className="wrapper">
        <input id="display" className={styles.disp} type="text" value={displayValue} readOnly />
      </div>
    </>
  )
}

export default Display;