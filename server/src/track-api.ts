import { RESTDataSource } from "@apollo/datasource-rest";
import { getNamedType } from "graphql";

export class TrackAPI extends RESTDataSource{
    baseURL?: "https://odyssey-lift-off-rest-api.herokuapp.com/"

    getTracksForHome(){
        return this.get('track')
    }

    getAuthor(authorId: string){
        return this.get(`author/${authorId}`)
    }
}
