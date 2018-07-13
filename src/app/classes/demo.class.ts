export class Demo {
  id: number;
  name: string;
  logoUrl: string;
  description: string;
  imageUrls: string[];
  url: string;
  constructor(input) {
    this.id = input.id;
    this.name = input.name;
    this.description = input.description;
    this.imageUrls = input.imageUrls;
    this.url = input.url;
    this.logoUrl = input.logoUrl;
  }
}
