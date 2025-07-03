import style from "./Keys.module.css"

const Keys = () => {

  const keyName = ['AC','C','%','/','7','8','9','*','4','5','6','-','1','2','3','+','00','0','.','='];

  return (
    <>
      <div className={style.buttonsContainer} >
        {keyName.map((key) => (<button className={style.button} >{key}</button>))}
      </div>
    </>
  )
}

export default Keys;