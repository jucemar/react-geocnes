import Municipio from '../model/Municipio'
import Locations from './locations'

export default class MainController {
  constructor() {

  }


  static addMunicipio() {


    const min = Math.ceil(0);
    const max = Math.floor(Locations.length);


    const number = Math.floor((Math.random() * 1000));
    console.log(number)

    const { codigo_ibge, lat, lon } = Locations[number]
    let municipio = new Municipio(number, codigo_ibge, lat, lon)

    return municipio

  }



}