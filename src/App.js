

import React from "react";
import PageTravel from "./PageTravel";
import NavTravel from "./NavTravel";
import Traveldata from "./Traveldata";


function App(){

  const Travel = Traveldata.map( tdata =>{

    return ( <PageTravel  img={tdata.img}  
                          location={tdata.location}
                          googlemap={tdata.googlemap}
                          title={tdata.title}
                          date={tdata.date}
                          description={tdata.description}
                        
                         />
    )
  }
  )
  return( 
    <div>
      <NavTravel/>
      {Travel}
    </div>
  )
}

export default App;




