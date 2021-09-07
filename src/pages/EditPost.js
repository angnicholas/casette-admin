import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { EditPostForm } from "../components/EditPostForm";
import axios from "axios";

function EditPost() {
  const [data, setData] = useState(null)

  let { id } = useParams();
 
  useEffect(() => {  

    axios.get(process.env.REACT_APP_BACKEND_URL+`posts/${id}`)
      .then(response => {
        if(response.status == 200){
          setData({
            posttitle:response.data.post.title,
            published:response.data.post.published
          });          
        }else{
          alert('Couldn`t get post data');
        }
    })
    

  }, [])

  return data ? <EditPostForm preloadedValues={data} /> : <div>Loading...</div>
  //return <div>Yes</div>

}

export default EditPost;