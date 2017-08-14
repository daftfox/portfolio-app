export class Experience {
  id: number;
  name: string;
  logoUrl: string;
  projects?: string[];
  description?: string;
  imageUrls?: string[];


  constructor (id, name, logoUrl, projects?, description?, imageUrls?) {
    this.id = id;
    this.name = name;
    this.logoUrl = logoUrl;
    this.projects = projects;
    this.description = description;
    this.imageUrls = imageUrls;
  }
}
