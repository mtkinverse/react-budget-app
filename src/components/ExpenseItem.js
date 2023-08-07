import React, { useContext } from 'react';
import { TiMinus, TiPlus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = (name) => {
        const expense ={
            name:name,
            cost:10
        }
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><TiPlus onClick={event => increaseAllocation(props.name)} size='2rem' style={{
                backgroundColor: 'green',
                color: 'white',
                border: '0mm',
                borderRadius: '50%'

            }}></TiPlus></td>
            <td><TiMinus size='2em' style={{
                color: 'white',
                border:'0mm',
                backgroundColor:'darkred',
                borderRadius:'50%'
            }} onClick={e => handleDeleteExpense(props.name)}></TiMinus></td>
        </tr>
    );
};

export default ExpenseItem;
