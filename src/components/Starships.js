import React, { Component } from 'react'
import axios from 'axios'

export class Starships extends Component {
    state = {
        starships: []
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/starships/')
            .then(res => {
                console.log(res)
                this.setState({
                    starships: res.data.results.slice(0,5)
                })
            })
    }
    render() {
        const { starships } = this.state;
        const starshipList = starships.length ? (
            starships.map(starship => {
                return(
                    <section key={starship.id} className="post card">
                        <div className="card-content">
                            <h4>{starship.name}</h4>
                            <h5>{starship.model}</h5>
                            <i>{starship.manufacturer}</i>
                            <p><b>Cost:</b> {starship.cost_in_credits}</p>
                            <p><b>Length:</b> {starship.length}</p>
                            <p><b>Max Atmosphering Speed:</b> {starship.max_atmosphering_speed}</p>
                            <p><b>Crew:</b> {starship.crew}</p>
                        </div>
                    </section>
                )
            })
        ) : (
            <div>No post yet</div>
        )
        return (
            <div>
                <h1>Starwars Starships</h1>
                {starshipList}
            </div>
        )
    }
}

export default Starships
