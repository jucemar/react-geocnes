export default class Municipio {
  constructor(nome,codigoIbge, lat, lon) {
    this.nome = nome
    this.codigoIbge=codigoIbge
    this.geocode = {
      latitude: lat,
      longitude: lon
    }
  }
}

