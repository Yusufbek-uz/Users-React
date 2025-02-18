import "./user.css";

 function User({odam}){  
    return(
        <div className="box">
              <div className="img-box">
                  <img src="https://cdn-icons-png.flaticon.com/512/11540/11540172.png" alt="sda"/>
              </div>
              <div className="text-box">
                 <h2>{odam.name}</h2>
                 <p>{odam.position}</p>
              </div>
        </div>
    )
 }

 export default User;



