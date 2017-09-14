/* TYPESCRIPT GENERIQUE = En entrer ou en sortie renvoyer
 un type spécifique ou générique(function<T>(arg:T):T{return arg;})
*/

// Typage (parametre) d'entrer et de sortie (et si 'parametre de sortie' faire un return sinon error).

//Type number
function printNumber(num: number): number{
    console.log(num);
    return num;
}

//Type string
function printString(str: string): string{
    console.log(str);
    return str;
}

//Type boolean
function printBool(bool: boolean): boolean{
    console.log(bool);
    return bool;
}

//Type any (tout)
function printAny(all: any): any{
    if(typeof all === 'boolean'){ // test si c'est un boolean
    console.log(all);
    return all;
    }
}

// Le problème c'est que a chaque nouvelle function on doit dupliquer le code ajouter de nouveau parametre.
// 
function print<T>( num: T):T {
    console.log(num);
    return num;
}

//Appel des function avec des types paramétrable.
print<string>('dss'); //OK
print<string>(12); //Error
