const ROUTES = {
    home: () => "/",
    aboutMe: () => "/aboutMe",
    projectsChallenges: () => "/projectsChallenges",
    projects: () => "/projects",
    projectRoute: (name) => `/projects/${name}`,
    challenges: () => "/challenges",
    challengesRoute: (id) => `/challenges/${id}`,
    contact: () => "/contact",
    teaCozy: () => "/teacozy"
};

export default ROUTES;