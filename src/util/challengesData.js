import ExpandingCards from "../components/Challenges/Individual Challenges/Challenge 01 Expanding Cards/ExpandingCards";
import image from "../resources/images/Photo.png";
import expandingCards from "../resources/images/Challenges/Expanding Cards.png";
import ProgressSteps from "../components/Challenges/Individual Challenges/Challenge 02 Progress Steps/ProgressSteps";
import progressSteps from "../resources/images/Challenges/Progress Steps.png";
import RotatingNavigation from "../components/Challenges/Individual Challenges/Challenge 03 Rotating Navigation/RotatingNavigation";
import rotatingNavigation from "../resources/images/Challenges/Rotating Navigation.png";
import HiddenSearch from "../components/Challenges/Individual Challenges/Challenge 04 Hidden Search/HiddenSearch";
import hiddenSearch from "../resources/images/Challenges/Hidden Search.png";
import BlurryLoading from "../components/Challenges/Individual Challenges/Challenge 05 Blurry Loading/BlurryLoading";
import blurryLoading from "../resources/images/Challenges/Blurry Loading.png";
import ScrollAnimation from "../components/Challenges/Individual Challenges/Challenge 06 Scroll Animation/ScrollAnimation";

export const challengesData = [
    {id: 0, src:expandingCards, challenge: <ExpandingCards />, title:"Expanding Cards", description: "This challenge involved using dynamic states to allow the user to change the feature image. I achieved this by first mapping each card into the container, then setting active classes using props, useState( ) and ternary operators."},
    {id: 1, src:progressSteps, challenge: <ProgressSteps />, title:"Progress Steps", description: "This challenge required animations to create the effect of moving through the steps. I achieved this using transitions and keyframe animations, along with a switch/case to add classes to active elements. I used useState( ) to keep track of the position and if statements to deactivate the buttons when necessary."},
    {id: 2, src:rotatingNavigation, challenge: <RotatingNavigation />, title:"Rotating Navigation", description: "This challenge used class changes and animations to create the effect of the sidebar moving the article. To do this I used JavaScript to add classes to specific elements, applying the transformations needed. The use of different shapes meant that different transformations were needed for each element to achieve a seamless transition."},
    {id: 3, src:hiddenSearch, challenge: <HiddenSearch />, title:"Hidden Search", description: "This challenge involved a responsive search bar. I completed this by using an input and button, varying the width of the input element. Additionally, the input field automatically focuses to allow the user to type immediately."},
    {id: 4, src:blurryLoading, challenge: <BlurryLoading />, title:"Blurry Loading", description: "This challenge required the use of JavaScript to update an element's CSS properties, as well as displaying the progress to the user. To do this I used setInterval( ) to run a function after a set delay, updating the innerHTML of the percentage, the value of the blur and increasing the counter. Finally, I used clearInterval( ) to stop the counter at 100."},
    {id: 5, src:image, challenge: <ScrollAnimation />, title:"Scroll Animation", description: "This is the challenge description."},
    {id: 6, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 7, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 8, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 9, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 10, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 11, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 12, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 13, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 14, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 15, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 16, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 17, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 18, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 19, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 20, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 21, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 22, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 23, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 24, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 25, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 26, src:image, title:"Challenge Title", description: "This is the challenge description."}
]