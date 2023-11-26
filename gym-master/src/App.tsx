import {useState} from "react"
import "./App.css"
import BackLegsWorkout from "./components/BackLegsWorkout"
import ChestAndArmsWorkout from "./components/ChestAndArmsWorkout"
import BackAndShouldersWorkout from "./components/BackAndShouldersWorkout"
import FrontLegsWorkout from "./components/FrontLegsWorkout"

enum WorkoutDay {
  BackLegs,
  ChestArms,
  BackShoulders,
  FrontLegs
}

function App() {
  const [selectedWorkoutDay, setSelectedWorkoutDay] = useState(
    WorkoutDay.BackLegs
  )

  return (
    <>
      <header>
        <h1 className="logo">gym-master</h1>
        <ul className="mainList">
          <li
            onClick={() => {
              setSelectedWorkoutDay(WorkoutDay.BackLegs)
            }}
          >
            רגל אחורית
          </li>
          <li
            onClick={() => {
              setSelectedWorkoutDay(WorkoutDay.ChestArms)
            }}
          >
            חזה & ידיים
          </li>
          <li
            onClick={() => {
              setSelectedWorkoutDay(WorkoutDay.BackShoulders)
            }}
          >
            גב & כתפיים
          </li>
          <li
            onClick={() => {
              setSelectedWorkoutDay(WorkoutDay.FrontLegs)
            }}
          >
            רגל קידמית
          </li>
        </ul>
      </header>

      {selectedWorkoutDay == WorkoutDay.BackLegs && <BackLegsWorkout />}
      {selectedWorkoutDay == WorkoutDay.ChestArms && <ChestAndArmsWorkout />}
      {selectedWorkoutDay == WorkoutDay.BackShoulders && (
        <BackAndShouldersWorkout />
      )}
      {selectedWorkoutDay == WorkoutDay.FrontLegs && <FrontLegsWorkout />}
    </>
  )
}

export default App
