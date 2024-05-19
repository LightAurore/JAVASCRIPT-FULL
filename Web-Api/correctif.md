import path from 'path';
import { fileURLToPath } from 'url';

//! Fix pour « import.meta.dirname » qui ne fonctionne pas en node v20 et moins !
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<!--  -->







