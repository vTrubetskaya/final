import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { PostStore } from "./store/PostStore";
import { Spin } from 'antd';
import React from 'react';

export const Post = observer(() => {

    const {id} = useParams();       
    const navigate = useNavigate();    
    const [postStore] = useState(new PostStore());
    const { loadPost, post, loading } = postStore;

    useEffect(() => {
        loadPost(id)
    }, []);

    const goBack = () => {
        navigate('../blog'); 
    }

    return( 
        <>
        {loading && <div className="loader">
                        <Spin />
                    </div>}
            {!loading && post.id && 
            <div className="container">
                <button className="goBack" onClick={goBack}>&#8592;  Back to Blog</button>
                <h1 className="post__title">{post.title}</h1>
                <div className="post__info">
                    <div className="post__imgs">
                        <img className="post__img" src={post.imgs[1]} alt={post.title} />
                        <img className="post__img" src={post.imgs[2]} alt={post.title} />
                    </div>
                    <p className="post__content">{post.info}</p>
                </div>
            </div>
            }
        </>)
})

