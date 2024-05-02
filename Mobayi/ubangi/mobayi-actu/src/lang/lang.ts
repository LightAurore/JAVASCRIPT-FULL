import { Langue } from "../types/langue";
import ngb from './icons/ngb.png';
import lob from './icons/lob.png';
import fr from './icons/fr.png';
import us from './icons/us.png';


export const LANGUAGES : Array<Langue> = [
    { code: 'ngb', label: 'Ngbandi', flag: ngb},
    { code: 'lob', label: 'Lobangi', flag: lob},
    { code: 'fr', label: 'Français', flag: fr},
    { code: 'en', label: 'English', flag: us}
];

Object.freeze(LANGUAGES);