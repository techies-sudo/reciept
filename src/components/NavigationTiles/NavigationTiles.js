import React from 'react'

export default function NavigationTiles({ name}) {
    return (
        <div>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center', backgroundColor: 'white', width: '300px', height: '60px', borderRadius: '20px', boxShadow: ' 10px 10px 10px gray' }}>
                {name}
             </div>
        </div>
    )
}
