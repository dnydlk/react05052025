// const video = {
//   title: "a",
//   play() {
//     console.log(this)
//   },
// }

// video.stop = function () {
//   console.log(this)
// }

// video.play()
// video.stop()

// function playVideo() {
//   console.log(this)
// }

// playVideo()

// function Video(title) {
//   this.title = title
//   console.log(this)
// }
// const v = new Video("myVideo")

const video = {
  title: "myVideo2",
  tags: ["a", "b"],
  showTagsNormalFunction() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag) // this inside the function (tag) { ... } callback is not bound, so it defaults to undefined (strict mode) or window (non-strict mode), not video2.
    })
  },
  showTagsNormalFunctionWithThis() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag) // Works, this in callback's second param is explicitly set as video2
    }, this)
  },
  showTagsArrowFunction() {
    this.tags.forEach((tag) => console.log(this.title, tag)) 
  },
  // Work, since 
  // 1. arrow function doesn't have their own this keyword
  // 2. they inherit this from their lexical scope (surrounding)
  // 3. so now showTagsArrowFunction() inherit this as the video2 object
  showTagsArrowFunctionWithThis() {
    this.tags.forEach((tag) => console.log(this.title, tag), this)
  },
  // Work, but not because of this as the callback's second param, but becuase of arrow function's lexical scope
}

video.showTagsNormalFunction()
console.log("\n");
video.showTagsNormalFunctionWithThis()
console.log("\n");
video.showTagsArrowFunction()
console.log("\n");
video.showTagsArrowFunctionWithThis()
console.log("\n");

// class Names {
//   constructor(name) {
//     this.name = name
//   }

//   sayMyName = () => console.log(this.name)
//   sayMyNameProto() {
//     console.log(this.name)
//   }
// }
// const person = new Names("Heisenberg")
// console.log(person)
