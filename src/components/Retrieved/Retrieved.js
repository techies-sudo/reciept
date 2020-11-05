import React from 'react'
import NavBar from '../NavBar/NavBar'
export default function Retrieved() {
    return (
        <div style={{height:'100vh',width:'100vw',display:'flex'}}>
            <NavBar />
            <div style={{marginLeft:'200px',width:'100vw',display:'flex',flexDirection:'column',justifyContent:'center',}}>
                <div style={{minHeight:'200px',backgroundColor:'white',width:"80vw",padding:'20px',margin:'20px', borderRadius:'20px',boxShadow:'10px 10px 10px  gray'}}>
                    <span style={{ fontSize: '25px' }}>Edit Your Work</span>
                    <div style={{width:'100%',backgroundColor:'gray'}}></div>
                </div>
                <div style={{ minHeight: '200px', backgroundColor: 'white', width: "80vw",padding:'20px', margin: '20px', borderRadius:'20px',boxShadow: '10px 10px 10px  gray' }}>
                     <span style={{fontSize:'25px'}}>Temp Work File</span>
                </div>
                    
            </div>
        </div>
    )
}
