import { PilotAttrs } from './pilot-attrs';

export class Pilot {
  id?: number;
  firstName = '';
  lastName = '';
  imageUrl = '';

  static defaultImgUrl = '/assets/pilot.png';

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1];
  }

  constructor(attrs: PilotAttrs) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultImgUrl;
  }
}
