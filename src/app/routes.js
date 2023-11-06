const ROUTES = {
    home: () => "/",
    aboutMe: () => "/aboutMe",
    projects: () => "/projects",
    challenges: () => "/challenges",
    challengesRoute: (id) => `/challenges/${id}`,
    contact: () => "/contact",
    teaCozy: () => "/teacozy"
};

export default ROUTES;