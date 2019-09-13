import React, { Component } from 'react'
import axios from 'axios'

export class People extends Component {
    state = {
        peoples: []
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/people/')
            .then(res => {
                console.log(res)
                this.setState({
                    peoples: res.data.results.slice(0,5)
                })
            })
    }
    render() {
        const { peoples } = this.state;
        const peopleList = peoples.length ? (
            peoples.map(people => {
                return(
                    <section key={people.id} className="post card">
                        <div className="card-content">
                            <h4>Name: {people.name}</h4>
                            <p><b>Height:</b> {people.height}</p>
                            <p><b>Mass:</b> {people.mass}</p>
                            <p><b>Hair color:</b> {people.hair_color}</p>
                            <p><b>Skin color:</b> {people.skin_color}</p>
                            <p><b>Eye color:</b> {people.eye_color}</p>
                            <p><b>Birth year color:</b> {people.birth_year}</p>
                            <p><b>Gender:</b> {people.gender}</p>
                        </div>
                    </section>
                )
            })
        ) : (
            <div>No post yet</div>
        )
        return (
            <div>
                <h1>Starwars People</h1>
                {peopleList}
            </div>
        )
    }
}

export default People
