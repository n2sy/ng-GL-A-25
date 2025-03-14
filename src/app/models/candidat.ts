export class Candidat {
  //   public id: number;
  //   public prenom: string;
  //   public nom: string;

  constructor(
    public id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {
    // DI design pattern
    // this.id = id;
    // this.prenom = prenom;
    // this.nom = nom;
  }
}
