import { Fragment } from "react/jsx-runtime"

/**
 * Get the display content for the components
 * @param components to display
 * @param hr "hr1", "hr2", "hr0" for br elements instead
 * @returns components with hr elements between them and br elements at the end
 */
const getDisplayContent = (components: React.ComponentType[], hr: string) => {
  const displayContent = []
  for (let i = 0; i < components.length - 1; i++) {
    const Comp = components[i]
    displayContent.push(
      <Fragment key={`${i} component`}>
        <Comp />
        {hr === "hr0" ? (
          <>
            <br />
            <br />
          </>
        ) : (
          <hr className={hr} />
        )}
      </Fragment>
    )
  }
  const Last = components[components.length - 1]
  displayContent.push(<Last key={`${components.length - 1} component`} />)

  for (let i = 0; i < 2; i++) {
    displayContent.push(<br key={`${i} br`} />)
  }

  return displayContent
}

const deepClone = (obj: any) => {
  if (typeof obj !== "object" || obj === null) return obj

  const newObj: any = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    const value = obj[key]
    newObj[key] = deepClone(value)
  }

  return newObj
}

export { getDisplayContent, deepClone }
