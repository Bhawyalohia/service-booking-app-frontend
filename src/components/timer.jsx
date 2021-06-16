import React, { useEffect, useState } from "react"
function Timer()
{
    const [mm,updateMM]=useState(3);
    const [ss,updateSS]=useState(0);
    function timeUp()
    {
        console.log("timeout",mm,ss);
    }
    useEffect(()=>
    {
    setTimeout(()=>
    {
        if(ss!=0||mm!=0)
        {
          var prevss=ss;
          var newss=((ss-1)%60+60)%60;
          updateSS(newss);
          if(prevss==0)
          updateMM(mm-1);
          console.log(ss);
        }
        else {
           timeUp();
        }
    },1000);
    },[mm,ss]);

  return <div>
      <h2>00:{mm}:{ss}</h2>
  </div>
}
export default Timer;