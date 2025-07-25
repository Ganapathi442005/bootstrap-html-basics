import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Voting() {
    const [options, setOptions] = useState([
        { name: "DMK", votes: 0 },
        { name: "ADMK", votes: 0 },
        { name: "TVK", votes: 0 },
        {name: "NOTA",votes:0}
    ]);

  // 1. Calculate total votes
const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

// 2. Function to calculate percentage
const getPercentage = (votes) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes / totalVotes) * 100);
};



    return (
<div>
    <center>
    <h1>My Voting App</h1>
    </center>
    
        <div className="container p-2 ">
            <div className="row mt-3">
                    <div className="card">
      <div className="card-body">
                <div style={{ backgroundColor: "lightblue" }}>
                    <center>
                    <div>
                        <h4 style={{ backgroundColor: "greenyellow",display:"inline-block" }}>{options[0].name}</h4>
                    </div>

                     {/* Progress Bar Below Party Name */}
          <div className="progress mt-2" style={{ width: "80%" }}> {/* Bootstrap progress container */}
            <div
              className="progress-bar progress-bar-striped bg-info"  // Bootstrap bar styles
              role="progressbar"
              style={{ width: `${getPercentage(options[0].votes)}%` }} // Dynamic width
              aria-valuenow={getPercentage(options[0].votes)}          // Accessibility
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {getPercentage(options[0].votes)}% {/* Text inside progress bar */}
            </div>
          </div>
                    
                    <div>
                        <h2>{"votes :" + options[0].votes}</h2>
                        <button style={{ backgroundColor: "red" }} onClick={() => {
                            const updated = [...options];
                            updated[0].votes += 1;
                            setOptions(updated);
                        }
                        }>vote here</button>
                        
                    </div>
                    </center>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row mt-3">
                     <div className="card">
                   <div className="card-body">
                <div style={{ backgroundColor: "lightblue ",width:'100%' }}>
                   <center>
                     <div>
                        
                        <h4 style={{ backgroundColor: "greenyellow",display:"inline-block"}}>{options[1].name}</h4>
                       

 {/* Progress Bar Below Party Name */}
          <div className="progress mt-2" style={{ width: "80%" }}> {/* Bootstrap progress container */}
            <div
              className="progress-bar progress-bar-striped bg-info"  // Bootstrap bar styles
              role="progressbar"
              style={{ width: `${getPercentage(options[1].votes)}%` }} // Dynamic width
              aria-valuenow={getPercentage(options[1].votes)}          // Accessibility
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {getPercentage(options[1].votes)}% {/* Text inside progress bar */}
            </div>
          </div>

                    </div>
                    <div>
                        <h2>{"votes :" + options[1].votes}</h2>
                        <button style={{ backgroundColor: "red" }} onClick={() => {
                            const updated = [...options];
                            updated[1].votes += 1;
                            setOptions(updated);
                        }
                        }>vote here</button>
                    </div>
                     </center>
                     </div>
                     </div>
                </div>
                </div>
                <div className="row mt-3">
 
 <div className="card">
      <div className="card-body">
                <div style={{ backgroundColor: "lightblue ",width:'100%' }}>
                    <center >
                    <h4 style={{ backgroundColor: "greenyellow",display:"inline-block"  }}>{options[2].name}</h4>

 {/* Progress Bar Below Party Name */}
          <div className="progress mt-2" style={{ width: "80%" }}> {/* Bootstrap progress container */}
            <div
              className="progress-bar progress-bar-striped bg-info"  // Bootstrap bar styles
              role="progressbar"
              style={{ width: `${getPercentage(options[2].votes)}%` }} // Dynamic width
              aria-valuenow={getPercentage(options[2].votes)}          // Accessibility
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {getPercentage(options[2].votes)}% {/* Text inside progress bar */}
            </div>
          </div>


                <div>
                    <h2>{"votes :" + options[2].votes}</h2>
                    <button  style={{ backgroundColor: "red" }} onClick={() => {
                        const updated = [...options];
                        updated[2].votes += 1;
                        setOptions(updated);
                    }
                    }>vote here</button>
                </div>
                 </center>
                 </div>
                 </div>
                 </div>
            </div>


              <div className="row mt-3">
  <div className="card">
      <div className="card-body">

                <div style={{ backgroundColor: "lightblue ",width:'100%' }}>
                    <center >
                    <h4 style={{ backgroundColor: "greenyellow",display:"inline-block"  }}>{options[3].name}</h4>

 {/* Progress Bar Below Party Name */}
          <div className="progress mt-2" style={{ width: "80%" }}> {/* Bootstrap progress container */}
            <div
              className="progress-bar progress-bar-striped bg-info"  // Bootstrap bar styles
              role="progressbar"
              style={{ width: `${getPercentage(options[3].votes)}%` }} // Dynamic width
              aria-valuenow={getPercentage(options[3].votes)}          // Accessibility
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {getPercentage(options[3].votes)}% {/* Text inside progress bar */}
            </div>
          </div>


                <div>
                    <h2>{"votes :" + options[3].votes}</h2>
                    <button  style={{ backgroundColor: "red" }} onClick={() => {
                        const updated = [...options];
                        updated[3].votes += 1;
                        setOptions(updated);
                    }
                    }>vote here</button>
                </div>
                 </center>
                 </div>
                 </div>
                 </div>
            </div>
        </div>
        </div>
    );
}

export default Voting;
