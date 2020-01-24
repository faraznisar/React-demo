import React from 'react';
import './App.css'
import NewGoal from "./components/NewGoal/NewGoal"
import GoalList from './components/GoalList/GoalList'

const App = () => {
  const courseGoals = [
    { id: 1, text: 'Finish the course' },
    { id: 2, text: 'Make use of functional rather than class components' },
    { id: 3, text: 'Hopefully goes well.' },
  ]

  return <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal />
    <GoalList goals={courseGoals} />

  </div>
};

export default App;
