import React, { Component } from 'react'
import axios from 'axios'

export class Planets extends Component {
    state = {
        planets: []
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/planets/')
            .then(res => {
                console.log(res)
                this.setState({
                    planets: res.data.results.slice(0,5)
                })
            })
    }
    render() {
        const { planets } = this.state;
        const planetList = planets.length ? (
            planets.map(planet => {
                return(
                    <section key={planet.id} className="post card">
                        <div className="card-content">
                            <h4>Name: {planet.name}</h4>
                            <p><b>Rotation Periode:</b> {planet.rotation_period}</p>
                            <p><b>Diameter:</b> {planet.diameter}</p>
                            <p><b>Climate:</b> {planet.climate}</p>
                            <p><b>Population:</b> {planet.population}</p>
                        </div>
                    </section>
                )
            })
        ) : (
            <div>No post yet</div>
        )
        return (
            <div>
                <h1>Starwars Planets</h1>
                {planetList}
            </div>
        )
    }
}

export default Planets
