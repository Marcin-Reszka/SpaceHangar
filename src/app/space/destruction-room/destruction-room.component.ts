import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-destruction-room',
  templateUrl: './destruction-room.component.html',
  styleUrls: ['./destruction-room.component.css'],
})
export class DestructionRoomComponent {
  spaceShips = this.spaceShipService.hangarShips;
  shipIndexControl = new FormControl(null);

  constructor(private spaceShipService: SpaceShipService) {}

  orderDestruction() {
    if (this.shipIndexControl.value === null) {
      alert('Wybierz statek');
      return;
    }
    this.spaceShipService.removeShip(this.shipIndexControl.value);
    this.shipIndexControl.reset();
  }
}
