function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Rainy") // reference to then()
    }, 1000)
  })
}

// const promise = getWeather()
// promise.then(
//   function (data) {
//     console.log(`First param ${data}`)
//   },
//   function (data) {
//     console.log(`Second param ${data}`)
//   }
// )

function getWeaterhIcon(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("☀️")
          break

        case "Cloudy":
          resolve("☁️")
          break

        case "Rainy":
          resolve("🌧️")
          break
        default:
          reject("No Icon Found")
      }
    }, 100)
  })
}

function onSuccess(data) {
  console.log(`Success ${data}`)
}

function onError(data) {
  console.log(`Error ${data}`)
}

// resolved data goes into the then's function without explicit params (no (param))
getWeather().then(getWeaterhIcon).then(onSuccess, onError)
