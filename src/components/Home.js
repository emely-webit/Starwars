import React, { Component } from 'react'
import axios from 'axios'

export class Home extends Component {
    state = {
        films: []
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/films/')
            .then(res => {
                console.log(res)
                this.setState({
                    films: res.data.results.slice(0,5)
                })
            })
    }
    render() {
        const { films } = this.state;
        const filmList = films.length ? (
            films.map(film => {
                return(
                    <section key={film.id} className="post card">
                        <div className="card-content">
                            <h4>{film.title} {film.episode_id}</h4>
                            <i>{film.opening_crawl}</i>
                            <p><b>Release date:</b> {film.release_date}</p>
                            <p><b>Producer:</b> {film.producer}</p>
                        </div>
                    </section>
                )
            })
        ) : (
            <div>No post yet</div>
        )
        return (
            <div>
                <h1>Starwars Films</h1>
                {filmList}
            </div>
        )
    }
}

export default Home
