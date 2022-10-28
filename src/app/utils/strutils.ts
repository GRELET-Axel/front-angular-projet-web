export class StrUtils {

  // Expression Régulière qui permet de vérifier s'il s'agit bien d'une valeur numérique
  // ou d'une lettre alphabétique sans accent
  static regexNumLettres = /^[0-9a-zA-Z]+$/;

  // Expression Régulière qui permet de vérifier les caractères autorisés dans un nom ou prénom
  static regexNomPrenom: RegExp = new RegExp('^[A-Za-z\-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\ \']+');

  /**
   * lPad0N -> Left Pad avec des '0' un number et retourne la chaine.
   * Ex : lPad0N(1,2) -> '01'
   *
   * @param num Le nombre à padder.
   * @param size La taille désirée de la chaine.
   */
  static lPad0N(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }

  static caracteresSansAccent(chaineAConvertir) {
    if (!isNaN(chaineAConvertir)) {
      return chaineAConvertir;
    }

    const chaineConvertie = chaineAConvertir.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return chaineConvertie;
  }

  static traitementMetacaracteres(metacaractere: string): string {
    const listeMetacaracteres: Array<string> = ['^', '.', '[', ']', '$', '(', ')', '*', '+', '?', '|', '{', '}', '\\'];

    let caractereRetourne = '';
    const metacaractereTrouve = listeMetacaracteres.find(mc => mc === metacaractere);

    if (metacaractereTrouve !== null && metacaractereTrouve !== undefined) {
      caractereRetourne = '\\' + metacaractereTrouve;
    } else {
      caractereRetourne = metacaractere;
    }

    return caractereRetourne;
  }

  static premierLettreEnMajuscule(val: string): string {
    return val ? `${val[0].toUpperCase()}${val.substr(1)}` : '';
  }

    
  static caractereautorisePourNomPrenom(car: number, nomprenom: string): boolean {
    const size = nomprenom === undefined ? 0 : (nomprenom.length);
    // L'espace (32), l’apostrophe (39), le tiret (45) ne peut pas être le début d'un nom
    if (size === 0 && (car === 32 || car === 39 || car === 45)) {
      return false;
    } else if (size > 1 && car === 32 && nomprenom.endsWith(' ')) {
      // return false;  // On ne peut pas saisir consécutivement l'espace
      console.log('On ne peut pas saisir consécutivement l\'espace');
    }

    const inputChar = String.fromCharCode(car);
    const nomstr = (nomprenom) + inputChar;
    console.log(nomstr);

    const autorise = this.regexNomPrenom.test(inputChar);
    console.log(inputChar + ' : autorisé > ' + autorise);
    if (autorise) {
      // On ne peut pas saisir consécutivement l'apostrophe    
      // const regexfin = new RegExp('(\ |\'){2}$');
      let fininterdit = nomstr.match(/(\'){2}$/);
      if (fininterdit) {
        return false;
      }
      fininterdit = nomstr.match(/(\ ){2}$/);
      if (fininterdit) {
        return false;
      }
    }
    return autorise;
  }

  /**
   * Effectue une comparaison naturelle entre deux chaînes de caractères
   * En comparaison naturelle, les chiffres sont triés par ordre numérique (A1 < A1A < A2 < A10)
   *
   * @param val1 Valeur 1
   * @param val2 Valeur 2
   * @param inverserComparaison La comparaison doit-elle être inversée ?
   * @returns 1 si val1 > val2, -1 si val1 < val2, 0 si val1 = val2 (ou inversement si inverserComparaison = true)
   */
  static comparaisonNaturelle = (val1: string, val2: string, inverserComparaison: boolean = false): number => {
    const a = StrUtils.caracteresSansAccent(val1 ? val1.toLowerCase() : '');
    const b = StrUtils.caracteresSansAccent(val2 ? val2.toLowerCase() : '');
      
    let comparerResult = a.localeCompare(b, undefined, { numeric: true });
      
    // Inversion de la comparaison si demandée
    if(inverserComparaison){
      comparerResult *= -1;
    }
      
    return comparerResult;   
  };


  /**
   * Encoder les balises html afin de ne pas les interpréter
   *
   * @param str 
   * @returns 
   */
  static encodeHtml(str: string): string
  {
    const map =
    {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#039;'
    };
    return str.replace(/[&<>"']/g, (m) => map[m]);
  }
}
