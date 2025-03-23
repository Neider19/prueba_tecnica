import { Builder, Browser, By } from "selenium-webdriver";

(async function anadirCarroTest() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    await driver.get('https://www.demoblaze.com/index.html');
    await driver.manage().window().maximize();	

    await driver.sleep(3000); 

    let loginLink = await driver.findElement(By.id("login2"));
    await loginLink.click();

    await driver.sleep(3000);

    let inputUsername = await driver.findElement(By.id('loginusername'));
    await inputUsername.sendKeys('hola@correo.com');

    await driver.sleep(3000);

    let inputPassword = await driver.findElement(By.id('loginpassword'));
    await inputPassword.sendKeys('qwerty2024');

    await driver.sleep(3000);

    
    let loginButton = await driver.findElement(By.xpath("//button[text()='Log in']"));
    await loginButton.click();

    await driver.sleep(3000);
    let productLink = await driver.findElement(By.linkText("Nokia lumia 1520"));
    await productLink.click();

    await driver.sleep(3000); 

    let addToCartButton = await driver.findElement(By.xpath("//a[text()='Add to cart']"));
    await addToCartButton.click();

    await driver.sleep(3000); 

    let alert = await driver.switchTo().alert();
    await alert.accept(); 

    await driver.sleep(3000); 



    let cartLink = await driver.findElement(By.id("cartur"));
    await cartLink.click();

    await driver.sleep(5000); 

    await driver.quit();
})();



