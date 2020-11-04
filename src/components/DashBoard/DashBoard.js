import React from 'react'

import Performance from '../../components/Performance/Performance'
import Chart from '../../components/Chart/Chart'
import './DashBoard.css'

import NavBar from '../NavBar/NavBar'
import Tiles from '../Tiles/Tiles'
export default function DashBoard() {
  
    
    return (
        <div style={{display:'flex',backgroundColor:'#e8e8e8',alignItems:'flex-start',height:'100vh',width:'100vw'}}>
        <NavBar/>
            <div style={{ marginLeft: '200px', display: 'flex', width: '100vw',flexDirection:'column' }}>
                
                <div className='dashchilds' >
                   
                    <div style={{ width: '1000px', height: '500px', backgroundColor: 'white',boxShadow:'10px 10px 10px  gray' }} >
                       <Chart/>
                    </div>
                    <div style={{ width: '500px', height: '500px', backgroundColor: 'white',borderRadius:'20px' ,boxShadow:'10px 10px 10px  gray'}} >
                       <Performance/>
                        </div>
                    </div>
                    
                    <div style={{ width: '100%' ,display:'flex',justifyContent:'space-around'}}>
                   
                        
                    <Tiles />
                    <Tiles />
                    <Tiles />
                    <Tiles />
                     
                       </div>
                    
            </div>

        </div>
    )
}
