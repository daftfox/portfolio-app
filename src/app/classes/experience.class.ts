import {Project} from './project.class';

export class Experience {
  id:           number;
  name:         string;
  logoUrl:      string;
  projects?:    Project[];
  description?: string;
  imageUrls?:   string[];


  constructor (input) {
    this.id           = input.id;
    this.name         = input.name;
    this.logoUrl      = input.logoUrl;
    this.description  = input.description;
    this.imageUrls    = input.imageUrls;
    this.projects     = [];
    for (const project of input.projects) {
      this.projects.push(new Project(project));
    }
  }
}
