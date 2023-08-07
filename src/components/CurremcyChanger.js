import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function CurremcyChanger() {

    const {currency,dispatch} = useContext(AppContext);
    
    const UpdateCurrency = e =>{

        const UpdateCurrency = e.target.value;
        dispatch({
            type:'CHG_CURRENCY',
            payload:UpdateCurrency
        })        
        
    }
    
  return (
    <div className='alert alert-success'>
     <select className="custom-select success " id="inputGroupSelect03" onChange={UpdateCurrency}>
                        <option className='alert alert-success' defaultValue value={currency}>Currency ({currency}) </option>
                        <option className='alert alert-success' value='$' name="marketing"> $ Dollar</option>
                        <option className='alert alert-success' value='£' name="sales">£ Pound</option>
                        <option className='alert alert-success' value='€'  name="finance">€ Euro</option>
                        <option className='alert alert-success'value='₹' name="hr">₹ Rupee</option>
                    </select> 
    </div>
  )
}

export default CurremcyChanger
