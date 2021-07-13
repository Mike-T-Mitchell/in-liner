# Email In-Liner
### Contributors
JS: @CLohr and @Mike-T-Mitchell
HTML/CSS: @Mike-T-Mitchell


### What is this?
An easy-to use CSS in-liner for e-mail.

### Why did you create it?
Part of my job requires that I code several e-mails, each of which is sent to 100k+ customers, every day. With that kind of volume, these e-mails have to look as _perfect_ as possible across _all_ platforms. The problem is that the most popular e-mail providers (GMail and Outlook included) use pre-processors which remove the `<style>` tags from the markup, as well as any references to external stylesheets (i.e. `<link rel="stylesheet" href="styles/styles.css" />`). 

As I'm sure you know, an e-mail without styling usually looks... _not great_. Unfortunately, the only way to avoid this is to include _all_ of your styles **inline** (i.e. `<table align="center" style="border-collapse: collapse;" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="640">`). If you're reading this right now, you know this gets old _quickly_.

To save time, a co-worker and I wrote this in-liner. Now all we need to do is add `<style>` tags (and the appropriate style declarations) above the HTML table markup and then feed that markup into this in-liner. The in-liner processes that markup, inlines the styles appropriately, removes the `<style>` tags from the head, and outputs thet finished, in-lined markup.

### How does it modify my code?

* Grab all CSS selectors/declarations between the `<style>` tags and store them as `key:value` pairs in an object.
* Compare the HTML elements in your markup to any of the selectors within the above object.
* If a selector in that object matches an element in your markup, any styles defined for that selector are added to that element in the markup within a `style="` attrib.

### How do I use it?
* Clone this repo.
* Open `index.html` in a browser (this was tested in Chrome and Firefox).
* Paste your e-mail markup (incl'd the `<style>` tags) into the text field at the top. 
* Click "Make Magic."
* Inspect the output in the text field at the _bottom._ 
* If nothing looks out of place, copy the in-lined markup to your clipboard by clicking the "Copy HTML" button.
* Profit.

### Attributions
* [Zeno Rocha](https://github.com/zenorocha) for creating clipboard.js, which this in-liner uses to copy the in-lined output to the clipboard.

### Preview
Wanna preview the tool? Got you covered: [http://mike-t-mitchell.github.io/in-liner](http://mike-t-mitchell.github.io/in-liner).
