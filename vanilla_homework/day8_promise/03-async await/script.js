// [info] https://www.youtube.com/watch?v=V_Kr9OSfDeU
// - 1 Promise
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`)
    if (location === "Google") {
      resolve("Google says hi")
    } else {
      reject("We can only talk to Google")
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response")
    resolve(`Extra Information: ${response}`)
  })
}

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response has been received")
//     return processRequest(response)
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse)
//   })
//   .catch((err) => console.log(err))

// - 2 async await
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const mockFetch = async (who) => {
  try {
    await sleep(3000)
    const response = await makeRequest(who)
    console.log("Response received")
    const processedResponse = await processRequest(response)
    console.log("processedResponse: ", processedResponse)
  } catch (error) {
    console.log(error)
  } finally {
    console.log("Done")
  }
}
mockFetch("Google")
