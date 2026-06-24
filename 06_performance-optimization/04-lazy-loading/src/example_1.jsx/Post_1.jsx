import React, { useState, useEffect } from 'react'


const Post_1 = () => {

    const [posts, setPosts] = useState([])


    // Fetch posts after component loads
    useEffect(() => {

        const fetchPosts = async () => {

            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            )

            const data = await response.json()

            setPosts(data)
        }


        fetchPosts()

    }, [])



    return (
        <div>

            <h1>Posts</h1>


            {/* Display fetched posts */}
            <ul>

                {posts.map((post) => (

                    <li key={post.id}>

                        <h3>{post.title}</h3>

                        <p>{post.body}</p>

                    </li>

                ))}

            </ul>

        </div>
    )
}


export default Post_1