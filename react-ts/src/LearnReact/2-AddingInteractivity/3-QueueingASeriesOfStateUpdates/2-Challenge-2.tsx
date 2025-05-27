export default function Challenge2() {
  return (
    <div className="2-challenge-2">
      <h4>Chalenge 2: Implement the state queue yourself </h4>
      <App />
    </div>
  )
}

function getFinalState(baseState: number, queue: (number | ((n: number) => number))[]) {
  let finalState = baseState

  for (const q of queue) {
    if (typeof q === "number") finalState = q
    else finalState = q(finalState)
  }

  return finalState
}

function increment(n: number) {
  return n + 1
}
increment.toString = () => "n => n+1"

function App() {
  return (
    <>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <hr />
      <TestCase baseState={0} queue={[increment, increment, increment]} expected={3} />
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
    </>
  )
}

function TestCase({
  baseState,
  queue,
  expected,
}: {
  baseState: number
  queue: (number | ((n: number) => number))[]
  expected: number
}) {
  const actual = getFinalState(baseState, queue)
  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(", ")}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}>
        Your result: <b>{actual}</b> ({actual === expected ? "correct" : "wrong"})
      </p>
    </>
  )
}
