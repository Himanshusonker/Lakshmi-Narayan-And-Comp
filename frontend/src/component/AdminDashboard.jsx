import { useState } from "react";
import axios from "axios";

const AdminDashboard=()=>{
    
    const [input, setInput]=useState({});
    const [selectedFile]=useState(null);
    const [imgUrl, setImgUrl]= useState("");

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input);
    }

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
        
        const res1= await axios.post('http://localhost:8000/product/productdatasave', input2);
    
        if(res1)
        {
            alert("Data Successfully Uploaded");
        }

        let url="http://localhost:8000/product/productdatasave";
        axios.post(url, {  pname, pbrand, description, price  }).then((res)=>{
            alert(res.data.message);
            // console.log(input);
        })
    }
    
    const handleFileChange=(e)=>{
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files);
    }
    
    return(
        <>
                
{/* ================================================== Upload Details =========================================== */}



                
                
                
                
                
                <div >
                        
                                <div className="adminuploaddetail">
                                    <h1 className="uplaoddetailheadingdashboard"> Upload Detail </h1>

                                    <div className="adminuploaddetailheading"> Product Name </div>
                                    <input className="inputuploaddetail" type="text" name="pname" value={input.pname} onChange={handleInput} required maxLength="40"/>

                                    <div className="adminuploaddetailheading"> Product Brand </div>
                                    <input className="inputuploaddetail" type="text" name="pbrand" value={input.pbrand} onChange={handleInput} required maxLength="40"/>

                                    <div className="adminuploaddetailheading"> Description </div>
                                    <input className="inputuploaddetail" type="text" name="description" value={input.description} onChange={handleInput} required maxLength="40"/>

                                    <div className="adminuploaddetailheading"> Category </div>
                                    <select className="inputuploaddetail" name="category" value={input.category} onChange={handleInput}>
                                        <option></option>
                                        <option value="Male"> Male </option>
                                        <option value="Female"> Female </option>
                                        <option value="Kids"> Kids </option>
                                        <option value="others"> Others </option>
                                    </select>

                                    <div className="adminuploaddetailheading"> Sub Category </div>
                                    
                                    <select className="inputuploaddetail" name="subcategory" value={input.subcategory} onChange={handleInput} >
                                        <option></option>
                                        <option value="Shirt"> Shirt </option>
                                        <option value="T-Shirt"> T-Shirt </option>
                                        <option value="Jeans"> Jeans </option>
                                        <option value="Kurta"> Kurta </option>
                                        <option value="Lower"> Lower </option>
                                        <option value="Pajama"> Pajama </option>
                                        <option value="Lehanga_Chunri"> Lehanga Chunri </option>
                                        <option value="Men_Suits"> Men Suits </option>
                                        <option value="Women_Salwar_Suits"> Women Salwar Suits </option>
                                        <option value="Men_Jacket"> Men Jacket </option>
                                        <option value="Women_Jacket"> Women Jacket </option>
                                        <option value="Saree"> Saree </option>
                                        <option value="Midi_Top"> Midi & Top </option>
                                        <option value="Gown"> Gown </option>
                                        <option value="Short_Gown"> Short Gown </option>
                                        <option value="Lehanga"> Lehanga </option>
                                        <option value="Electronics"> Electronics </option>
                                        <option value="Frock"> Frock </option>
                                        <option value="Musical_Instrument"> Musical Instrument </option>

                                    </select>

                                    <div className="adminuploaddetailheading"> Select Tags </div>
                                    
                                    <select className="inputuploaddetail" name="tags" value={input.tags} onChange={handleInput}>
                                        <option></option>
                                        <option value="Featured_Products"> Featured Products </option>
                                        <option value="Top_Selection"> Top Selection </option>
                                        <option value="Latest_Products"> Latest Products </option>
                                        <option value="Other_Products"> Other Products </option>
                                    </select>
                        
                                    <div className="adminuploaddetailheading"> Enter Price </div>
                                    <input className="inputuploaddetail" type="text" name="price" value={input.price} onChange={handleInput}/>
                
                                    <div className="adminuploaddetailheading"> Upload Images 
                                    <input type="file" name="file" onChange={handleFileChange} /></div>
                                                      
                                    <br/>
                                    <button className="inputButtondataupload" onClick={handleSubmit}> Submit </button>
                                </div>
                            </div>
        </>
    );
}
export default AdminDashboard;

