import React , { useEffect } from 'react'
import {useHistory} from "react-router-dom";

const VerifyAdmin = () => {
  const history = useHistory();  
  const [PIN, setPIN] = React.useState([]);

const isAdmin = () => {
    
    if(PIN === 'SAFEERALIMEHDI'){
        history.push("/AdminOperation");
    }
    else{
        history.push("/ErrorPage");
    }
}

// useEffect(()=>{
//     isAdmin();
//      });

  return (
    <>
        <div className="d-flex flex-row align-items-center mb-4">
                  <label className='text-dark'>Enter PIN :  &nbsp;</label>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="name" id="form3Example1c" className="form-control"
                        value={PIN}
                        onChange={(e) => setPIN(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-light btn-lg"
                    onClick={isAdmin}>Verify</button>
                  </div>

    </>
  )
}

export default VerifyAdmin;