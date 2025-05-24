export default function Components() {
  return (
    <div className="components">
      <h3>Components</h3>
      <a href="https://youtu.be/f55qeKGgB_M?si=GmEStYwvXNCL-FF-&t=1094" target="_blank">
        React Course For Beginners - Learn React in 8 Hours
      </a>
      <div className="myFlexBox">
        <h4>JSX & Curly Braces</h4>
        <h4>Props</h4>
        <h4>Children Prop</h4>
      </div>

      <User name="Daniyal" age={27} email="Daniyal@email.com" />
      <br />
      <Job salary={0} position="MERN Full Stack Developer Intern" company="Rothur Tech" />
    </div>
  )
}

const User = (props: any) => {
  return (
    <div className="user">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

const Job = (position: any) => {
  return (
    <div className="job">
      <p>Salary: {position.salary}</p>
      <p>Position: {position.position}</p>
      <p>Company: {position.company}</p>
    </div>
  )
}

// const props = {
//   name: "Daniyal",
//   age: 27,
//   email: "Daniyal@email.com",
// }
