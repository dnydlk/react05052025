import DocMaterials from "./DocMaterials"
import LiveLectureTueMay19 from "./LiveLecture/1-LiveLectureTueMay19"
import LiveLectureThuMay21 from "./LiveLecture/2-LiveLectureThuMay21"
import Homework from "./Homework"

export default function D11() {
  const components = [DocMaterials, LiveLectureTueMay19, LiveLectureThuMay21, Homework]
  return (
    <div className="day11-React-UI">
      <h1>D11 React UI</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
