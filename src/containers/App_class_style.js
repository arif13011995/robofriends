import React, {Component, useState} from "react";
import CardList from "../components/CardList";
// import { robots } from "../robots";
import Scroll from '../components/Scroll';
import SearchBox from "../components/SearchBox";



class App extends Component{
    constructor() {
        super()
        this.state = {
        robots: [],
        searchFields : ''
        }
    };

    // const [searchFields, setSearchFields] = useState('');

    onSearchChange = (event) => {
        this.setState({searchFields: event.target.value});
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>this.setState({robots: users}))
    }

    render() {
        const {robots, searchFields} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchFields.toLocaleLowerCase());
        })
        return (
            <div className="tc">
                <h1>Robots Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList  robots = {filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;