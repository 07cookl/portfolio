import adoptAPetImg from "../resources/images/Projects/AdoptAPet/Adopt A Pet.png";
import appointmentPlannerImg from "../resources/images/Projects/Appointment Planner/Appointment Planner.png";
import flashcardsImg from "../resources/images/Projects/Flashcards/Flashcards Topics.png";
import jammmingImg from "../resources/images/Projects/Jammming/Jammming Homepage.png";
import myPhoto from "../resources/images/My Photo.png";
import redditMinimalImg from "../resources/images/Projects/Reddit Minimal/Reddit Minimal.png";
import teaCozyImg from "../resources/images/Projects/Tea Cozy/Tea Cozy Webpage.png";
import dbdportfolioImg from "../resources/images/Projects/dbdportfolio/dbdportfolio cover.png";
import eCommerceAppImg from "../resources/images/Projects/e-commerce-app/e-commerce-app login.png";
import AdoptAPet from "../components/Projects/Individual Projects/AdoptAPet/AdoptAPet";
import AppointmentPlanner from "../components/Projects/Individual Projects/AppointmentPlanner/AppointmentPlanner";
import DBDPortfolio from "../components/Projects/Individual Projects/dbdportfolio/dbdportfolio";
import ECommerceApp from "../components/Projects/Individual Projects/e-commerce-app/e-commerce-app";
import Flashcards from "../components/Projects/Individual Projects/Flashcards/Flashcards";
import Jammming from "../components/Projects/Individual Projects/Jammming/Jammming";
import RedditMinimal from "../components/Projects/Individual Projects/Reddit Minimal/RedditMinimal";
import TeaCozy from "../components/TeaCozy/TeaCozy";
import eCommerceCheckout from "../resources/images/Projects/e-commerce-app/e-commerce-app checkout.png";
import eCommercePayment from "../resources/images/Projects/e-commerce-app/e-commerce-app payment page.png";
import redditMinimalComments from "../resources/images/Projects/Reddit Minimal/Reddit Minimal Comments.png";
import redditMinimalDropdown from "../resources/images/Projects/Reddit Minimal/Reddit Minimal Dropdown.png";
import jammmingPopulated from "../resources/images/Projects/Jammming/Jammming Populated.png";
import jammmingSpotify from "../resources/images/Projects/Jammming/Jammming Spotify Playlist.png";
import dbdPortfolioLongHomepage from "../resources/images/Projects/dbdportfolio/dbdportfolio full homepage.png";
import dbdPortfolioFigma from "../resources/images/Projects/dbdportfolio/dbdportfolio figma.png";
import dbdPortfolioMobile from "../resources/images/Projects/dbdportfolio/dbdportfolio mobile hover.png";
import dbdPortfolioWork from "../resources/images/Projects/dbdportfolio/dbdportfolio work carousel.png";
import flashcardsNewQuiz from "../resources/images/Projects/Flashcards/Flashcards New Quiz.png";
import flashcardsQuiz from "../resources/images/Projects/Flashcards/Flashcards Quiz.png";
import teaCozyFull from "../resources/images/Projects/Tea Cozy/TeaCozy Full Page.png";

export const projectsData = [
    {src: eCommerceAppImg, project: <ECommerceApp />, alt: "preview of e-commerce-app project", title: "e-commerce-app"},
    {src: dbdportfolioImg, project: <DBDPortfolio />, alt: "preview of DBDPortfolio project", title: "DBDPortfolio"},
    {src: redditMinimalImg, project: <RedditMinimal />, alt: "preview of Reddit Minimal project", link: "https://07cookl-reddit-minimal.netlify.app", title: "Reddit Minimal",},
    {src: jammmingImg, project: <Jammming />, alt: "preview of Jammming project", link: "https://07cookl.netlify.app", title: "Jammming",},
    {src: flashcardsImg, project: <Flashcards />, alt: "preview of Flashcards project", link: "https://flashcards-07cookl.netlify.app/", title: "Flashcards", },
    {src: appointmentPlannerImg, project: <AppointmentPlanner />, alt: "preview of Appointment Planner project", link: "https://appointment-planner-07cookl.netlify.app/", title: "Appointment Planner",},
    {src: adoptAPetImg, project: <AdoptAPet />, alt: "preview of Adopt A Pet project", link: "https://codecademy-pet-project.netlify.app/", title: "Adopt A Pet",},
    {src: teaCozyImg, project: <TeaCozy />, alt: "preview of Tea Cozy project", link: "/teacozy", title: "Tea Cozy",},
];

export const imageOfMe = {src: myPhoto, alt: "Laurence Cook"};

export const eCommerceImages = [
    eCommerceAppImg,
    eCommerceCheckout,
    eCommercePayment
];

export const redditMinimalImages = [
    redditMinimalImg,
    redditMinimalComments,
    redditMinimalDropdown
];

export const jammmingImages = [
    jammmingImg,
    jammmingPopulated,
    jammmingSpotify
];

export const dbdPortfolioImages = [
    dbdportfolioImg,
    dbdPortfolioFigma,
    dbdPortfolioLongHomepage,
    dbdPortfolioMobile,
    dbdPortfolioWork
];

export const flashcardsImages = [
    flashcardsImg,
    flashcardsNewQuiz,
    flashcardsQuiz
];

export const appointmentPlannerImages = appointmentPlannerImg;

export const adoptAPetImages = adoptAPetImg;

export const teaCozyImages = [
    teaCozyImg,
    teaCozyFull
];