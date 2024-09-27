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
import scrollAnimation from "../resources/images/Challenges/Scrolling Animation.png";
import SplitLandingPage from "../components/Challenges/Individual Challenges/Challenge 07 Split Landing Page/SplitLandingPage";
import splitLandingPage from "../resources/images/Challenges/Split Landing Page.png";
import FormWave from "../components/Challenges/Individual Challenges/Challenge 08 Form Wave/FormWave";
import formWave from "../resources/images/Challenges/Form Wave.png";
import SoundBoard from "../components/Challenges/Individual Challenges/Challenge 09 Sound Board/SoundBoard";
import soundBoard from "../resources/images/Challenges/Sound Board.png";
import DadJokes from "../components/Challenges/Individual Challenges/Challenge 10 Dad Jokes/DadJokes";
import dadJokes from "../resources/images/Challenges/Dad Jokes.png";
import EventKeycodes from "../components/Challenges/Individual Challenges/Challenge 11 Event Keycodes/EventKeycodes";
import eventKeycodes from "../resources/images/Challenges/Event Keycode.png";
import PropertyButton from "../components/Challenges/Individual Challenges/Challenge 12 Property CSS Button/PropertyButton";

export const challengesData = [
    {id: 0, src:expandingCards, challenge: <ExpandingCards />, title:"Expanding Cards", description: "This challenge involved using dynamic states to allow the user to change the feature image. I achieved this by first mapping each card into the container, then setting active classes using props, useState( ) and ternary operators. The mobile version required major changes to the layout and function, which provoked further thoughts over applying different content to different media."},
    {id: 1, src:progressSteps, challenge: <ProgressSteps />, title:"Progress Steps", description: "This challenge required animations to create the effect of moving through the steps. I achieved this using transitions and keyframe animations, along with a switch/case to add classes to active elements. I used useState( ) to keep track of the position and if statements to deactivate the buttons when necessary."},
    {id: 2, src:rotatingNavigation, challenge: <RotatingNavigation />, title:"Rotating Navigation", description: "This challenge used class changes and animations to create the effect of the sidebar moving the article. To do this I used JavaScript to add classes to specific elements, applying the transformations needed. The use of different shapes meant that different transformations were needed for each element to achieve a seamless transition."},
    {id: 3, src:hiddenSearch, challenge: <HiddenSearch />, title:"Hidden Search", description: "This challenge involved a responsive search bar. I completed this by using an input and button, varying the width of the input element. Additionally, the input field automatically focuses to allow the user to type immediately."},
    {id: 4, src:blurryLoading, challenge: <BlurryLoading />, title:"Blurry Loading", description: "This challenge required the use of JavaScript to update an element's CSS properties, as well as displaying the progress to the user. To do this I used setInterval( ) to run a function after a set delay, updating the innerHTML of the percentage, the value of the blur and increasing the counter. Finally, I used clearInterval( ) to stop the counter at 100."},
    {id: 5, src:scrollAnimation, challenge: <ScrollAnimation />, title:"Scroll Animation", description: "This challenge uses the position of an element to change its properties. I first learned how to locate the position of an element and how to use scroll listeners, then I applied that knowledge to work with multiple elements. Finally, I implemented the useEffect hook to update the page as the user scrolls."},
    {id: 6, src:splitLandingPage, challenge: <SplitLandingPage />, title:"Split Landing Page", description: "This challenge is designed to be a responsive landing page to take the user down one of two routes. To achieve this effect I used hover features to transition the width of the target side. Additionally, I used box-shadow to create the colour overlay for each image."},
    {id: 7, src:formWave, challenge: <FormWave />, title:"Form Wave", description: "This challenge included using inline styles to create the movement effect. Each character for the input fields is in its own <span> tag with an individual transition-delay value. I also used a cubic-bezier curve to achieve the bouncing effect."},
    {id: 8, src:soundBoard, challenge: <SoundBoard />, title:"Sound Board", description: "This challenge required the use of playing audio upon user interaction. I used JavaScript's built in Audio feature inside an onClick handler to achieve this."},
    {id: 9, src:dadJokes, challenge: <DadJokes />, title:"Dad Jokes", description: "This challenge provides the user with comedy gold on every click. The jokes are stored in an array and, using Math.floor( ) and Math.random( ), a random joke is chosen on each button click. You are welcome to use these jokes to impress friends and family."},
    {id: 10, src:eventKeycodes, challenge: <EventKeycodes />, title:"Event Keycodes", description: "This challenge tells users the keycode for whichever key they press. This information is useful for developers who wish trigger actions when certain keys are pressed. To achieve this, I added an event listener to the document to activate on 'keydown' and provide the data for the corresponding key. After testing, I realised mobile users can't type without an input field, so I added one to appear on mobile only."},
    {id: 11, src:eventKeycodes, challenge: <PropertyButton />, title:"Property Button", description: "This challenge uses the CSS @property to explicity define a syntax, initial value and custom properties. Combined with the CSS trick of adding two animations together to slow the rotation effect when hovering, this creates a complex but eye-catching call-to-action feature."},
    // {id: 12, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 13, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 14, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 15, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 16, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 17, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 18, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 19, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 20, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 21, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 22, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 23, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 24, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 25, src:image, title:"Challenge Title", description: "This is the challenge description."},
    // {id: 26, src:image, title:"Challenge Title", description: "This is the challenge description."}
]