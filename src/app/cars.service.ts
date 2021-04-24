import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  carOne: object = {
    regNumber: '2G1WG5E3',
    make: 'Toyota',
    model: 'Toyota Innova Crysta',
    year: '2017',
    transmissionType: 'Manual',
    bodyType: 'SUV',
    odometer: '123.34',
    colour: 'black'
  }

  carTwo: object = {
      regNumber: '1FTWW3BR',
      make: 'Toyota',
      model: 'Toyota Innova Crysta',
      year: '2017',
      transmissionType: 'Manual',
      bodyType: 'SUV',
      odometer: '123.34',
      colour: 'black'
  }

  carsArray: Array<object> = [this.carOne, this.carTwo];  
}
