import { campus } from "./campus";
import { etat } from "./etat";
import { Participant } from "./Participant";

export class sortie {
  constructor(
    public id: number,
    public nom: string,
    public date_heure_debut: string,
    public duration: number,
    public date_limite_inscription: string,
    public nbMaxRegistrations: number,
    public description: string,
    public etat: etat,
    public urlPicture: string,
    // public registrations: Registration[],
    public location: Location,
    public campus: campus,
    public organizer: Participant,
  ) { }
}

