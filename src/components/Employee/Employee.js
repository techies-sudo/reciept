import React from 'react'

export default function Employee() {
    return (
        <div style={{padding:'20px'}}>
            <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontSize:'25px'}}>Employee work staus</span>
                <span style={{ fontSize: '40px', cursor: 'pointer' }}>&#x21bb;</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly',paddingTop:'20px', }}>
                <input placeholder='Name' type='text' style={{ width: '200px', height: '20px', borderRadius: '10px' }} />
                <input placeholder='Date' type='date' style={{width:'200px',height:'20px',borderRadius:'10px'}}/>
            </div>
            <div style={{ width: '100%' ,display:'flex',justifyContent:'space-between',paddingTop:'20px' }}>
               
                <span>Reciept assigned</span>
                <span>Reciept left</span>
                <span>Reciept completed</span>
            </div>
           
        </div>
    )
}
