// Import des modules nécessaires
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function exampleTest() {
    // Créer une nouvelle instance de WebDriver pour le navigateur Chrome
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();

    try {
        // Accéder à une URL (par exemple, Google)
        await driver.get('https://www.google.com');

        // Localiser la barre de recherche, taper "Selenium", et appuyer sur "Entrée"
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Selenium', Key.RETURN);

        // Attendre que la page des résultats se charge et vérifier que le titre contient "Selenium"
        await driver.wait(until.titleContains('Selenium'), 5000);

        // Obtenir le titre de la page et l'afficher dans la console
        let title = await driver.getTitle();
        console.log('Titre de la page:', title);

        // Vérifier si le test a réussi
        if (title.includes('Selenium')) {
            console.log('Test réussi');
        } else {
            console.log('Test échoué');
        }
    } finally {
        // Fermer le navigateur
        await driver.quit();
    }
})();
