import adoptAPet from "../resources/images/Compressed/Adopt A Pet.png";
import appointmentPlanner from "../resources/images/Compressed/Appointment Planner.png";
import flashcards from "../resources/images/Compressed/Flashcards.png";
import jammming from "../resources/images/Compressed/Jammming Webpage.png";
import myPhoto from "../resources/images/Compressed/My Photo.png";
import redditMinimal from "../resources/images/Compressed/Reddit Minimal.png";
import teaCozy from "../resources/images/Compressed/Tea Cozy Webpage.png";

const imagesForCarousel = [
    {src: redditMinimal, alt: "preview of Reddit Minimal project", link: "https://07cookl-reddit-minimal.netlify.app", title: "Reddit Minimal",
    description: "This project is a Reddit client app that allows users to browse reddit. Click the image to go to the project.\n\nThis project was designed to encompass all of the skills I had learned up to this point. The key skills required included making API calls and using Redux for state management.\n\nThe public Reddit API limits users to 10 calls per minute so I had to ensure that requests for posts/comments were made in a limited way to avoid breaking the app.\n\nThe use of Redux was new when I completed this project and provided a steep learning curve. I thoroughly enjoyed puzzling my way through the project, ensuring the Redux Store was used effectively throughout the app.\n\nOne particular challenge when making this app came from the Reddit data. Each post can store the data differently which made reusable code feel more difficult to write. I spent a lot of time comparing the objects the data arrived in and refining my code to make it as efficient as I could.\n\nThis project was a huge undertaking, presenting many opportunities to learn, and I am proud of my efforts."},
    {src: jammming, alt: "preview of Jammming project", link: "https://07cookl.netlify.app", title: "Jammming",
    description: "This project allows users to search Spotify, create and name a custom playlist and save it to their Spotify. Click the image to go to the project.\n\nThe use of APIs and OAuth requests were new to me at this point. It took a lot of work to fully research and understand these processes. The project was a massive jump from the lessons that had come before it, so I was thrilled when the app was fully functional and my hard work had paid off.\n\nThe appearance of the app was designed by a friend of mine using Figma. I really enjoyed the experience of collaborating with a designer and styling my app from the specification on Figma."},
    {src: flashcards, alt: "preview of Flashcards project", link: "https://flashcards-07cookl.netlify.app/", title: "Flashcards React-Redux", 
    description: "This project allows users to create multiple topics then sets of flashcards for those topics. Click the image to go to the project.\n\nWorking on this project consolidated my learning on React and linking in Redux, using Redux Toolkit to handle state management for all components and features in the app.\n\nI was also able to work on React Router with this project, including working with the useParams( ) feature. I have taken this knowledge and applied it to my portfolio, particularly on the Challenges section."},
    {src: adoptAPet, alt: "preview of Adopt A Pet project", link: "https://codecademy-pet-project.netlify.app/", title: "Adopt A Pet",
    description: "This project was direct from Codecademy, designed to be a pet adoption website. Click the image to go to the project.\n\nWorking on this project allowed me to practise my React Router skills, enabling me to organise the app's content and create a more engaging and clear user experience on a Single Page Application. I have applied this React Router knowledge to my portfolio as I like how SPAs do not require refreshing or additional server requests to re-load the content."},
    {src: appointmentPlanner, alt: "preview of Appointment Planner project", link: "https://appointment-planner-07cookl.netlify.app/", title: "Appointment Planner",
    description: "This was an early project in my lessons designed to make use of stateful and stateless functional React components to create an appointment planner app. Click the image to go to the project. "},
    {src: teaCozy, alt: "preview of Tea Cozy project", link: "./teacozy", title: "Tea Cozy",
    description: "This was my first project for Codecademy. The purpose was to further developed my CSS skills and included using CSS Flexbox to create flexible page layouts. Click the image to go to the project."},
];

export const imageOfMe = {src: myPhoto, alt: "Laurence Cook"};

export default imagesForCarousel;