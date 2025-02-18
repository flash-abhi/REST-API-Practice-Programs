// Please don't change the pre-written code
// Import the necessary modules here

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    // Write your code here to retrieve all art pieces
    const result = this.db
    return result;
  }

  static findOne(id) {
    // Write your code here to retrieve a specific art piece by its id
    const result = this.db.find((i) => i.id == id)
    return result;
  }

  static update(id, data) {
    // Write your code here to update the details of a specific art piece
    const index = this.db.findIndex(i => i.id == id)
    if(index == -1){
      return null;
    }else{
      return this.db[index] = {...this.db[index],...data};
    }
  }
  static delete(id) {
    // Write your code here to delete a specific art piece
    const index = this.db.findIndex(i => i.id == id)
    if(index == -1){
      return false
    }else{
    this.db.splice(index,1);}
    return true;
  }
}
