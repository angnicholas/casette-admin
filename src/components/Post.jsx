import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AlertDialog from "./Dialog";
const { DateTime } = require("luxon");

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const Post = ({ post }) => {
  let match = useRouteMatch();
  return (
    <Card
      style={{
        width: "18rem",
        padding: "30px",
        borderRadius: "20px",
        maxHeight: "410px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "flex",
        justifyContent: "center"
        
      }}
    >
      <Card.Title>{post.title}</Card.Title>
      <p><i>Written by {post.author_name}</i></p>

      <p>Created on {DateTime.fromISO(post.date_created).toLocaleString(DateTime.DATE_MED)}</p>
      <p>Edited on {DateTime.fromISO(post.date_modified).toLocaleString(DateTime.DATE_MED)}</p>
      
      <div className="choicebuttons">
        <Button variant="link">
          <a target="_blank" href={`${PUBLIC_URL}posts/${post._id}`}>View Live</a>
        </Button>
        <Button variant="link">
          <Link to={`${match.url}/${post._id}`}>Edit Post</Link>
        </Button>
        <AlertDialog deleteid={post._id}></AlertDialog>
      </div>
      
      
      <Card.Body>{post.text} </Card.Body>
    </Card>
  );
};

export default Post;
