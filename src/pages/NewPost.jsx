import { useState, useEffect, React } from "react";
import { useHistory, withRouter } from "react-router-dom";
import QuillEditor from "../components/editor/QuillEditor";
import axios from "axios";

const FILE_UPLOAD_LOCATION = process.env.REACT_APP_BACKEND_URL+'uploadfiles';

const NewPost = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [published, setPublished] = useState(false);

  let history = useHistory();

  useEffect(()=>{
     console.log(published)
  })

  const onSubmit = (event) => {

    event.preventDefault(); //This prevents default behaviour of pressing submit: The page refreshing without saving!
    
    //Method to POST data to the server.
    const sendDataToServer = async (coverImage) => {
      
      const currentDisplayName = localStorage.getItem("currentDisplayName");
      const token = localStorage.getItem("token");
      const bearer = `Bearer ${token}`;

      const realFormData = JSON.stringify({
        title,
        text,
        author_name:currentDisplayName, //IN future patches change to userinfo.displayname
        published,
        cover_image_url: coverImage ? coverImage : '' //URL for the cover Image
      });

      try {        
        const req = await fetch(      

          process.env.REACT_APP_BACKEND_URL+'posts/',
          {
            method: "post",
            body: realFormData,
            headers: {
              Authorization: bearer,
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          console.log(res);

          if(res.status === 200){
            setText("");//reset values
            setTitle("");
            history.push("/posts"); //Redirect back to post listing          
          } else{
            alert("Failed to upload, please try again!");
          }

        }).catch((err) => {
          console.log(err);
        });      
      } catch (err) {
        console.log(err);
      }
    }

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
      console.log(err);
      sendDataToServer('uploads/default.webp');
    });

  }

  const onEditorChange = (value) =>{
    setText(value);
  }

  const onFilesChange = (value) => {
    //console.log(value);
  }

  const onCheckboxChange = (e) => {
    setPublished(e.currentTarget.checked);
    //console.log(published);
  }

  const coverImageChange = (e) => {
    setCoverImage(e.currentTarget.files[0]);
  }



  return (
    <div>

      <form onSubmit={onSubmit}>
        <div>
          <label>My Title</label><br />
          <input fontSize='2em' type='text' placeholder='Title' value={title} onChange = {(e)=>setTitle(e.target.value)} /> <br /><br />
        </div>

        <div>
          <label>Publish to the web</label>
          <input className='mycheckbox' type='checkbox'
				onChange={onCheckboxChange} />
        </div>

        <div>
          <label>Add in a cover image (Recommended size: X by Y)</label>
          <input type="file" onChange={coverImageChange}></input>
        </div>

        <QuillEditor
          placeholder={"Start Posting Something"}
          modules={{
            toolbar:[['bold', 'italic'], ['link', 'image']]
          }}
          onEditorChange={onEditorChange}
          onFilesChange={onFilesChange}
        />

        <div style={{ textAlign: 'center', margin: '2rem', }}>
          <button
            size="large"
            htmltype="submit"
            className=""
          >
            Submit
                </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(NewPost);
