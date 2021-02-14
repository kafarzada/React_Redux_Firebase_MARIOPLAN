const initState = {
    projects: [
        {id: "1", title: "title 1", content: "some content"},
        {id: "2", title: "title 2", content: "some content"},
        {id: "3", title: "title 3", content: "some content"}
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("Create a new project", action.project);
            return {
                ...state,
                projects: [...state.projects, action.project]
            }
        case "CREATE_PROJECT_ERROR":
            console.log("Create project error", action.err)
            return {
                ...state
            }
        default:
            return state
    }
}

export default ProjectReducer