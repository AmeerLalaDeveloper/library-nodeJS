import { FETCH_BOOKS, BOOK } from "./types";


export const fetchBooks = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(posts =>
        dispatch({
            type: FETCH_BOOKS,
            payload: posts
        }))
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then(res => res.json()).then(post =>
        dispatch({
            type: BOOK,
            payload: post
        }))
}
