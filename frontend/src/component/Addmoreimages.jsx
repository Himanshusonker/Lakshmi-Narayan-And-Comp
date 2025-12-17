// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Addmoreimages=()=>{
    
//     const [mydata, setMydata]=useState([]);
//     const [selectedFile, setSelectedFile]=useState(null);

//     const {id}=useParams();

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         const formData= new FormData();
//         formData.append('file', selectedFile);
//         formData.append('upload_preset', 'zztcuyhj');
//         formData.append('cloud_name', 'duxd8bvkw');
//         const response= await axios.post('https://api.cloudinary.com/v1_1/duxd8bvkw/image/upload', formData);


//         let url="http://localhost:8000/product/changeuploadimage";
//         axios.post(url, {imagepath:response.data.url}).then((res)=>{
//             setSelectedFile(res.data.message);
//             // alert(res.data.message);
//         }) 
//     }

//     const handleFileChange=()=>{
//         setSelectedFile(e.target.files[0]);
//         console.log(e.target.files);
//     }

//     const loadData=()=>{
//         let url="http://localhost:8000/product/uploadimages";
//         axios.get(url).then((res)=>{
//             setMydata(res.data.message);
//             // console.log(res.data);
//         })
//     }

//     const myans=mydata.map((key)=>{
//         return(
//             <> 
//                 <td id="imagestable">
//                      <img src={key.imagepath} id="uploadimages" />
//                      <br/>
//                      Product Name: {key.pname}
//                      <br/>
//                      Product Brand: {key.pbrand}
//                      <br/>
//                      Price: {key.price}
//                      <br/>
//                      <input type="file" onChange={handleFileChange} /><button onClick={handleSubmit}> Upload Image </button>
//                 </td>
            
//             </>
//         );
//     })

//     useEffect(()=>{
//         loadData()
//     },[])
    
//     return(
//         <>
//             <h1> Upload Images </h1>
//             Uplaod Image: 
//                 <table>
//                         <tr>
//                             <th> Featured Products Images </th>
//                         </tr>
                            
//                 </table>
//                 {myans}
//         </>
//     );
// }
// export default Addmoreimages;

