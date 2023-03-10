import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { OrderFormValue } from '../order-form-value';
import { SpaceShip } from '../space-ship';
import { SpaceShipType } from '../space-ship-type.enum';
import { SpaceShipService } from '../space-ship.service';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css'],
})
export class EngineersRoomComponent {
  isProducing: boolean = false;
  spaceShipTypes: ShipType[] = [
    { label: 'Myśliwiec', value: SpaceShipType.Fighter },
    { label: 'Bombowiec', value: SpaceShipType.Bomber },
  ];
  shipsCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

  constructor(private spaceShipService: SpaceShipService) {}

  form = new FormGroup({
    shipType: new FormControl(SpaceShipType.Fighter, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    shipCount: new FormControl(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
      nonNullable: true,
    }),
  });

  orderSpaceShips() {
    const formValue: OrderFormValue = this.form.getRawValue();
    this.isProducing = true;
    this.spaceShipService.produceShips(formValue).subscribe({
      complete: () => (this.isProducing = false),
    });
  }
}
