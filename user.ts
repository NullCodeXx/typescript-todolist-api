//Export la class User.
export class User {
    constructor(public name:string, private password: string) {}

    display() {
        return this.name + this.password;
    }
}