import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import SearchBox from "../components/SearchBox";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";

const App = () => {
    const [searchFields, setSearchFields] = useState('');
    const [robots, setRobots] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>setRobots(users))
        // console.log("useEffect", []);  
    })

    const onSearchChange = (event) => {
        setSearchFields(event.target.value);   
    }

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchFields.toLocaleLowerCase()));
        // console.log("render");
    
    if(!robots.length) {
        return(
            <h1>Loading</h1>
        )
    }else{
            return (
            <div className="tc">
                <h1 className="f1">Robots Friends</h1>
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList  robots = {filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
        
}


export default App;