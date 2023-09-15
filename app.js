console.log("Hey");

function greet() {
  let username = prompt("Hello film fan, What is your name?");
  document.write("Hello " + username);
}

function askFilm() {
  let filmscore = prompt("You lika the films huh? Tell me how much outta 10?");
  let message;

  if (filmscore <= 5) {
    message = "You dont like A the film too much huh? well get outta here!!!";
  } else if (filmscore <= 9) {
    message = "Ah you like A the film eh? Then see below!!!";
  } else if (filmscore == 10) {
    message = "You bloody love the film eh?! Then enjoy...";
  } else {
    message = "Wassa matta? Don't like answering my questions? Well guess what? Get outta here!!";
  }

  document.write(message);
}

function getRating () {
    let rating = prompt('How many fresh tomatoes would you give the film The Revenant? 1-10');

    while (rating < 0 || rating >=11) 
      rating = prompt('Please enter a number 10 or lower!')


    for (let i = 0; i < rating; i++) 
    
    document.write("<img src='tom.jpg'/>")
        
    }

  