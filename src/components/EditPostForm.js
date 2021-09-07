import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import QuillEditor from "../components/editor/QuillEditor";
import AlertDialog from "./Dialog";
import axios from "axios";

const BACKEND_URL = 'https://real-blog-backend.herokuapp.com/';

const FILE_UPLOAD_LOCATION = BACKEND_URL+'uploadfiles';

export const EditPostForm = ({preloadedValues}) => {

  const [text, setText] = useState("");
  const [title, setTitle] = useState(preloadedValues.posttitle);
  const [coverImage, setCoverImage] = useState(null);
  const [published, setPublished] = useState(preloadedValues.published);

  let { id } = useParams();

  console.log("The preloaded values are", preloadedValues);

  console.log("The data to be posted is", text, title, published)

  const { register, handleSubmit } = useForm({
    defaultValues: preloadedValues
  });


  let history = useHistory();
  

  console.log("Id has been set?", id);

  const onSubmit = (event) => {

    console.log("submitting....");

    event.preventDefault(); //This prevents default behaviour of pressing submit: The page refreshing without saving!

    const sendDataToServer = (coverImage)=>{

      const currentUsername = localStorage.getItem("currentUsername");
      const token = localStorage.getItem("token");
      const bearer = `Bearer ${token}`;
      
      
      const realFormData = coverImage ? JSON.stringify({
        title,
        text,
        author_name:currentUsername, //IN future patches change to userinfo.displayname
        published,
        cover_image_url: coverImage
      }) : JSON.stringify({
        title,
        text,
        author_name:currentUsername, //IN future patches change to userinfo.displayname
        published
      });

      //console.log(realFormData);

      try {
        const req = fetch(
          BACKEND_URL+`posts/${id}`,
          {
            method: "PUT",
            body: realFormData,
            headers: {
              Authorization: bearer,
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          
          console.log(res);

          if(res.status == 200){
            setText("");//reset values
            setTitle("");

            history.push("/posts"); //Redirect back to post listing
          
          } else{
            
            alert("Failed to upload, please try again!");
          }

        }).catch((err) => {
          console.log("there is an error!", err.json());
        })      
      } catch (err) {console.log(err);}
    }

    //Only if user wants to upload a cover image then we do the upload.
    if(coverImage){

      //Prepare the cover image for upload.

      let imageFormData = new FormData();
      imageFormData.append("file", coverImage);

      const config = {
        header: { 'content-type': 'multipart/form-data' }
      }

      //Try to post the cover image and get back the URL as a response.
      axios.post(FILE_UPLOAD_LOCATION, imageFormData, config)
        .then(res => {
          if(res.data.success) { //URL is stored in res.data.url
            sendDataToServer(res.data.url);
          }else{ //file didn't upload
            sendDataToServer('uploads/default.webp');
          }
      }).catch(err => {
        sendDataToServer('uploads/default.webp');
      });


    }else{
      sendDataToServer(false);
    }


    
  };

  const suckMyTits = (e) => {
    console.log(e);
  }

  const handleTitleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  }

  const onEditorChange = (value) =>{
    setText(value);
    //console.log(value);
  }

  const onFilesChange = (value) => {
    //console.log(value);
  }

  const onCheckboxChange = (e) => {
    console.log(e.currentTarget.checked);
    setPublished(e.currentTarget.checked);
    //console.log(published);
  }

  const coverImageChange = (e) => {
    console.log(e.currentTarget.files[0]);
    setCoverImage(e.currentTarget.files[0]);
  }

  return (
    <div className="layout">

    <form>
        <div>
          <label>My Title</label><br />
          {/* value={title} onChange = {(e)=>setTitle(e.target.value)}  */}
          <input ref={register} placeholder="My Title" name="posttitle" onChange={handleTitleChange}fontSize='2em' type='text'/> <br /><br />
        </div>

        <div>
          <label>Publish to the web</label>
          <input ref={register} checked={published} name="published" className='mycheckbox' type='checkbox'
				onChange={onCheckboxChange} />
        </div>

        <div>
          {/* <label>Edit the cover image</label><br />
          
          <input type="radio" id="CIS1" name="coverImageSelector"></input>
          <label for="CIS1">Use the existing cover image</label><br />
          
          <input type="radio" id="CIS2" name="coverImageSelector"></input>
          <label for="CIS2">Use the default image</label><br />

          <input type="radio" id="CIS3" name="coverImageSelector"></input>
          <label for="CIS3">Choose a new file: <input type="file" onChange={coverImageChange}></input></label>
           */}
          Choose a new cover image: <input type="file" onChange={coverImageChange}></input>
          
        </div><br />

        <QuillEditor
                
          placeholder={"Start Posting Something"}
          modules={{
            toolbar:[['bold', 'italic'], ['link', 'image']]
          }}
          onEditorChange={onEditorChange}
          onFilesChange={onFilesChange}
          fetchid={id}
          
        />

        <div style={{ textAlign: 'center', margin: '2rem', }}>
          <Button onClick={onSubmit} color="primary">Save Post</Button>
        </div>

        <div style={{ textAlign: 'center', margin: '2rem', }}>
          <AlertDialog deleteid={id}/>
        </div>

      </form>
    </div>
  );
};

