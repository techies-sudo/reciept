import React from 'react'

import Performance from '../../components/Performance/Performance'
import Chart from '../../components/Chart/Chart'
import './DashBoard.css'

import NavBar from '../NavBar/NavBar'
import Tiles from '../Tiles/Tiles'
import NavigationTiles from '../NavigationTiles/NavigationTiles'
import Employee from '../Employee/Employee'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function DashBoard() {
  
    
    return (
        <div className='maindiv' style={{ display:'flex',alignItems:'flex-start',height:'100%'}}>
        <NavBar/>
            <div style={{ marginLeft: '200px', display: 'flex',flexDirection:'column' }}>
                <div className='navigationTiles'>
                    <NavigationTiles name={'DashBoard'} />
                    <Link to='/work' style={{textDecoration:'none', color:'black'}}>
                    <NavigationTiles name={'Work'}/>
                    </Link>
                    
                    <NavigationTiles name={'Email'} />
                    <Link to='/retrieved' style={{textDecoration:'none', color:'black'}}>
                        <NavigationTiles name={'Retrived Data'} />
                        </Link>
                </div>
                <div className='dashchilds' >
                   
                    <div style={{  backgroundColor: 'white',boxShadow:'10px 10px 10px  gray',borderRadius:'25px' }} >
                       <Chart/>
                    </div>
                    <div style={{ marginLeft:'50px', backgroundColor: 'white',borderRadius:'20px' ,boxShadow:'10px 10px 10px  gray'}} >
                       <Performance/>
                        </div>
                    </div>
                    
                    <div className='tiledash'>
                    <Tiles />
                    <Tiles />
                    <Tiles />
                    <Tiles />
                       </div>
                <div className='status'>
                    <div style={{height:'100%',width:'45%',backgroundColor:'white',borderRadius:'25px'}}>
                        <Employee/>
                    </div>
                    <div style={{ height: '100%',width:'45%',backgroundColor:'white' ,borderRadius:'25px'}}>
                    
                    </div>
                </div>  
            </div>

        </div>
    )
}
