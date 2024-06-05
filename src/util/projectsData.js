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

export const projectsData = [
    {src: redditMinimalImg, project: <RedditMinimal />, alt: "preview of Reddit Minimal project", link: "https://07cookl-reddit-minimal.netlify.app", title: "Reddit Minimal",},
    {src: jammmingImg, project: <Jammming />, alt: "preview of Jammming project", link: "https://07cookl.netlify.app", title: "Jammming",},
    {src: flashcardsImg, project: <Flashcards />, alt: "preview of Flashcards project", link: "https://flashcards-07cookl.netlify.app/", title: "Flashcards", },
    {src: adoptAPetImg, project: <AdoptAPet />, alt: "preview of Adopt A Pet project", link: "https://codecademy-pet-project.netlify.app/", title: "Adopt A Pet",},
    {src: appointmentPlannerImg, project: <AppointmentPlanner />, alt: "preview of Appointment Planner project", link: "https://appointment-planner-07cookl.netlify.app/", title: "Appointment Planner",},
    {src: teaCozyImg, project: <TeaCozy />, alt: "preview of Tea Cozy project", link: "/teacozy", title: "Tea Cozy",},
    {src: dbdportfolioImg, project: <DBDPortfolio />, alt: "preview of DBDPortfolio project", title: "DBDPortfolio"},
    {src: eCommerceAppImg, project: <ECommerceApp />, alt: "preview of e-commerce-app project", title: "e-commerce-app"},
];

export const imageOfMe = {src: myPhoto, alt: "Laurence Cook"};