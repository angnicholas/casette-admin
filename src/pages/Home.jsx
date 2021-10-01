import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import TabularListing from "../components/TabularListing";
import axios from "axios";

const Home = () => {

  const [posts, setPosts] = useState();

  //Retrieves the fullset of posts, including drafts, if authenticated.
  useEffect(() => {

    const token = localStorage.getItem("token");
    const bearer = `Bearer ${token}`;

    const getPosts = async () => {

      try {
        axios.get(process.env.REACT_APP_BACKEND_URL + "allposts", {
          headers:{
            Authorization: bearer,
          }
        }).then((response) => {
          setPosts(response.data.posts);

        }).catch((err) => {
          console.log(err);
        });

      } catch (err) {}
    };

    getPosts();

  }, []);
  
  return (

    posts ? <TabularListing posts={posts} /> : <div>Loading...</div>

  );
};

export default Home;
