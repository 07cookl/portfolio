import ExpandingCards from "../components/Challenges/Individual Challenges/Challenge 01 Expanding Cards/ExpandingCards";
import image from "../resources/images/Photo.png";
import expandingCards from "../resources/images/Challenges/Expanding Cards.png";
import ProgressSteps from "../components/Challenges/Individual Challenges/Challenge 02 Progress Steps/ProgressSteps";
import progressSteps from "../resources/images/Challenges/Progress Steps.png";

export const challengesData = [
    {id: 0, src:expandingCards, challenge: <ExpandingCards />, title:"Expanding Cards", description: "This challenge involved using dynamic states to allow the user to change the feature image. I achieved this by first mapping each card into the container, then setting active classes using props, useState( ) and ternary operators."},
    {id: 1, src:progressSteps, challenge: <ProgressSteps />, title:"Progress Steps", description: "This challenge required animations to create the effect of moving through the steps. I achieved this using transitions and keyframe animations, along with a switch/case to add classes to active elements. I used useState( ) to keep track of the position and if statements to deactivate the buttons when necessary."},
    {id: 2, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 3, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 4, src:image, title:"Challenge Title", description: "This is the challenge description."},
    {id: 5, src:image, title:"Challenge Title", description: "This is the challenge description."},
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