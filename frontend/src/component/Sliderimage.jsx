
import { useState } from "react";
import axios from "axios";

const Sliderimage=()=>{

    const [input, setInput]=useState("");
    const [selectedFile, setSelectedFile]=useState(null);
    const [imgUrl, setImgUrl]= useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', 'zztcuyhj');
        formData.append('cloud_name', 'duxd8bvkw');
        const response= await axios.post('https://api.cloudinary.com/v1_1/duxd8bvkw/image/upload', formData);
        console.log('Image uploaded:', response.data);
        console.log('Image uploaded:', response.data.url);
        setImgUrl(response.data.url);
        let imgpath=response.data.url;
        let input2={...input, "imgpath":imgpath};
        console.log(input2);

        const res1= await axios.post('http://localhost:8000/image/sliderimagesave', input2);
    
        if(res1)
        {
            alert("Data Successfully Uploaded");
        }
    }
    
    const handleFileChange=(e)=>{
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files);
    }

    return(
        <>
            <div className="sliderimage">
                <div className="sliderimageformheading"> Update Slider Images </div>
                <div className="uploadimagetextname">
                    Upload Images: <div className="uploadimagetext"><input type="file" onChange={handleFileChange} /></div>
                </div>
                <button className="sliderimagebutton" onClick={handleSubmit}> Upload Images </button>
            </div>
        </>
    )
}
export default Sliderimage;