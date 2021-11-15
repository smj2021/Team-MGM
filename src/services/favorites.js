const BASE_URL = 'http://localhost:3001/api/favorites'

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(res => res.json())
}

export {
    deleteOne
}