import React, { useState } from 'react';
import './App.css'
import NewGoal from "./components/NewGoal/NewGoal"
import GoalList from './components/GoalList/GoalList'

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
    { id: 1, text: 'Finish the course' },
    { id: 2, text: 'Make use of functional rather than class components' },
    { id: 3, text: 'Hopefully goes well.' },
  ])

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((prevState) => prevState.concat(newGoal))
  }


  return <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal onNewGoal={addNewGoalHandler} />
    <GoalList goals={courseGoals} />

  </div>
};

export default App;
