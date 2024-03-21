
const motService = {
    create: async ({mot, classe, forme, genre, nombre, phonetique, prononciation, etymologie, synonyme, contraire, sens, exemple}) =>{
        // Le nouveau mot
        const nouveauMot = mot;
        // Vérifier si le mot existe
        const isWordExists = await mot.findOne({
            mot: nouveauMot
        });

        if(isWordExists){
            return;
        }
    }
}