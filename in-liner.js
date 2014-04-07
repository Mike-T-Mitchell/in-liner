// HTML In-Liner for E-mail
$(function () {
   /* 
   	read all styles within the <style> tags in the 
   	header and split on } to read all style declarations 
   	
   	selectorStyles = [
        {
   			'p.1': [
   				{'color': 'green'},
   				{'background': 'gold'}
   			]
   		}
   	];
   */
	var styles = $("style").text().split("}"),
   		selectorStyles = [];

   // loop through each declaration
	$.each(styles, function(index, elementType) {
		// split on { which will now separate your style selector from declarations
		var cssPair = $.trim(elementType).split("{"),
			cssSelector = '',
			cssDeclarations = '',
			obj = {};
	   	// parse out selector; first element in our new array
		if (cssPair.length === 2) {
   			cssSelector = $.trim(cssPair[0]);
   			// store selector as key and individual declarations as your values
	   		obj[cssSelector] = [];
	   		// split declarations	
   			cssDeclarations = $.trim(cssPair[1]).split(";");
   			// loop through declarations
	   		$.each (cssDeclarations, function(i, dec) {
	   			var props = {},
	   				splits = [];
	   			dec = $.trim(dec);
	   			if (dec.length > 0) {
	   				// split this into key/value or style/declaration pairs
	   				splits = dec.split(':');
	   				if (splits.length === 2) {
	   					// trim whitespace
	   					splits[0] = $.trim(splits[0]);
	   					splits[1] = $.trim(splits[1]);
	   					// assign key/value pairs
	   					props[splits[0]] = splits[1];
	   					// pass it to parent object literal
	   					obj[cssSelector].push(props);
	   				}	
	   			}
	   		}); 
	   		// populate parent object literal
	   		selectorStyles.push(obj);
	   	}
	});
    // loop through selectorStyles and use JS to inline the styles on your content
	if (selectorStyles.length > 0) {
        for (var i=0; i<selectorStyles.length; i+=1) {
            var cur = selectorStyles[i],
                selector = '';
            for (var k in cur) {
                var nextObj = cur[k];
                // css selector
                selector = k;
                for (var k2 in nextObj) {
                    for (var k3 in nextObj[k2]) {
                        // style key + value pair to be applied
                        $(selector).css(k3, nextObj[k2][k3]);
                    }
                }
            }
        }
        // remove style tags from dom
        $('style').remove();
	}
});