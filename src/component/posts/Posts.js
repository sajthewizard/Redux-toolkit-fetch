import React, { useEffect } from 'react';


import {useSelector,useDispatch} from "react-redux";
import { fetchPosts } from './postsSlice';



const Posts = () => {

    const {error,isLoading,posts}=useSelector((state)=>state.posts)

    const dispatch=useDispatch()
    
    
    useEffect(() => {
        dispatch(fetchPosts())
    
    }, [])
    
   
    return (
        <div>
           {isLoading && <h1> {error}</h1>}
            {error && <h1> {error}</h1>}
           <section>
           {posts && posts.map((post)=>{
                return <article>
                    <h1>{post.title}</h1>
                    <h5>{post.body}</h5>
                </article>

            })}
           </section>




        </div>
    );
};

export default Posts;