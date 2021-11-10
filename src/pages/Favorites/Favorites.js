import React, { Component } from 'react';

class Favorites extends Component {
    state = {
        profile: {}
    }

    componentDidMount() {
        // it's port 3001 because that's the port our server is listening to
        fetch('http://localhost:3001/api/favorites', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    profile: json
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
                {this.state.profile.favorites && this.state.profile.favorites.map((favorite, idx) => {
                    return <p key={idx}>{favorite.id}</p>
                })}
            </div>
        );
    }
}

export default Favorites;