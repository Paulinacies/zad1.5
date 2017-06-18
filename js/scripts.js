 $(document).ready(function() {

        var button = $("#button");

            button.on("click", function(){

                $.getJSON("https://jsonplaceholder.typicode.com/users", function(data) {
                     

                       // for (var key in data) {
                         
                       //  var name = data[key].name,
                       //      username = data[key].username,
                       //      email = data[key].email,
                       //      phone = data[key].phone;

                       //      console.log(name, username, email, phone);

                       // };

                      var items = [];

                      $.each( data, function( key, val ) {
                            
                            items.push( "<li id='" + key + "'>" + 
                              "name: "+ data[key].name + '<br>' +
                              "usern name: "+ data[key].username + '<br>' +
                              "email: "+ data[key].email + '<br>' +
                              "phone: "+ data[key].phone + "</li>" );
                        });

                       
                        $( "<ul/>", {
                              "class": "my-new-list",
                              html: items.join( "" )
                          }).appendTo( "body" );


               });
           

           });


});

