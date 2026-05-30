// Enregistrement du Service Worker pour fonctionner Hors-Ligne (Même sans réseau)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('Mode hors-ligne prêt (Service Worker) !', registration.scope);
            })
            .catch(error => {
                console.log('Erreur du mode hors-ligne:', error);
            });
    });
}

// Gestion du bouton SFW / NSFW
const nsfwToggle = document.getElementById('nsfw-toggle');
const modal = document.getElementById('age-verification');

nsfwToggle.addEventListener('change', function() {
    if (this.checked) {
        // L'utilisateur tente d'activer le mode NSFW
        modal.style.display = 'flex';
        // Le bouton reste sur SFW visuellement jusqu'à ce que la vérification réussisse
        this.checked = false; 
    }
});

function cancelNSFW() {
    modal.style.display = 'none';
}

// Note : La vraie vérification Google et le questionnaire psychologique 
// nécessiteront la connexion à une base de données sécurisée plus tard.
