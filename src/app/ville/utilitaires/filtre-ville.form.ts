import { FormControl, FormGroup } from "@angular/forms";

export const recupererFiltreVille = (): FiltreVilleForm => new FormGroup({
  rechercher: new FormControl('')
});

export type FiltreVilleForm = FormGroup<{
  rechercher: FormControl<string | null>,
}> | null
