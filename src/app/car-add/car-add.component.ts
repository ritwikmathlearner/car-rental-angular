import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router'
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private router: Router, private carService: CarsService) {  }

  arrayOfCars = this.carService.carsArray;

  addCarForm = new FormGroup({
    regNumber: new FormControl('', Validators.required),
    make: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    transmissionType: new FormControl('', Validators.required),
    bodyType: new FormControl('', Validators.required),
    odometer: new FormControl('', Validators.required),
    colour: new FormControl('', Validators.required)
  })

  addCar() {
    let newCar: object = {
        regNumber: this.addCarForm.controls['regNumber'].value,
        make: this.addCarForm.controls['make'].value,
        model: this.addCarForm.controls['model'].value,
        year: this.addCarForm.controls['year'].value,
        transmissionType: this.addCarForm.controls['transmissionType'].value,
        bodyType: this.addCarForm.controls['bodyType'].value,
        odometer: this.addCarForm.controls['odometer'].value,
        colour: this.addCarForm.controls['colour'].value
    } 
    this.arrayOfCars.push(newCar);
    this.addCarForm.reset();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
