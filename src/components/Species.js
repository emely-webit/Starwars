import React, { Component } from 'react'
import axios from 'axios'
import Starwars_img from '../starwars_logo.png'

export class Species extends Component {
    state = {
        species: []
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/species/')
            .then(res => {
                console.log(res)
                this.setState({
                    species: res.data.results.slice(0,5)
                })
            })
    }
    render() {
        const { species } = this.state;
        const specieList = species.length ? (
            species.map(specie => {
                return(
                    <section key={specie.id} className="post card">
                    <img src={Starwars_img} alt="starwars logo"></img>
                        <div className="card-content">
                            <h4>{specie.name}</h4>
                            <h5>Classification: {specie.classification}</h5>
                            <i>{specie.designation}</i>
                            <p><b>Height:</b> {specie.average_height}</p>
                            <p><b>Designation:</b> {specie.designation}</p>
                            <p><b>Skin Colors:</b> {specie.skin_colors}</p>
                            <p><b>Hair Colors:</b> {specie.hair_colors}</p>
                            <p><b>Eye Colors:</b> {specie.eye_colors}</p>
                        </div>
                    </section>
                )
            })
        ) : (
            <div>No post yet</div>
        )
        return (
            <div>
                <h1>Starwars Species</h1>
                {specieList}
            </div>
        )
    }
}

export default Species
