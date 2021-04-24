import { Component, OnInit, Input } from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  constructor(private carService: CarsService) {}

  arrayOfCarsForList = this.carService.carsArray;

  deletePopUpActive = false;
  carDeleteRegNumber = '';

  openDeletePopUp(value: string): void {
    this.carDeleteRegNumber = value;
    this.deletePopUpActive = true;
  }

  deleteCar() {
    this.arrayOfCarsForList = this.arrayOfCarsForList.filter((car) => car.regNumber !== this.carDeleteRegNumber);
    this.carDeleteRegNumber = '';
    this.deletePopUpActive = false;
  }

  ngOnInit(): void {}

}
