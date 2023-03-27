interface ICard {
  id: number;
  image: string;
  title: string;
  author: string;
  body: string;
  link: string;
}

interface IFormCard {
  name: string;
  birthday: string;
  country: string;
  petList: IPet[];
  gender: string;
  image: string;
}
