export interface IProduct{
  id ?: string | undefined;
  title :string;
  descrition : string;
  imageURL :string;
  price:string;
  colors:string[];
  category :{
    name:string;
    imageURl:string;
  }
}