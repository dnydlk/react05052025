import Avatar from "./Avatar"

interface CardProps {
  children: React.ReactNode
}

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>
}

export default function NestingJSX() {
  const content = "<Component>\n  <NestingComponent/ >\n</Component>"
  return (
    <div className="nesting-jsx">
      <h3>Nesting JSX</h3>
      <pre
        style={{
          whiteSpace: "pre",
          textAlign: "left",
          color: "red",
          fontWeight: "bold",
        }}>
        {content}
      </pre>
      <Card>
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
      </Card>
      <Card>{"Everything Inside <Card></Card> will be nested"}</Card>
    </div>
  )
}
