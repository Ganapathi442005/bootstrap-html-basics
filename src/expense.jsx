import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Expense(){
  return(
  <div>
    <h1 className="mt-4"> <center>💰Expense Tracker</center></h1>

 <div className="container">
  <div className="row">
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <input type="text" className="form-control" placeholder="Expense Name" />
    </div>
     </div>
    <div className="mt-3"></div>
      <div className="row">
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <input type="text" className="form-control" placeholder="Amount" />
    </div>
     </div>
     <div className="mt-3"></div>
       <div className="row">
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <button style={{backgroundColor:"skyblue",textAlign:"center",color:"white"}}>Add Expense</button>
    </div>
     </div>




 
</div>

  </div>

  
  )
}
export default Expense;