import { Link, Outlet, useNavigate } from "react-router-dom";
const Dashboard=()=>{

    const navigate=useNavigate();

    const adminLogout=()=>{
        window.localStorage.clear();
        navigate("/adminuser");
    }

    return(
        <>
            <div id="admindashboard">
                <div id="adminleft"> Admin Dashboard </div>
                <div id="adminright"> Welcome Admin ! <a href="#" onClick={adminLogout}> Logout </a></div>
            </div>
            
            <div className="rainbowhover">
                <div className="rainbow1">
                    <a>
                        Upload Product
                    </a> 
                </div>
                <div className="rainbowdashboard">
                    
                    <div className="userproduct">
                        <div>
                            <Link to="uploadproduct" id="uploadprod"> Upload Product </Link>
                        </div>
                    </div>

                    <div className="uploadsliderimg">
                        <div>
                            <Link to="uploadimageslider" id="uploadsliderimageheading"> Upload Slider Images </Link>
                        </div>
                    </div>

                    <div className="purchaseorderdetail">
                        <div>
                            <Link to="productorderdetail" id="purchaseorderdetailheading" > Purchase Order Detail </Link>
                        </div>
                    </div>


                            <Outlet/>
                </div>
            </div>
        </>
    );
}
export default Dashboard;