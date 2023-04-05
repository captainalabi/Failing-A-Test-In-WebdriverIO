//Practice E-Commerce Site – Automation Bro
//https://practice.automationbro.com/



describe('Test title', () => {
    it('Verify page title', async () => {
        
       await browser.url("https://practice.automationbro.com/");
       await expect(browser).toHaveTitle("Practice E-Commerce Site – Automation Bro")
    });
});


//always fail your test to confirm if the code is working right
//ASYNC- AWAIT example
//You might have forgotten a step in your code and still your test could pass- fake or frail test
//Case study of verify browser title
// the test below passes regardless of the text passed to the toHaveTitle() function if aync/await is not implemented