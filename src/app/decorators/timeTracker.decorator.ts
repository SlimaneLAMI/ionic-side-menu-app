// Décorateur de classe qui montrera combien de temps 
// un utilisateur a passé sur une vue ionic.

// Les vues ionic traversent un cycle de vie spécifique, de leur création 
// à leur destruction.

// Le module décorateur TimeTracker reçoit le nom de la vue actuelle en tant que 
// paramètre viewName.
// Le décorateur de classe reçoit comme premier paramètre un constructeur. 
// Nous allons récupérer les méthodes originales ionViewDidEnter 
// et ionViewWillLeave de ce constructeur pour conserver le mécanisme 
// prédéfini de l'utilisateur

// Nous initialisons une variable startTime avec la date actuelle, puis 
// nous appelons la méthode ionViewDidEnter d'origine avec le contexte et 
// les arguments d'origine.

// Nous utilisons le startTime pour afficher combien de temps un utilisateur 
// a passé sur la vue (en millisecondes).

export function TimeTracker(viewName) {
    return function (constructor) {
        var startTime;

        const ionViewDidEnterHook = "ionViewDidEnter";
        const ionViewWillLeaveHook = "ionViewWillLeave";

        const original = constructor.prototype[ionViewDidEnterHook];

        constructor.prototype[ionViewDidEnterHook] = function (...args) {
            startTime = new Date();
            original && original.apply(this, args);
        }

        const original2 = constructor.prototype[ionViewWillLeaveHook];

        constructor.prototype[ionViewWillLeaveHook] = function (...args) {
            const endTime = new Date();
            const timeSpent = endTime.getTime() - startTime.getTime();

            console.log("The user spent", timeSpent, " ms on:", viewName);
            original2 && original2.apply(this, args);
        }
    }
}

// dans chaque page.ts, declarez un decorateur avec sa route correspondante
