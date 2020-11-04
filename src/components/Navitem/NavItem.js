import React from 'react'

export default function NavItem({name}) {
    return (
        <div style={{width:'40px',height:'40px',backgroundColor:'#ffffff',borderRadius:'55px',margin:'10px',boxShadow:' 0px 3px 0px gray',display:'flex',justifyContent:'center',alignItems:'center'}}>
           {name}
        </div>
    )
}
