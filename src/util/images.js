import adoptAPet from "../resources/images/Adopt A Pet.png";
import appointmentPlanner from "../resources/images/Appointment Planner.png";
import cleethorpesMap from "../resources/images/Cleethorpes Map.png";
import flashcards from "../resources/images/Flashcards.png";
import fotomatic from "../resources/images/Fotomatic Webpage.png";
import jammming from "../resources/images/Jammming Webpage.png";
import myPhoto from "../resources/images/My Photo.png";
import redditMinimal from "../resources/images/Reddit Minimal.png";
import teaCozy from "../resources/images/Tea Cozy Webpage.png";

const imagesForCarousel = [
    {src: redditMinimal, alt: "preview of Reddit Minimal project", link: "https://07cookl-reddit-minimal.netlify.app", title: "Reddit Minimal", description: "This project was designed to encompass all of the skills I have learned so far. It really helped to consolidate my learning of Redux for state management and I'm happy with the results. Click the image to go to the project. "},
    {src: jammming, alt: "preview of Jammming project", link: "https://07cookl.netlify.app", title: "Jammming", description: "This project was a huge learning curve that I thoroughly enjoyed. I created a React app using a Spotify API to search Spotify and to save playlists made on the app to the user's account. Click the image to go to the project. "},
    {src: flashcards, alt: "preview of Flashcards project", link: "https://flashcards-07cookl.netlify.app/", title: "Flashcards React-Redux", description: "This project consolidated my learning on React and linking in Redux, using Redux Toolkit to handle state management for all components and features in the app. Click the image to go to the project. "},
    // {src: fotomatic, alt: "preview of Fotomatic project", link: "./fotomatic"},
    {src: adoptAPet, alt: "preview of Adopt A Pet project", link: "https://codecademy-pet-project.netlify.app/", title: "Adopt A Pet", description: "This project allowed me to practise my React Router skills, enabling me to organise the app's content and create a more engaging and clear user experience. Click the image to go to the project. "},
    {src: appointmentPlanner, alt: "preview of Appointment Planner project", link: "https://appointment-planner-07cookl.netlify.app/contacts", title: "Appointment Planner", description: "This simply-styled project was designed to make use of stateful and stateless functional React components to create an appointment planner app. Click the image to go to the project. "},
    {src: teaCozy, alt: "preview of Tea Cozy project", link: "./teacozy", title: "Tea Cozy", description: "This project further developed my CSS skills and included using CSS Flexbox to create flexible page layouts. Click the image to go to the project. "},
];

export const imageOfMe = {src: myPhoto, alt: "Laurence Cook"};
// {src: cleethorpesMap, alt: "preview of Cleethorpes Map project"},

export default imagesForCarousel;