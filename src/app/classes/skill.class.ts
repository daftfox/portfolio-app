export class Skill {
  id:           number;
  name:         string;
  logoUrl:      string;
  type:         string;

  constructor (input) {
    this.id           = input.id;
    this.name         = input.name;
    this.logoUrl      = input.logoUrl;
    this.type         = input.type;
  }
}
