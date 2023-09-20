import React from "react";



function PageTravel(props){


  return (

  <section className="container">
      <div>
       <img className="countryimg" src={props.img} alt=""/>
      </div>

      <aside className="pagetext">
        <img src="./locicon.png" className="mapicon" alt=""></img> 
        <span className="maplocation"> {props.location} </span>
        <p><a className="mapviewtext" href={props.googlemap} target="_blank" rel="noopener noreferrer">Veiw on Googlemap</a></p>             
        
        <p className="mapcountry">{props.title}</p>
        <span className="mapdate">{props.date.startdate}-{props.date.enddate}</span>
        <p className="mapdesc"> {props.description} </p>
      </aside>
     
  </section>
       
  
  )
     
}

export default PageTravel;