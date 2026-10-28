import React from 'react';
import { ScrollView } from 'react-native';
import Movie from './components/Movie';

class AllMovies extends React.Component {
    render(){
        return(
            <ScrollView>
                <Movie title={'Doctor Sleep'} year={2019} icon_name={"skull"} icon_color={"black"} poster={require("./img/doctor-sleep.jpg")}/>
                <Movie title={'Midway'} year={2019} icon_name={"person-rifle"} icon_color={"grey"} poster={require("./img/midway.jpg")} />
                <Movie title={'The Monkey'} year={2025} icon_name={"linux"} icon_color={"red"} poster={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQez442ozwpLB-b2NwbxiFI68DWXREo_alKqKGjnq7jHA&s=10'}} />
            </ScrollView>


        )
    }
}

export default AllMovies;


