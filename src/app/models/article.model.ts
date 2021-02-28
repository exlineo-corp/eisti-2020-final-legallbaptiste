export class Article {
  id: number;
  title: string;
  description: string;
  image: string;

  constructor(
    _id?: number,
    _title?: string,
    _description?: string,
    _image?: string
  );

  constructor(
    _id: number,
    _title: string,
    _description: string,
    _image: string
  ) {
    this.id = _id;
    this.title = _title;
    this.description = _description;
    this.image = _image;
  }
}
