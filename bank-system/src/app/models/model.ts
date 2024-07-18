// utilisateur.model.ts
export interface Utilisateur {
    id: number;
    username: string;
    email: string;
    password: string;
    compteBancaires: CompteBancaire[];
  }
  
  // transfert.model.ts
  export interface Transfert {
    id: number;
    montant: number;
    description: string;
    compteBancaire: CompteBancaire;
    beneficiaire: Beneficiaire;
  }
  
  // transaction.model.ts
  export interface Transaction {
    id: number;
    dateHeure: Date;
    montant: number;
    type: string;
    description: string;
    compteBancaire: CompteBancaire;
  }
  
  // compteBancaire.model.ts
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
  
  // carteBancaire.model.ts
  export interface CarteBancaire {
    id: number;
    numero: string;
    dateExpiration: Date;
    type: string;
    raisonBlocage: string;
    compteBancaire: CompteBancaire;
  }
  
  // beneficiaire.model.ts
  export interface Beneficiaire {
    id: number;
    nom: string;
    numeroCompte: string;
    banque: string;
    transferts: Transfert[];
  }
  