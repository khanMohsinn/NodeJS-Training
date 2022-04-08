import animal from "botanic-zoo-api";

animal
  .getAnimal("panther") //Here we can give an animal's name as the argument..
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
