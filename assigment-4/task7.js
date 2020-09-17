var quote = "the quick brown  fox jumps  over the lazy dog";
         document.write(quote);



         quote = quote.toLowerCase();

   var matches =   quote.match(/the/g);
        console.log(matches.length);


        document.write("<br> There are " + matches.length + " of word 'the' " )

        //  console.log(quote.count("the"));
// for(var i = 0; i < quote.length; i++){


//     console.log (quote.indexOf("the"));
//     console.log(quote.lastIndexOf("the"));
// break;



// }