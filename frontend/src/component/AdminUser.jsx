import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminUser=()=>{
    
	const [email, setEmail]=useState("");
	const [password, setPassword]=useState("");
	const navigate= useNavigate();

	const container= document.getElementById('container');	

    const signUpButton=()=>{
            addEventListener('click', ()=>{
            container.classList.add("right-panel-active")
    })
    }
    
    const signInButton=()=>{
            addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }

	const handleSubmit=(e)=>{
		e.preventDefault();
		let url="http://localhost:8000/admin/adminuserlogin";
		axios.post(url, {email:email, password:password}).then((result)=>{

			if(result.data === "Success")
			{
				navigate("/dashboard")
			}
			else
			{
				// navigate("/register")
				alert("You are not registered to this service")
			}
			
				// console.log(res.data.message);	
				// alert(res.data.message);
				// console.log(email);
				// console.log(password);
			})
	}
    return(
        <>
            <h2 id="adminname"> Admin User Login </h2>
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a id="a1" href="#" className="social"><i className="fa fa-facebook-f"></i></a>
				<a id="a1" href="#" className="social"><i className="fa fa-google-plus"></i></a>
				<a id="a1" href="#" className="social"><i className="fa fa-linkedin"></i></a>
			</div>
			<span id="span1">or use your email for registration</span>
			<input type="text" id="inputtext" placeholder="Name" />
			<input id="inputtext" type="email" placeholder="Email" />
			<input type="password" id="inputtext" placeholder="Password" />
			<button onClick={signUpButton} id="button2">Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				<a id="a1" href="#" className="social"><i className="fa fa-facebook"></i></a>
				<a id="a1" href="#" className="social"><i className="fa fa-google-plus"></i></a>
				<a id="a1" href="#" className="social"><i className="fa fa-linkedin"></i></a>
			</div>
			<span id="span1">or use your account</span>
			<input type="email" id="inputtext" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
			<input type="password" id="inputtext" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
			<a id="a1" href="#">Forgot your password?</a>
			<button onClick={handleSubmit} id="button2">Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="button2" onClick={signInButton}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="button2"  onClick={signUpButton}>Sign Up</button>
			</div>
		</div>
	</div>
</div>

<footer>
	<p>
		Created with <i className="fa fa-heart"></i> by
		<a id="a1" target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a id="a1" target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p>
</footer>

        </>
    );
}
export default AdminUser;