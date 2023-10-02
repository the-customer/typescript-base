//DECLARATION
let firstname = 'Toto'; // firstname est une chaine
let age = 12; // age est un entier
//Ici il comprend le type des variables grace a la 
//premiere valeur

let role; //Ici role aura un type universel (any) : on peut lui
//assigner toutes valeurs possibles
role = 'Admin'
role = 1
console.log(typeof(role))
role = true
//LES TYPES
//Comment avor la possibilité de declarer sans avoir une valeur initial et avoir en meme le type
let adresse: string;


adresse = 'Villa n 200 Dakar Plateau';
//autres type:

let activate: boolean = true;
//Object anonyme : on ne connait pas les propriete
// let fonction : Object = {id:12,nom:'Prof'}; ou bien
let fonction : {} = {id:12,nom:'Prof'};
//Object specifique : on connait les proprietes
//declarer un etudiant : Type = matricule, nom et age
let etudiant: {id: string, nom: string, age:number};

etudiant = {id: '0012', nom: 'Toto', age:19};
// etudiant = {matricule: '0012', nom: 'Toto', age:19} // faux parce qu'il manque id et il y matricule de trop
// etudiant = {id:23, nom: 'Toto', age:19}; // faux parce que l'id n'est pas une chaine

//tableau
// let telephones: Array<number> = [771234322,783232211,760039211];
// let telephones: Array<string> = ['77 123 43 22','78 323 22 11','76 003 92 11'];
let telephones: string[] = ['77 123 43 22','78 323 22 11','76 003 92 11'];
//autres exemples de declaration de tableaux
// let hobbie: string[];
// hobbie = ['dev,music','sport'];
// let response: boolean[];
//
//Type tuple : un tableau de taille fixe
//Exemple : avoir un tableau de fruits et pour chacun avoir sa couleur
let fruit: [string,string] = ['Banana','Yellow']
// let fruit: [string,string][] = [['Banana','Yellow'],['pomme','rouge']] // tableau de typle
// fruit = ['Pomme','vert','ovale'] //Faux parce qu'on a depasser le nombre de valeurs
// autres exemples:
let classe: [string,number];
classe = ['L2 CDSD',3];

//Type Enum : ou enumeration, ca permet de lister une suite de valeurs possible pour une variable
// ex: on veut stocker les roles d'une application : ADMIN, READ_ONLY,AUTHOR
enum ROLES {ADMIN, READ_ONLY,AUTHOR};

let r1:ROLES;
r1 = ROLES.READ_ONLY;
console.log(r1); // affiche : 1
//
// enum PIECES {DIOUROM=25,FOUK,DEUREUM}
enum PIECES {DIOUROM=25,FOUK=50,DEUREUM=5}
// let p1 = PIECES.FOUK
// p1 = 25 // ok
// p1 = 90 //Faux parce que 90 n'est pas enumeré

//Type Any: un type universel => on ne connait pas le type exacte de la variable, type par defaut, qui accepte toutes les valeurs
// let maVariable; //ici le type est Any; ou bien
let maVariable : any;

//Type Union : c'est un regroupement de types
// Exemple : avoir la possibilite d'avoir plusieur type possible pour jour : chaine ou entier
// 1ere methode : passer par any
// let jour: any;
// jour = 1;
// jour = 'lundi';
//2ieme : utiliser les UNION
let jour:  string | number ;
jour = 1;
jour = 'lundi';
//
// let response: string | number | boolean;
// response = 'Yes';
// response = 'No';
// response = true;
// response = false;
// response = 1;
// response = 0;



//Type LITERAL: c'est lorqu'on enumere les valeurs possibles (difference avec UNION qui enumere les types)
// Exemple refaire le meme exemple pour la reponse mais cette fois ci enumerer les valeur possible
// pour la reponse
let response: 'Yes' | 'No' | 1 | 0 | true | false; // la reponse ne peut etre que ces valeurs
response = 1;
console.log('Programme du Week :');
console.log('A.......Aller a l\'ecole');
console.log('B.......Aller au cine');
console.log('C.......Aller Dormir');

let choice : 'A' | 'B' | 'C';

//Type ALIAS ou Type personnalié: possibilité de creer un nouveau type ou de renommer un type
// En general on les utilise pour donner un nom au types UNION ou LITERAL

let matricule: number | string // UNION
let chiffre: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 // Literal
let sexe: 'F' | 'M' // Literal
let jours: 'Lundi' | 'Mardi' | 'Mercredi' | 'Jeudi' | 'Vendredi' | 'Samedi' | 'Dimanche' // Literal
//
type Matr = number | string;
let matricule1: Matr;
matricule1 = 23;
matricule1 = '0023';
type days = 'Lundi' | 'Mardi' | 'Mercredi' | 'Jeudi' | 'Vendredi' | 'Samedi' | 'Dimanche';
let j: days;
j = 'Dimanche';
//
type Etudiant = {
    matricule: string,
    nom:string,
    prenom: string,
    age: number
}
let toto: Etudiant;
toto = {matricule:'002333',nom:'Toto',prenom:'tata',age:45}
//
type chaine = string
type entier = number

let prenom:chaine
let x: entier
//
type BeuggLekk = boolean
let danioKhif: BeuggLekk

danioKhif = true;
if(danioKhif == true){
    console.log('Mr Aly il est l\'heure')
}