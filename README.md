# Failing-A-Test-In-WebdriverIO
Deliberately fail a test to be sure its a real test
Always fail your test to confirm if the code is working right
ASYNC- AWAIT example
You might have forgotten a step in your code and still your test could pass- fake or frail test
Case study of verify browser title:
The test here passes regardless of the text passed to the toHaveTitle() function if aync/await is not implemented.
Deliberately failing your test to confirm that it is actually a concrete test would allow you to discover any oversight
and it gives you confidence that your test is very ok.
