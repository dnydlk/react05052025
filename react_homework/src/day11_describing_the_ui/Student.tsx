/*
    implement a Student component here
    it should take a prop "student" which is an object with the following properties:
    - id: number
    - name: string
    - age: number
    - grade: Enum("A", "B", "C", "D", "F")

    it should render the student's information
*/

import { Component } from "react"

enum Grade {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
}
// implement a Student component here
export interface StudentType {
  id: number
  name: string
  age: number
  grade: Grade
}

export function StudentFn({ student }: { student: StudentType }) {
  const { id, name, age, grade } = student
  return (
    <div data-testid="student">
      <p>{id}</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{grade}</p>
    </div>
  )
}

export class StudentClass extends Component<{ student: StudentType }> {
  render() {
    const { student } = this.props
    const { id, name, age, grade } = student
    return (
      <div data-testid="student">
        <p>{id}</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{grade}</p>
      </div>
    )
  }
}
