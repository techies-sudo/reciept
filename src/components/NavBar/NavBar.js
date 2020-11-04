import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../assets/meeting.svg'
import Dash from '../../assets/dashboard.svg'
import NavItem from '../Navitem/NavItem'
import './NavBar.css'

export default function NavBar() {
    return (
        <div className='navbar'>
                <div className='nav-item' style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        backgroundColor: 'white', margin: '10px', height: '40px',
                        width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '55px',
                        boxShadow:' 0px 3px 0px gray'
                    }}>
                        <img src={Dash} alt='Dash' />
                        </div>
                <span className='link-text'>DashBoard</span>
                
                </div>
                <div className='nav-item' style={{display:'flex',alignItems:'center'}}>
                    <NavItem name={'U'}/>
                <span className='link-text'>UPC</span>
                
                </div>
                <div className='nav-item' style={{display:'flex',alignItems:'center'}}>
                    <NavItem name={'UR'}/>
                <span className='link-text'>UPC-RSD</span>
                
                </div>
                <div className='nav-item' style={{display:'flex',alignItems:'center'}}>
                    <NavItem name={'R'}/>
                <span className='link-text'>RIN</span>
                
                </div>
                <div className='nav-item' style={{display:'flex',alignItems:'center'}}>
                    <NavItem name={'RR'}/>
                <span className='link-text'>RIN-RSD</span>
                
                </div>
                <div className='nav-item' style={{display:'flex',alignItems:'center'}}>
                    <NavItem name={'R'}/>
                <span className='link-text'>RSD</span>
                
                </div>
                
               
                <div className='nav-item' style={{ display: 'flex', alignItems: 'center' }}>
                     <Link to='/' style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
                    <div style={{
                        backgroundColor: 'white', margin: '10px', height: '40px',
                        width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '55px',
                        boxShadow:' 0px 3px 0px gray'
                    }}>
                        <img src={Logout} alt='Dash' />
                        </div>
                <span className='link-text'>Logout</span>
                 </Link>
                </div>
                
            </div>
    )
}
