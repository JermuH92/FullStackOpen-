const Header = (props) => {
  console.log(props)
  return (
    <div>
     <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part name = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part name = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
    <p>{props.name} {props.exercises}</p>
    </div>
  )
}

 const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total number of exercises : {props.total}</p>
    </div>
  )
} 


  const App = () => {
    const course = {
    name:  'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React: ',
        exercises: 10
      },
      {
        name: 'Using props to pass data: ',
        exercises: 7
      },
      {
        name: 'State of a component: ',
        exercises: 14
      }
    ]
  }  
   const totalExercises = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  

  return (
    <div>
      <Header course={course}/>
      <Content parts = {course.parts}/>
      <Total total = {totalExercises}/>
    </div>
  )
}

export default App