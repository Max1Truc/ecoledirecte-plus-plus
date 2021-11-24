# EcoleDirecte ++
Cette extension pour firefox permet de forcer EcoleDirecte à afficher les données sur vos notes que votre établissement a demandé à ne pas montrer même s'il les calcule quand même.

L'API d'EcoleDirecte transmet en fait les données au navigateur mais lui demande gentiment de ne pas les afficher, cette extension permet d'ignorer ces demandes.

Vous pouvez installer cette extension en visitant cette page avec le navigateur Firefox: https://addons.mozilla.org/firefox/addon/ecoledirecte-plus-plus/

# Comment tester le code

Pour tester ce code ou des modifications que vous y auriez faites, c'est très simple. Tout d'abord, téléchargez le code sur votre ordinateur, et si c'est un fichier ZIP extrayez son contenu dans un dossier. Ensuite, ouvrez le lien `about:debugging` dans Firefox, puis allez dans le menu `Ce Firefox` et `Charger un module complémentaire temporaire...`. Sélectionnez le fichier `manifest.json` et hop l'extension est chargée dans Firefox.
