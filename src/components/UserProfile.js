import React from 'react'
import { useState } from 'react'
function UserProfile(props) {
    const [hidenEmail, setHidenEmail] = useState(true)
    const {info} = props
    // console.log("check infouser",info)


  return (
    <div>
        <div className="card w-25">
            <img src={info.urlimg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{info.name}</h5>
                {hidenEmail?(<p className="card-text">{info.email}</p>):<></>}
                <span className="btn btn-primary"
                onClick={()=>{
                    setHidenEmail(!hidenEmail)
                }}
                >{hidenEmail?"ẩn email":"hiện email"}</span>
            </div>
        </div>
    </div>
  )
}

export default UserProfile
