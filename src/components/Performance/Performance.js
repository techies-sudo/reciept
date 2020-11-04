import React from 'react'

export default function Performance() {
    return (
        <div style={{width:'500px',height:'500px'}}>
              <div className='finished' style={{
                            height: '50%', display: 'flex', flexDirection: 'column',
                        justifyContent:'center',alignItems:'center'}}>
                            <span>Percentage of work completed</span>
                         <span style={{fontSize:'50px'}}>0%</span>   
                        </div>
                        <div className='performance' style={{height:'50%' ,display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                            <div style={{
                            height: '50%', display: 'flex', flexDirection: 'column',
                        justifyContent:'center',alignItems:'center'}} >
                                <span>Assigned Reciept</span>
                                 <span style={{fontSize:'50px'}}>0</span>
                            </div>
                            <div style={{
                            height: '50%', display: 'flex', flexDirection: 'column',
                        justifyContent:'center',alignItems:'center'}}>
                                <span>Ongoing Reciept</span>  
                                 <span style={{fontSize:'50px'}}>0</span>
                            </div>
                            <div style={{
                            height: '50%', display: 'flex', flexDirection: 'column',
                        justifyContent:'center',alignItems:'center'}}>
                                <span >Completed Reciept</span>  
                                 <span style={{fontSize:'50px'}}>0</span>
                            </div>
                        </div>
        </div>
    )
}
