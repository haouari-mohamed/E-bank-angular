// utilisateur
export interface Utilisateur {
    id: number;
    username: string;
    email: string;
    password: string;
    compteBancaires: CompteBancaire[];
  }
  
  // transfert
  export interface Transfert {
    id: number;
    montant: number;
    description: string;
    compteBancaire: CompteBancaire;
    beneficiaire: Beneficiaire;
  }
  
  // transaction
  export interface Transaction {
    id: number;
    dateHeure: Date;
    montant: number;
    type: string;
    description: string;
    compteBancaire: CompteBancaire;
  }
  
  // compteBancaire
  export interface CompteBancaire {
    id: number;
    type: string;
    soldeInitial: number;
    dateCreation: Date;
    raisonFermeture: string;
    active: boolean;
    closed: boolean;
    utilisateur: Utilisateur;
    transactions: Transaction[];
    cartesBancaires: CarteBancaire[];
    transferts: Transfert[];
  }
  
  // carteBancaire
  export interface CarteBancaire {
    id: number;
    numero: string;
    dateExpiration: Date;
    type: string;
    raisonBlocage: string;
    compteBancaire: CompteBancaire;
  }
  
  // beneficiaire
  export interface Beneficiaire {
    id: number;
    nom: string;
    numeroCompte: string;
    banque: string;
    transferts: Transfert[];
  }
  