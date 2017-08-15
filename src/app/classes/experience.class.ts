export class Experience {
  id:           number;
  name:         string;
  logoUrl:      string;
  projects?:    string[];
  description?: string;
  imageUrls?:   string[];


  constructor (input) {
    this.id           = input.id;
    this.name         = input.name;
    this.logoUrl      = input.logoUrl;
    this.projects     = input.projects;
    this.description  = input.description;
    this.imageUrls    = input.imageUrls;
  }
}
