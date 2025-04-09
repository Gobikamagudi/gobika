import React from "react";
import viteLogo from './assets/react.svg';
      const Profilecard=({profile})=>{
        return (
            <div 
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                flexDirection: 'column',
                justifyContent:"start",
                alignItems:"start",
                gap: '1px',
                fontsize:'20px',
                fontWeight:"normal",
                fontstyle:"initial",
              }}
            >
              <div 
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "30px",
                  border: "2px solid blue",
                  borderRadius: "10px",
                  width: "250px",
                  backgroundColor: "lightblue",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img
                  style={{
                    backgroundColor: "black",
                    border: "2px solid blue",
                    borderRadius: "50%",
                    margin: "5px",
                    padding: "5px",
                    width: "100px",
                    height: "100px",
                  }} src={viteLogo}
                  
              />
            <span> NAME : {profile.name} </span>
            <span>DEPARTMENT : {profile.Department}</span>
            <span> YEAR : {profile.year}</span>
            <span> MOBILE : {profile.mobile}</span>
            <span> ADDRESS :{profile.address}</span>

        </div>
        <a href="https://www.linkedin.com/in/gobika-magudi-b380872a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener"> Linkedin profile</a>
    </div>);
}
export default Profilecard;