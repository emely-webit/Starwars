import React, { Component } from 'react'
import axios from 'axios'

export class Vehicles extends Component {
    state = {
        vehicles: []
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/vehicles/')
            .then(res => {
                console.log(res)
                this.setState({
                    vehicles: res.data.results.slice(0,5)
                })
            })
    }
    render() {
        const { vehicles } = this.state;
        const vehicleList = vehicles.length ? (
            vehicles.map(vehicle => {
                return(
                    <section key={vehicle.id} className="post card">
                        <div className="card-content">
                            <h4>{vehicle.name}</h4>
                            <h5>{vehicle.model}</h5>
                            <i>{vehicle.manufacturer}</i>
                            <p><b>Cost:</b> {vehicle.cost_in_credits}</p>
                            <p><b>Length:</b> {vehicle.length}</p>
                        </div>
                    </section>
                )
            })
        ) : (
            <div>No post yet</div>
        )
        return (
            <div>
                <h1>Starwars Vehicles</h1>
                {vehicleList}
            </div>
        )
    }
}

export default Vehicles
