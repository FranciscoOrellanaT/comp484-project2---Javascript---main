     // Called function to update the name, happiness, and weight of our pet in our HTML
   /* var pet_info = 
    {name:"Teddy",
     Age: 18,
     weight: 20, 
     happiness:100,
     energy: 10,
    };
    
  var messages = [
    "Hello, my name is Teddy!",
    "TREAT! I love treats!",
    "All this exercise make me hungry...Treats!",
    "NOOOO! I don't want to exercise!",
    "Getting sleepy!",
    "Nap Tiime!"
    ];
     */
    $(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);

  
    
  })
  
  // This is the object that holds all of our pet's information. You can add more properties to this object if you want to track more information about your pet.
    var pet_info = 
    {name:"Teddy",
     Age: 18,
     weight: 20, 
     happiness:100,
     energy: 10,
    };

    var exerciseCount = 0; // This variable keeps track of how many times the pet has exercised. It is used to limit the number of times the pet can exercise before it gets too tired.
    var happinessCount = 0; // This variable keeps track of how many times the pet has been made happy. It is used to limit the number of times the pet can be made happy before it gets too tired.

    var messages = [
    "TREAT! I love treats!",
    "All this exercise make me hungry...Treats!",
    "Exercising.....",
    "NOOOO! I don't want to exercise!",
    "Getting sleepy!",
    "Nap Tiime!",
    "Zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
    ];
  
    //Treat button click function
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness = pet_info.happiness + 10;
      // Increase pet weight
       pet_info.weight = pet_info.weight + 2;

      checkAndUpdatePetInfoInHtml();

      // Update the message and image to show that the pet is happy to get a treat
      $('.message').text(messages[1]);
      $('.pet-image').attr('src', 'images/eating.jpg');

    }
    

    //Play button click function
    function clickedPlayButton() {
     if (pet_info.energy < 2) {

        // Not enough energy to play
        $('.pet-image').attr('src', 'images/sleepy.jpg');
        $('.message').text(messages[5]);

    } else {
      // Increase pet happiness
      pet_info.happiness = pet_info.happiness + 10;
      // Decrease pet weight
      pet_info.energy = pet_info.energy - 2;
      pet_info.weight = pet_info.weight - 1;
      checkAndUpdatePetInfoInHtml();

      // Update the message and image to show that the pet is happy to play
      $('.message').text(messages[2]);
      $('.pet-image').attr('src', 'images/playing.jpg');

      // Animate the pet image to move to the right and then back to the left
      //animate() is a jQuery function that allows you to animate CSS properties of an element over a specified duration. In this case, we are animating the 'right' property of the '.pet-image' element to move it 200 pixels to the right and then back to its original position.
      $('.pet-image').animate({right: '-20px'}, 100);
      $('.pet-image').animate({right: '0px'}, 100);
     }
    }
    

    //Exercise button click function
    function clickedExerciseButton() {
       if (exerciseCount >= 2) {

        // Pet has exercised too many times
        $('.pet-image').attr('src', 'images/angry.png');
        $('.message').text(messages[4]);

    } else if (pet_info.energy < 4) {

        // Pet does not have enough energy
        $('.pet-image').attr('src', 'images/sleepy.jpg');
        $('.message').text(messages[5]);

    } else {

      // Decrease pet happiness
      pet_info.happiness = pet_info.happiness - 20;
      // Decrease pet weight
      pet_info.energy = pet_info.energy - 5;
      pet_info.weight = pet_info.weight - 2;

      exerciseCount = exerciseCount + 1; // Increment the exercise count by 1

      checkAndUpdatePetInfoInHtml();
      
      // Update the message and image to show that the pet is unhappy to exercise
      $('.message').text(messages[3]);
      $('.pet-image').attr('src', 'images/workout.jpg');

      // Animate the pet image to move to the left and then back to the right
      for (var i = 0; i < 3; i++) {
      $('.pet-image').animate({left: '-20px'}, 1000);
      $('.pet-image').animate({left: '0px'}, 1000);
      }
    }
    }



    //Treat button click function
    function clickedSleepButton() {
      // Restore pet energy
      pet_info.energy = pet_info.energy + 10;
      //Reset exercise count to 0
      exerciseCount = 0;


      // Restore pet happiness
      pet_info.happiness = pet_info.happiness + 100;
      // Reset happiness count to 0
      happinessCount = 0;


      checkAndUpdatePetInfoInHtml();

      // Update the message and image to show that the pet is happy to get a treat
      $('.message').text(messages[7]);
      $('.pet-image').attr('src', 'images/sleeping.jpg');

    }

    // This function checks the weight and happiness of the pet before updating the HTML. If the weight is lower than zero, it sets the weight to zero. If the happiness is lower than zero, it sets the happiness to zero.
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0) {
        pet_info.weight = 0;
      }
      // Add conditional so if weight is greater than 20.
      if (pet_info.weight > 20) {
        pet_info.weight = 20;
      }
      // Add conditional so if happiness is lower than zero.
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }
      // Add conditional so if happiness is greater than 100.
      if (pet_info.happiness > 100) {
        pet_info.happiness = 100;
      }
      // Add conditional so if energy is lower than zero or greater than 10.
      if (pet_info.energy < 0) {
        pet_info.energy = 0;
      }
      // Add conditional so if energy is greater than 10.
      if (pet_info.energy > 10) {
        pet_info.energy = 10;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.age').text(pet_info['Age']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info.energy);
    }
  