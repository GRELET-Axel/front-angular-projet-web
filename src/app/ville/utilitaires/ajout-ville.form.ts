import { FormControl, FormGroup, Validators } from "@angular/forms";

export const recupererAjoutVille = (): AjoutVilleForm => new FormGroup({
  nom: new FormControl('', [Validators.required]),
  codePostal: new FormControl('',[Validators.required])
});

export type AjoutVilleForm = FormGroup<{
  nom: FormControl<string | null>,
  codePostal: FormControl<string | null>
}> | null;
