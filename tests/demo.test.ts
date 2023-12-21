import { expect, test } from "@playwright/test";
import { log } from "console";


test("", async ({page}) => {
   
   await page.goto("https://www.shutterstock.com/")
   //Verify  correct title is display and logo is display
   const expectedTitle = 'Stock Images, Photos, Vectors, Video, and Music | Shutterstock';
   const pageTitle = await page.title();
    console.log(pageTitle);
    
   if (pageTitle !== expectedTitle) {
     console.error(`Title Expected: ${expectedTitle}, Actual Title: ${pageTitle}`);
   }   
 
   // Verify the logo is displayed
   const logoElement =  page.locator('#__next > div.MuiContainer-root.MuiContainer-disableGutters.mui-sgxi1e-root > header > div > div.MuiGrid-root.MuiGrid-item.mui-15e9u95-primaryNavLinkContainer-gridItemContainer > a > button > svg');

   if (!logoElement) {
     console.error('Logo not found');
   }

   //Search
   const searchInput = page.locator('input[placeholder="Start your next project"]')
   let searchText = "cat"
   await searchInput.type(searchText)
   await searchInput.press('Enter')
   await page.waitForTimeout(3000)

   const imagesCount = await page.$$('div[role="img"]');

  console.log(`Cat images count: ${imagesCount.length}`);


   

})