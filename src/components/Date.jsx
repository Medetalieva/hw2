import React from "react";


 const Date = (props) => {
    const newDate = new Intl.DateTimeFormat('ru-Ru').format()
    return(  
    <div className='date'> {newDate}</div>
    )  
 }
  export default Date;