import {ville} from './ville';

 export class lieu {
        constructor(
            public idLieu: number,
            public nomLieu: string,
            public street: string,
            public latitude: number,
            public longitude: number,
            public ville: ville
        ) { }
      }
      