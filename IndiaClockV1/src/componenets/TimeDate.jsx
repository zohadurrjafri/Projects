let TimeDate = () => {

  let time = new Date();

  return(
    <div>
      <p className="lead" >
        Today is {time.toLocaleDateString()} and current time in India is {time.toLocaleTimeString()} 
      </p>
    </div>
  )
}

export default TimeDate;