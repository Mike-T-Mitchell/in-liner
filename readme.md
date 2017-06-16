# Email In-Liner
### Contributors
JS: @CLohr and @Mike-T-Mitchell
HTML/CSS: @Mike-T-Mitchell


### What is this?
An easy-to use CSS in-liner for e-mail.

### Why did you create it?
Part of my job requires that I code several e-mails, each of which is sent to 100k+ customers, every day. With that kind of volume, these e-mails have to look as _perfect_ as possible across _all_ platforms. The problem is that the most popular e-mail providers (GMail and Outlook included) use pre-processors which remove the `<style>` tags from the markup, as well as any references to external stylesheets (i.e. `<link rel="stylesheet" href="styles/styles.css" />`). As I'm sure you know, an e-mail without styling usually looks... _not great_. Unfortunately, the only way to avoid this is to include _all_ of your styles **inline** (i.e. `<table align="center" style="border-collapse: collapse;" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="640">`). If you're here reading this right now, you're probably already aware that this gets old _pretty quickly_. Therefore, a co-worker and I decided to create a solution that would let us write e-mail markup the same way we would for any basic web page using a `<style>` element in the head and including all of our selectors/declarations within. Then, all we'd have to do is feed that semantically correct -- but _very_ e-mail **un-ready** -- markup into our solution, and out would come our updated, "in-lined" markup! **This is that.**

### How does it modify my code?
The program is simple --

* It begins by grabbing all of your CSS selectors and declarations from within any `<style>` tags it finds and stores them in an object.
* It then separates those selectors and declarations into _key:value_ pairs and begins comparing the HTML elements in your markup to any selector names it stored in that object.
* If an element type in your markup matches a selector name, a `style` attribute is added to that element along with the _value_ portion of that _key:value_ pair mentioned previously (i.e. `<table style="border-collapse: collapse;">`)

### How do I use it?
* Clone this repository to your local machine.
* Open `index.html` in your browser.
* Paste your e-mail markup (with the `<style>` tags) into the text field at the top of the page and click "Make Magic."
* Click the "Copy HTML" button to copy the newly "in-lined" markup (which is displayed in the text field at the bottom of the page) to your clipboard.
* Profit.

### Special Thanks
* To [Zeno Rocha](https://github.com/zenorocha) for creating clipboard.js, a super elegant method for copying text to the clipboard which is utilized in this project.

Preview: [http://mike-t-mitchell.github.io/in-liner](http://mike-t-mitchell.github.io/in-liner)
