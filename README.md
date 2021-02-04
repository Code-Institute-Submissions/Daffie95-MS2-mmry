# MMrY - The Christmas Memory Game.

### Welcome to MMrY. 
MMrY, a very original short for Memory is a small and easely understood game that is developed with the goal to create an accesible environment to keep your brain on top of things. 
This game is part of a project done during a Full Stack Dev Course supplied by Code Institute©. Both me in the role as creator and the Institute has full rights to this projects, to clone or fork the repository on [GitHub](https://github.com/Daffie95/MS2-mmry).
Below will be a full summary of the project, from a creation stage and following trough to a finished project. 
<br>
<br>
As a small disclaimer this is a continuation of a previously failed project and old files can be found in the _Old directory.

### Table of Contents.
#### 1. Project Planning.
#### 2. Updates Timeline.
#### 3. Planned Updates.
#### 4. Bugs & Errors.
#### 5. Conclusion.
#### 6. Additional Comments.
#### 7. TBA

# 1. Project Planning.
The idea for this project came to me when I had a discussion with a friend about dementia, and how small and continous activation of the brain does tremendous work to battle dementia.
So I decided that my Project would be a memory game. Memory games are usually small and consize of a number of cards that all has a matching counterpart. So to finish the game the user will need to find every two paris of card in the game to complete it.
All the cards will have the same backside to not visualy disrupt the game or make it unclear, while as mentioned above there will be 6 different cards, each with another exact match, giving us 12 cards in the game. 
<br>
<br>
Inital wireframes of the project can be found in the Wireframe/. Thanks goes out to UXPin for allowing me to use their software.
<br>
<br>
There are different techniques to make this project work. The webpages, the landing page and the game page will consist of HTML and CSS to create an intuitive layout and easy on the eyes design. 
I dont want to complicate things, as the target audience might be individuals that struggles with disorders, and may not handle aggressive colorpalettes very well. 
Alongside the  HTML and CSS the main functionalities will be utilizing JavaScript to create a functional memory game.
<br>
<br>
Using a JavaScript function that counts the card and the given ID (I will use the Data attribute to connect the HTML element with the JavaScript Funtion), the function will initially shuffle each card on load and only shuffle if the page is refreshed and/or the 'Restart' button is pressed.
There will be roughly about 5 different functions needed to create a finished project. One to  allow cards to flip, one to check for a match between the two flipped cards, one to disable the two clicked cards if the cards match, and one to unflip cards if they dont match, and finally a function to shuffle all the cards upon loading the page.


# 2. Updates Timeline.
> ### *0.6*
> * Moved previous README.md to _Old and added it to .gitignore

> ### *0.5*
> * updated colors
> * included a shuffling function using flex-items internal hierarchy
> * tried re-refactoring to see if primaryCard bug persists
> * updated code to stop matched cards from being clicked again

> ### *0.4*
> * retried refactoring of JS functions and now works.
> * Reverted back to before refactured due to bugs or breaking the code

> ### *0.3*
> * ending work
> * refactured functions in *scripts.js*
> * removed scripts2.js
> * fixed errors * 1. & 2.*
> * added resources used
> * moved projects to VSCode

> ### *0.2* (23-12-2020)
> * set a timeout for when cards are not matching, so we are still able to see what card we click (fixed)
> * Testing matching the cards using the data-* HTML attribute
> * Updated element classes to easely be difined in *index.html* & *styles.css*

> ### *0.2* (22-12-2020)
> * updated depth and 3d effects in *styles.css* for selector and .memory-cards
> * tested the targeting selector for the function to flip the cards
> * added querySelectorAll to target .memory-cards in *index.html*
> * starting script formating in *scripts.js*

>  ### *0.1* (22-12-2020)
> * updated *styles.css* with comments<br>
> * added active transition<br>
> * added hover transition<br>
> * updated cards position<br>
> * updated position of section element<br>
> * added color to card background<br>
> * added colors to background <br>
> * added images for front and back cards <br>
> * updated *index.html*<br>
> * added *index.html*, *styles.css*, *scripts.js*.

# 3. Planned Updates. 
# 4. Bugs & Errors.
# 5. Conclusions.
# 6. Additional Comments.
# 7. TBA