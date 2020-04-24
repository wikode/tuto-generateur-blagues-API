// URL de l'API : https://bridge.buddyweb.fr/api/blagues/blagues
const getBlagues = async () => {
    const response = await fetch('https://bridge.buddyweb.fr/api/blagues/blagues');
    const data = await response.json();
    return [...data];
}

let indexBlague = 0;

const updateBlague = async (indexBlague) => {
    // On récupère la liste de blagues dans un tableau
    const tableau = await getBlagues();
    console.log(tableau);

    // Update du texte avec la blague à l'index de valeur indexBlague
    const blagueTexte = document.getElementById('blagueTexte');
    blagueTexte.textContent = tableau[indexBlague].blagues;
}

// Changer l'index au click sur le bouton : 
const suivanteBtn = document.getElementById('suivante');
suivanteBtn.addEventListener('click', () => {
    indexBlague++;
    updateBlague(indexBlague);
})

// On lance la fonction une première fois pour le démarrage :
updateBlague(indexBlague);