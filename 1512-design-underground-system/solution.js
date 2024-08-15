class UndergroundSystem {
  constructor() {
    this.stations = new Map()
    this.passenger = new Map()
  }

  checkIn(id, stationName, t) {
    this.passenger.set(id, {stationName, t})
  }

  checkOut(id, stationName, t) {
    const start = this.passenger.get(id)
    const startStation = start.stationName
    const tStart = start.t
    const key = `${startStation}->${stationName}`
    !this.stations.has(key) && this.stations.set(key, {sum: 0, n: 0})
    const prev = this.stations.get(key)
    this.stations.set(key, { sum: prev.sum+t-tStart, n: prev.n+1})
    this.passenger.delete(id)
  }

  getAverageTime(startStation, endStation) {
    const key = `${startStation}->${endStation}`
    const {sum, n} = this.stations.get(key)
    return sum/n
  }
}

