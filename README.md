# MMrY - The Christmas Memory Game.

### Welcome to MMrY. 
**MMrY**, a very original short name for Memory. It is a small and easely understood game that is developed with the goal to create an accesible environment to keep your brain on top. 
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
### *0.8*
> 

 ### *0.7*
> Updated layour and color palette. <br>
> Added a landingpage. <br>
> Added styling to Landing page. <br>
> Added Navigation between landingpage and gamepage. <br>
> Styled the Landingpage. <br>
> Added comments to new elements. <br>
> Fixed Scaling issues where cards would span outside of the screen on smaller devices. <br>
> Fixed Image rendering on smaller devices <br>
> Updated and Organized 2. Updates Timeline.
<br>
> ### *0.6*
> Moved previous README.md to _Old/ and added it to .gitignore <br>
> Created a new README.md to match current project.  <br>
> Updated the new README.md with Table of Contents. <br>
> Updated the new README.md with a more detailed Planning section. <br>
> Uploaded a wireframe to the Wireframe/. <br>
> Added Updates from _old-README.md to README.md. <br>
<br>
> ### *0.5*
> updated colors<br>
> included a shuffling function using flex-items internal hierarchy<br>
> tried re-refactoring to see if primaryCard bug persists<br>
> updated code to stop matched cards from being clicked again<br>
<br>
> ### *0.4*
> retried refactoring of JS functions and now works.<br>
> Reverted back to before refactured due to bugs or breaking the code<br>
<br>
> ### *0.3*
> ending work<br>
> refactured functions in *scripts.js*<br>
> removed scripts2.js<br>
> fixed errors * 1. & 2.*<br>
> added resources used<br>
> moved projects to VSCode<br>
<br>
> ### *0.2* (23-12-2020)
> set a timeout for when cards are not matching, so we are still able to see what card we click (fixed)<br>
> Testing matching the cards using the data-* HTML attribute<br>
> Updated element classes to easely be difined in *index.html* & *styles.css*<br>
<br>
> ### *0.2* (22-12-2020)
> updated depth and 3d effects in *styles.css* for selector and .memory-cards<br>
> tested the targeting selector for the function to flip the cards<br>
> added querySelectorAll to target .memory-cards in *index.html*<br>
> starting script formating in *scripts.js*<br>
<br>
>  ### *0.1* (22-12-2020)
> updated *styles.css* with comments<br>
> added active transition<br>
> added hover transition<br>
> updated cards position<br>
> updated position of section element<br>
> added color to card background<br>
> added colors to background <br>
> added images for front and back cards <br>
> updated *index.html*<br>
> added *index.html*, *styles.css*, *scripts.js*.

# 3. Planned Updates. (In order of prioritization)
1. ~~Add a landingpage to match wirefram.~~
2. ~~Add a functional restart button to game page.~~
3. Fix error where players can break out of the fuction that clicks the cards.(read more in 4.)
4. Add notification upon completing the game.
5. Update anchor link tags on the restart button on gamepage.html


# 4. Bugs & Errors.
> 1.
>> **Expected Result:**
Clicking a card 3 times without finding the correct match should continue to turn the card face down.
>> **Actual Result:**
Clicking the card 3 times locks the card you clicked the first time. 
>>> Conclusion: This error is resolved, but was fixed back when I used VSCode and I had troubles connecting to Git to push commits.

>>> Fixed: yes (2021-02-05)

> 2.
>> **Expected Result:**
The card you click regardless of which of the 12 cards you click will call the EventListener.
>> **Actual Result:**
The first clicked card always fires as if the EventListener is stuck firing on the card the user clicked first.
>>> Conclusion: -

>>> Fixed: No (2021-02-04)

# 5. Conclusions.
# 6. Additional Comments.
# 7. TBA