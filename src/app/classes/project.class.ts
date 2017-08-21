export class Project {
  id: number;
  name: string;
  description: string;
  imageUrls: string[];
  constructor(input) {
    this.id = input.id;
    this.name = input.name;
    this.description = input.description;
    this.imageUrls = input.imageUrls;
  }
}
