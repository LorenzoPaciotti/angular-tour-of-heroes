/*an interface is a structure used solely for type-checking.*/
export interface Hero {
  id: number;
  name: string;
}

/* a class is essentially an object factory (ie. a blueprint of what an object is supposed to look like and then implemented) */
/**
 * While a class may have initialized properties and methods to help create objects,
 * an interface essentially defines the properties and type an object can have.
 */
export class HeroClass {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}
