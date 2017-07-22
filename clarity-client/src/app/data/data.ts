/**
 * Created by pkamat on 7/21/2017.
 */
import {Injectable} from "@angular/core";


@Injectable()
export class Data {

    projects = [{name:"", owner: "", image: "", description:"", team: [], max_team_size:5, collaboration_tools:[]},
        {name:"", owner: "", image: "", description:"", team: [], max_team_size:5, collaboration_tools:[]},
        {name:"", owner: "", image: "", description:"", team: [], max_team_size:5, collaboration_tools:[]},
        {name:"", owner: "", image: "", description:"", team: [], max_team_size:5, collaboration_tools:[]},
        {name:"", owner: "", image: "", description:"", team: [], max_team_size:5, collaboration_tools:[]},
        {name:"", owner: "", image: "", description:"", team: [], max_team_size:5, collaboration_tools:[]}];

    users = [
        {
            username: "maryann",
            password: "1234",
            gender: "female",
            nationality: "American",
            age: "40",
            programming_languges: ["Jave", "C++", "Python"],
            interests: ["Artificial Intelligence", "Machine Learning"],
            expertise: "Intermediate",
            completed_projects: [],
            starred_projects: [],
            on_going_projects: []
        }
    ]

}
