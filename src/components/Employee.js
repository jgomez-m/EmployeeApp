import { getState } from 'expect';
import React, { createContext, Fragment } from 'react'

const Employee = ({idx, employee}) => {
  let buttonDisabled = true;

  const handleEditSalary = (e) => {
    buttonDisabled = false;
    if(employee.salaty != e.target.value){
      employee.salary = e.target.value;
    }

  }
  const saveSalary = (employeeSalary) => {
     console.log("Saving button: ", employeeSalary);
     buttonDisabled = true;
  }

  if(buttonDisabled){
    return (
      <Fragment>
        <td>{employee.name}}</td>
        <td className='pl-20'>{employee.position}</td>
        <td className='pl-20'>
          <div onClick={handleEditSalary.bind(this)}
            data-testid={'employee-salary-div-' + idx}
          >
            {employee.salary}
          </div>
        </td>
        <td className='pl-20'>
          <button
            className={ 'x-small w-75 ma-0 px-25' }
            data-testid={ 'employee-save-button-' + idx }
            disabled = {buttonDisabled}
            onClick={saveSalary(employee.idx)}
          >
            Save
          </button>
        </td>
      </Fragment>
    )}
  else{
    return(
    <Fragment>
        <td>{employee.name}</td>
        <td className='pl-20'>{employee.position}</td>
        <td className='pl-20'>
        <input
            data-testid={ 'employee-salary-input-' + idx }
            type='number'
        />
        </td>
        <td className='pl-20'>
          <button
            className={ 'x-small w-75 ma-0 px-25' }
            data-testid={ 'employee-save-button-' + idx }
            disabled = {buttonDisabled}
          >
            Save
          </button>
        </td>
      </Fragment>
    )
  }

}

export default Employee
