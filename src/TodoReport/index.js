import React from 'react';
import './TodoReport.css';
import {TodoBudget} from '../TodoBudget';
function TodoReport(){
  return(
    <div className="todoreport">
      <TodoBudget/>
    </div>
  );
};

export {TodoReport};