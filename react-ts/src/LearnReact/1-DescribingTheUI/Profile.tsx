import Avatar from "./Avatar"

export default function Profile() {
  return (
    <div>
      <Avatar person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }} size={120} />
      <Avatar person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }} size={undefined} />
      <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={80} />
    </div>
  )
}

// export function Bio() {
//   return (
//     <div className="intro">
//       <h1>Welcome to my website!</h1>
//       <p className="summary">
//         You can find my thoughts here.

//       </p>
//     </div>
//   );
// }
