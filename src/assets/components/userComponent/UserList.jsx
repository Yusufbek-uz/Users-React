import User from './User.jsx'
import './user.css'
export function UserList(odamlar){
    return(
        <div>
            <h1>Users</h1>
          <div className='ota'>
          {                
                odamlar.odamlar.map((e)=>{ 
                    return <User key={e.id} odam={e} />
                  })
            }
          </div>
        </div>
    )
 }

