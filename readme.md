# Email In-Liner
### Contributors
JS: @CLohr and @Mike-T-Mitchell
HTML/CSS: @Mike-T-Mitchell


### What is this?
An easy-to use CSS in-liner for HTML table-based e-mails.

### Why make this?
I wanted to save time, and manually in-lining styles in HTML tables gets old _quickly._

### How does it work?

* Grab all CSS selectors/declarations between the `<style>` tags and store them as `key:value` pairs in an object.
* Compare the selectors in that object to the HTML element names in the source markup.
* If there's a match, any styles defined for the matched selector are added to the appropriate element in the markup via an inline `style="` attrib.
* Output new HTML with inlined styles.

### How do I use it?
* Clone this repo.
* Open `index.html` in a browser (tested in Chrome and Firefox).
* Paste your markup - including the `<style>` tags - into the text field at the top.
* Click "Make Magic."
* Inspect the output to make sure nothing looks out of place.
* Copy the in-lined markup to your clipboard via the "Copy HTML" button.
* Paste the in-lined markup into whatever e-mail program you're using.
* Send a test/preview email to yourself to ensure it looks as expected.
* Profit.

### Attributions
* [Zeno Rocha](https://github.com/zenorocha) for creating clipboard.js, which this in-liner uses to copy the in-lined output to the clipboard.

### Preview
Wanna preview the tool? Got you covered: [http://mike-t-mitchell.github.io/in-liner](http://mike-t-mitchell.github.io/in-liner).
