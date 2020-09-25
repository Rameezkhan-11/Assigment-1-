var input = "<p><strong><em>Only print this</em></strong></p>";

document.write("Before removing tags " + input);

    
input = input.slice(15,30);

document.write(" Output after removing tags: " + input)
