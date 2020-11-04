import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <div style={{display:'flex',height:'100vh',overflow:'hidden'}}>
            <div style={{ backgroundColor: 'white',display:'flex', justifyContent: 'center', alignItems: 'center' }} >
                <div style={{backgroundColor:'white',width:'70%',height:'80%',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                <h2  style={{ color: '#064E89', fontSize: '30px', fontWeight: '700', textAlign: 'start' }}>Optimize Receipt Entry Process with our radical login platform!</h2>
                    <p style={{ color: '#064E89', fontSize: '20px', fontWeight: '200', textAlign: 'start' }}>Welcome back! login to manage your account.</p>
                 <div className='images'  />
                </div>
                                       
            </div>         
            <div style={{
                backgroundColor: '#064E89', display: 'flex', justifyContent: 'center',width:'100%',
                alignContent: 'center', height: '100vh',flexDirection:'column',float:'right',
            }}>
                <div style={{
                    width: '100%', display: 'flex', justifyContent:'center',marginBottom:'200px'}}>
                     <img src={'/logo.png'} alt='logo' style={{ height: '60px'}} />
                    </div>
                <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                 
                    <label>
                      
            <input name="E-mail" id="name" type="text" required />
            <div className="label-text">E-mail</div>
          </label>
          <label>
            <input name="E-mail" id="name" type="text" required />
            <div className="label-text">Password</div>
            
                    </label>
                    <Link to='/dashboard' style={{textDecoration:'none'}}>
                    <div style={{
                        backgroundColor: 'white', height: '40px', width: '100px',
                        display: 'flex', justifyContent: 'center', borderRadius: '25px',
                        alignItems:'center',color:'black'
                    }} >
                            Login
                             
                </div>     
                          </Link>
                </form>
              <h6 style={{textAlign:'center',color:'white',paddingLeft:'34px'}}> Copyright © 2020, All Rights Reserved by Allianze BPO International </h6>
            </div>
        </div>
    )
}
