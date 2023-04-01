import React,{useState} from "react";
import { Link,useLocation } from "react-router-dom";

import sampleimage from '../assets/moviesample.jpg';

import './Summary-page.styles.css'


const SummaryPage=()=>{

     const [fieldinput,setFieldInput]= useState({
        name:'',
        quantity:'',
        date:'',
    })

    const handleChange = (e) =>{
        setFieldInput((fieldinput) => ({
      ...fieldinput,
      [e.target.name]: e.target.value,
    }));
    }

    const handleSubmit = (e) =>{
        setFieldInput({
            name:'',
            quantity:'',
            date:'',
        }
        );

        var message;

if (fieldinput.name==='') {
  message = "Incomplete Form! Please fill carefully. ";
} else if (fieldinput.date==='') {
  message = "Incomplete Form! Please fill carefully.";
} else if (fieldinput.quantity==='') {
  message = "Incomplete Form! Please fill carefully.";
}
else{
    message=`${fieldinput.quantity} tickets of ${fieldinput.date} booked for ${fieldinput.name}`;
}
alert(message);

}
  const location=useLocation();
    const {show,score}=location.state;

return(
<div className='secondpage'> 
<h1 styles={{color:'red'}}> MOVIE SUMMARY</h1>
<div className="con">
<div className="image" >
                    {show.image ?
                <img alt="image" style={{ width: 300, height: 400 }} src={show.image.medium} />:
                <img alt='image' style={{ width: 300, height: 400 }} src={sampleimage}/>
                }
</div>
<div>
<h2>Name : {show.name}</h2>
<h3> Language: {show.language}</h3>
<h3> Released On: {show.premiered}</h3>
<h3> Average Runtime: {show.averageRuntime}</h3>
<h3> Current Status: {show.status}</h3>
<h3> Type: {show.type}</h3>
<h3> Genres: {show.genres}</h3>
<h3> Link to watch: <a href={show.url}>Click Here</a></h3>
</div>
</div>
<h2>KNOW MORE ABOUT IT...</h2>
<h3>
<div className='summary'  dangerouslySetInnerHTML={{__html: show.summary}} />
</h3>
<div className="form">
<form >
<h1>Fill the form to book tickets</h1>

    <label>Name of the movie: <h3>{show.name}</h3></label>
    <label>Enter your name: </label>

    <input type='text' 
    name='name' 
    required 
    onChange={handleChange} 
    value={fieldinput.name}
    /><br/>
    <label>Enter number of tickets: </label>
    <input type='number' 
    name='quantity' 
    required 
    onChange={handleChange} 
    value={fieldinput.quantity}
    /><br/>
    <label>Enter Date of booking: </label>
    <input type='date' 
    name='date' required 
    onChange={handleChange} 
    value={fieldinput.date}
    /><br/>
    {console.log(fieldinput.name)}
    <input type='button' className='book-btn' value='Book Now' onClick={handleSubmit}/>   
</form>
</div>


</div>

   )
  
}

export default SummaryPage;