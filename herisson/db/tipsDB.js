const fs = require('fs');

const listeCategories = ['Mammifères', 'Amphibiens', 'Reptiles', 'Odonates', 'Oiseaux', 'Rhopalocères', 'Chiroptères'];

const tipsMammiferes = {
    conseil1: 'Évitez les pelouses en moquette rase : réglez la tonte le plus haut possible. L\'idéal est de laisser fleurir dans votre pelouse les fleurs typiques des prairies. Une multitude d’animaux viendra y vivre, pour le plus grand bonheur des hérissons.',
    conseil2: 'Pour borner le jardin et construire une intimité, rien ne vaut une haie mais choisissez des espèces variées, et de préférence locales car elles attirent un plus grand nombre d’animaux. Planter de l’aubépine est un bon compromis.',
    conseil3: 'Rejoignez les campagnes de sciences participatives pour aider les chercheurs. Depuis chez vous ou en excursion, vous pouvez enrichir leurs données et vos connaissances, le tout de manière ludique.',
    conseil4: 'Si vous devez élaguer, abattre ou nettoyer votre jardin, laissez les branchages en tas sous la haie ou dans un endroit tranquille. Cet ensemble de tiges, de feuilles et de branches servira de lieu d’hivernage et de refuge aux rongeurs et aux hérissons.'
}

const tipsAmphibiens = {
    conseil1 : 'Pour borner le jardin et construire une intimité, rien ne vaut une haie mais choisissez des espèces variées, et de préférence locales. Planter de l’aubépine est un bon compromis. À condition d’avoir de l’humidité, les grenouilles viendront en quête de nourriture : insectes de toutes sortes, vers ou chenilles.',
    conseil2 : 'Évitez les pelouses en moquette rase : réglez la tonte le plus haut possible. L\'idéal est de laisser fleurir dans votre pelouse les fleurs typiques des prairies. Les grenouilles apprécient les hautes herbes, à condition d’avoir de l’humidité et un point d’eau pas loin.',
    conseil3 : 'Pas besoin d’un grand jardin, un petit bassin suffit. Les premiers locataires ne tarderont pas à arriver et y pondre leurs œufs. Pour augmenter leurs chances de survie, évitez d’y mettre des poissons.',
    conseil4 : 'Rejoignez les campagnes de sciences participatives pour aider les chercheurs. Depuis chez vous ou en excursion, vous pouvez enrichir leurs données et vos connaissances, le tout de manière ludique.',
    conseil5 : 'Si vous devez élaguer, abattre ou nettoyer votre jardin, laissez les branchages en tas sous la haie ou dans un endroit tranquille. Dans les interstices se réfugiera un crapaud, hiverneront de nombreux insectes.'
}

const tipsReptiles = {
    conseil1 : 'Pour borner le jardin et construire une intimité, rien ne vaut une haie mais choisissez des espèces variées, et de préférence locales car elles attirent un plus grand nombre d’animaux. Planter de l’aubépine est un bon compromis.',
    conseil2 : 'La tondeuse peut être mortelle pour ces espèces. Le plus pertinent est de ne tondre qu’une partie du jardin. Une végétation haute permet aux lézards de se déplacer et de chasser plus facilement les insectes dont ils se nourrissent.',
    conseil3 : 'Si vous devez élaguer, abattre ou nettoyer votre jardin, laissez les branchages en tas sous la haie ou dans un endroit tranquille. Dans les interstices se réfugiera et nichera un grand nombre d’espèces, pour le plus bonheur des petits reptiles.',
    conseil4 : 'Si par hasard vous disposez d’un reste de sable après un chantier, déposez-le contre une surface verticale orientée au sud. Cela servira de solarium et de pondoir aux lézards et aux couleuvres.',
    conseil5 : 'Rejoignez les campagnes de sciences participatives pour aider les chercheurs. Depuis chez vous ou en excursion, vous pouvez enrichir leurs données et vos connaissances, le tout de manière ludique.'
}

const tipsOdonates = {
    conseil1 : 'Pas besoin d’un grand jardin, un petit bassin suffit. Libellules et demoiselles ne tarderont pas à arriver et y pondre leurs œufs. Pour augmenter leurs chances de survie, évitez d’y mettre des poissons, qui mangent les larves.',
    conseil2 : 'Pour borner le jardin et construire une intimité, rien ne vaut une haie mais choisissez des espèces variées, et de préférence locales car elles attirent un plus grand nombre d’animaux. Planter de l’aubépine est un bon compromis.',
    conseil3 : 'Le plus pertinent est de ne tondre qu’une partie du jardin. Une multitude de vers et autres insectes viendra alors vivre dans la partie naturelle, pour le plus grand bonheur des libellules. Dans la partie tondue, réglez la hauteur de coupe le plus haut possible.',
    conseil4 : 'Rejoignez les campagnes de sciences participatives pour aider les chercheurs. Depuis chez vous ou en excursion, vous pouvez enrichir leurs données et vos connaissances, le tout de manière ludique.',
}

const tipsOiseaux = {
    conseil1 : 'Les oiseaux apprécient les nichoirs « boîte aux lettres ». Cependant, évitez les nichoirs décoratifs des jardineries et adressez-vous à des sites spécialisés pour augmenter vos chances d’y accueillir un nid. N’oubliez pas de l’orienter à l’est.',
    conseil2 : 'Pour borner le jardin et construire une intimité, rien ne vaut une haie mais choisissez des espèces variées, et surtout locales. Les oiseaux aiment faire leurs nids dans des bosquets épineux pour se protéger, par exemple dans de l\'aubépine.',
    conseil3 : 'Si un oiseau se cogne contre votre vitre, il faut adopter les bons réflexes. Vous pouvez le ramasser avec des gants de coton et le mettre dans une boîte en carton ouverte, à l’abri des prédateurs. Surveillez que rien ne le gêne.',
    conseil4 : 'Idéal sur un balcon ou sur une branche, les mangeoires aident les oiseaux à se nourrir l’hiver. Privilégier des graines non salées de tournesol, de blé ou de maïs. Faites attention à rendre la mangeoire inaccessible aux chats.',
    conseil5 : 'Rejoignez les campagnes de sciences participatives pour aider les chercheurs. Depuis chez vous ou en excursion, vous pouvez enrichir leurs données et vos connaissances, le tout de manière ludique.'
}

const tipsRhopaloceres = {
    conseil1 : 'Un simple balcon, aussi modeste soit-il, peut devenir un vrai refuge de biodiversité. Mettre des jardinières de plantes locales ou mellifères attire oiseaux et insectes, qui nourrissent de nombreuses chenilles de papillons.',
    conseil2 : 'Une pelouse trop rase empêche le développement des papillons, qui pondent à l\'intérieur de celle-ci. Dans un coin de votre jardin, laissez se développer la nature sauvage.',
    conseil3 : 'Pour borner le jardin et construire une intimité, rien ne vaut une haie mais choisissez des espèces variées, et de préférence locales car elles attirent un plus grand nombre d’animaux. Planter de l’aubépine est un bon exemple.',
    conseil4 : 'Les produits naturels comme le pyrèthre ont, tout comme les pesticides chimiques, leurs inconvénients. Ils sont très toxiques au moment de leur épandage et ce, pour tous les insectes. Oubliez-les.',
    conseil5 : 'Rejoignez les campagnes de sciences participatives pour aider les chercheurs. Depuis chez vous ou en excursion, vous pouvez enrichir leurs données et vos connaissances, le tout de manière ludique.'
}

const tipsChiropteres = {
    conseil1 : 'Évitez les pelouses en moquette rase : réglez la tonte le plus haut possible. L\'idéal est de laisser fleurir dans votre pelouse les fleurs typiques des prairies. De nombreux animaux viendront alors y vivre, tous maillons importants de la chaîne alimentaire.',
    conseil2 : 'Pas besoin d’un grand jardin, un petit bassin suffit. Les premiers locataires ne tarderont pas à arriver et y pondre leurs œufs. Pour augmenter leurs chances de survie, évitez d’y mettre des poissons.',
    conseil3 : 'Rejoignez les campagnes de sciences participatives pour aider les chercheurs. Depuis chez soi ou en excursion pleine nature, vous pouvez enrichir leurs données et vos connaissances, le tout de manière ludique.',
    conseil4 : 'Les chauves-souris connaissent souvent la crise du logement. Renseignez-vous pour acheter un nichoir artificiel dans les magasins spécialisés. Ces insectivores sauront vous remercier durant l\'été.',
    conseil5 : 'Pour servir de haie, les espèces locales sont par définition parfaitement adaptées au sol et au climat. Ces plantes attirent et nourrissent de nombreux animaux. Un véritable garde-manger pour les chauves-souris.'
}

async function createTipsDB() {
    let tipsDB = {};
    for (let i = 0; i < listeCategories.length; i++) {
        tipsDB[listeCategories[i]] = {};
    }
    for (const category in tipsDB) {
        switch (category) {
            case 'Mammifères':
                tipsDB[category] = tipsMammiferes;
                break;
            case 'Amphibiens':
                tipsDB[category] = tipsAmphibiens;
                break;
            case 'Reptiles':
                tipsDB[category] = tipsReptiles;
                break;
            case 'Odonates':
                tipsDB[category] = tipsOdonates;
                break;
            case 'Oiseaux':
                tipsDB[category] = tipsOiseaux;
                break;
            case 'Rhopalocères':
                tipsDB[category] = tipsRhopaloceres;
                break;
            case 'Chiroptères':
                tipsDB[category] = tipsChiropteres;
                break;
            default:
                break;
        }
    }

    fs.writeFileSync('../public/data/tipsDB.json', JSON.stringify(tipsDB));
}

createTipsDB();
