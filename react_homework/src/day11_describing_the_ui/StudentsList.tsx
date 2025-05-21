import { Component } from "react"
import { StudentType, StudentFn, StudentClass } from "./Student"

/*
    implement a StudentsList component here
    it should take a prop "students" which is an array of students

    it should render a list of Student components
*/

type StudentsProps = {
  students: StudentType[]
}

// implement a StudentsList component here
export function StudentsListFn({ students }: StudentsProps) {
  return (
    <div>
      {students.map((student) => {
        return <StudentFn key={student.id} student={student} />
      })}
    </div>
  )
}

export class StudentsListClass extends Component<StudentsProps> {
  render() {
    return (
      <div>
        {this.props.students.map((student) => {
          return <StudentClass key={student.id} student={student} />
        })}
      </div>
    )
  }
}
