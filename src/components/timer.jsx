import React, { useEffect, useState } from "react"
function Timer(props)
{
    const {startTime,timeLimit,atTimeOut}=props;
    function calculateRemTime()
    {
          const date=new Date();
          const hh=date.getHours();
          const mm=date.getMinutes();
          const ss=date.getSeconds();
          const diff=hh*3600+mm*60+ss-startTime.hh*3600-startTime.mm*60-startTime.ss;
          if(diff>=timeLimit*60)
          return {minutes:0,seconds:0};
          const remTime=timeLimit*60-diff;
          return {minutes:Math.floor(remTime/60),seconds:remTime%60};
    }
    const remTime=calculateRemTime();
    const [mm,updateMM]=useState(remTime.minutes);
    const [ss,updateSS]=useState(remTime.seconds);
    function timeUp()
    {
        console.log("timeout",mm,ss);
        atTimeOut();
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