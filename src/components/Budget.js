import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {

    const { remaining,expenses,budget,dispatch,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const ChangeBudget = (e) => {
        e.preventDefault();
        const UpdatedBudget =parseInt( e.target.value);
        if(UpdatedBudget>20000){
            alert('Budget cannot exceed 20000 !');
        }else if(UpdatedBudget-totalExpenses < 0){
            alert(`Only £${remaining} amount is remaining in your budget`);
        }
        else{
            dispatch({
                type:'SET_BUDGET',
                payload:UpdatedBudget
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}<input type='number' min='0' value={budget} step='10' onChange={ChangeBudget}/> </span>
        </div>
    );
};
export default Budget;
