import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/service/vehicle.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {

  editForm: FormGroup;
  vehicle :Vehicle ={
    id:0,
    name: '',
    price:0,
    active:false,
    service_due_date:new Date('2017-12-22'),
    type:'',
    imageUrl:'',
    insurance_expiry_date:new Date('2017-12-22'),
    last_serviced_date:new Date('2017-12-22'),
    number: '',
    branch:'',
  };

  newVehicleId: number;
  vehicleEdited: boolean = false;
  addVehicle: boolean = false;

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.vehicleService.vehicleInEdit = true;
    const vehicleId = +(this.route.snapshot.paramMap.get('id'));
    this.newVehicleId = vehicleId;


    
    if (vehicleId != 0) {
   console.log(this.vehicle.insurance_expiry_date.getDate());
      this.vehicleService.getVehicle(vehicleId).subscribe(vehicle => {
        this.vehicle = vehicle;
        console.log(this.vehicle);
      // var insurance_expiry_date = this.datePipe.transform(this.vehicle.insurance_expiry_date,"MM-dd-yyyy");
      // this.vehicle.insurance_expiry_date=new Date(insurance_expiry_date)  ;
      this.editForm = new FormGroup({
          // 'id': new FormControl(this.vehicle.id),
          'name': new FormControl(this.vehicle.name, [Validators.required, Validators.maxLength(100)]),
          'number': new FormControl(vehicle.number, [Validators.required, Validators.pattern('^[0-9]+$')]),
          'type': new FormControl(this.vehicle.type, [Validators.required, Validators.maxLength(100)]),
          'imageUrl': new FormControl(this.vehicle.imageUrl, Validators.required),
          'price': new FormControl(this.vehicle.price, [Validators.required, Validators.pattern('^[0-9]+$')]),
          'branch': new FormControl(this.vehicle.branch, [Validators.required, Validators.maxLength(100)]),
          'active': new FormControl(this.vehicle.active, Validators.required),
          'insurance_expiry_date': new FormControl(this.vehicle.insurance_expiry_date, Validators.required),
          'last_serviced_date': new FormControl(this.vehicle.last_serviced_date, Validators.required),
          'service_due_date': new FormControl(this.vehicle.service_due_date, Validators.required)
        });
      });
    } else {
      this.editForm = new FormGroup({
        // 'id': new FormControl(this.vehicle.id),
        'name': new FormControl('', [Validators.required, Validators.maxLength(100)]),
        'number': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
        'type': new FormControl('', [Validators.required, Validators.maxLength(100)]),
        'imageUrl': new FormControl('', Validators.required),
        'price': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
        'branch': new FormControl('', [Validators.required, Validators.maxLength(100)]),
        'active': new FormControl('', Validators.required),
        'insurance_expiry_date': new FormControl('', Validators.required),
        'last_serviced_date': new FormControl('', Validators.required),
        'service_due_date': new FormControl('', Validators.required)
      });
    }


  }


  updateMovieItem(): void {
    if (this.newVehicleId != 0) {
      this.vehicle.name = this.editForm.value.name;
      this.vehicle.number = this.editForm.value.number;
      this.vehicle.type = this.editForm.value.type;
      this.vehicle.imageUrl = this.editForm.value.imageUrl;
      this.vehicle.price = this.editForm.value.price;
      this.vehicle.branch = this.editForm.value.branch;
      this.vehicle.active = this.editForm.value.active;
      this.vehicle.insurance_expiry_date = this.editForm.value.insurance_expiry_date;
      this.vehicle.last_serviced_date = this.editForm.value.last_serviced_date;
      this.vehicle.service_due_date = this.editForm.value.service_due_date;
     console.log(" "+this.vehicle.name+" "+this.vehicle.number+" "+this.vehicle.id);
     console.log(this.vehicle);
     this.vehicleService.ModifyVehicle(this.vehicle).subscribe();
      this.vehicleEdited = true;
    }
    else {
      this.vehicle.id = this.newVehicleId;
      this.vehicle.name = this.editForm.value.name;
      this.vehicle.number = this.editForm.value.number;
      this.vehicle.type = this.editForm.value.type;
      this.vehicle.imageUrl = this.editForm.value.imageUrl;
      this.vehicle.price = this.editForm.value.price;
      this.vehicle.branch = this.editForm.value.branch;
      this.vehicle.active = this.editForm.value.active;
      this.vehicle.insurance_expiry_date = this.editForm.value.insurance_expiry_date;
      this.vehicle.last_serviced_date = this.editForm.value.last_serviced_date;
      this.vehicle.service_due_date = this.editForm.value.service_due_date;
      console.log(" "+this.vehicle.name+" "+this.vehicle.number+" "+this.vehicle.id);
      console.log(this.vehicle);
      this.vehicleService.addVehicle(this.vehicle).subscribe();
      this.addVehicle = true;
    }
  }

}
