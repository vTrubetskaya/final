import { observer } from "mobx-react-lite";
import { useEffect } from "react"
import { BlogItem } from "./components/BlogItem";
import blogStore from "./store/BlogStore"
import { Spin } from 'antd';
import React from 'react';

export const Blog = observer(() => {

    const {posts, loadPosts, loading} = blogStore;

    useEffect(()=>{
        loadPosts();
    }, [])

    return (
        <div className="container">
            <p className="blog__info">You've probably spent weeks—okay, months—counting down the days until it became socially acceptable to do all those Christmas activities and winter activities you love so much: putting up your favorite wreath, shopping for fun gifts until you drop, making lots of holiday craft projects, and generally getting in the Christmas spirit in every way imaginable. Now that your favorite time of the year is finally here, don't squander it! Make the most of your holiday season with our list of the best Christmas activities for kids and grown-ups alike. We've gone way beyond "prep your holiday menu" and "decorate your home."</p>
            {loading && <div className="loader">
                            <Spin />
                        </div>}
            {!loading && posts.map((post) => 
                                        <BlogItem 
                                            key={post.id} 
                                            post={post} 
                                        />)}
        </div>      
    )
})
