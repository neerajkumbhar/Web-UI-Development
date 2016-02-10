	function blocking(id)
		//displaying or hiding parts of the page
		{
  		displayNew = (document.getElementById(id).style.display == 'none') ? 'block' : 'none';
	   	document.getElementById(id).style.display = displayNew;
		}


	function checkPassword()
		{

			var pass1= document.getElementById("password").value;  
			var pass2= document.getElementById("vpassword").value;  

			if (pass1 != pass2)
			{
				document.getElementById("img1").style.display = 'none';
				document.getElementById("vpassword").style.borderColor="red";
			}
			else
			{	
				document.getElementById("img1").style.display = 'block';
				document.getElementById("vpassword").style.borderColor="black";
			}
		}



		
		function submitForm()
		{
			sessionStorage.setItem("User ID",0);
			var user = document.getElementById("userid");
			sessionStorage.setItem("User ID", user.value);

			sessionStorage.setItem("Password",0);
			var pass = document.getElementById("password");
			sessionStorage.setItem("Password", pass.value);

			sessionStorage.setItem("Email",0);
			var email = document.getElementById("email_addr");
			sessionStorage.setItem("Email", email.value);

			sessionStorage.setItem("Question1",0);
			var questionone = document.getElementById("question1");
			sessionStorage.setItem("Question1", questionone.value);

			sessionStorage.setItem("Answer1",0);
			var answerone = document.getElementById("answer1");
			sessionStorage.setItem("Answer1", answerone.value);

			sessionStorage.setItem("Question2",0);
			var questiontwo = document.getElementById("question2");
			sessionStorage.setItem("Question2", questiontwo.value);

			sessionStorage.setItem("Answer2",0);
			var answertwo = document.getElementById("answer2");
			sessionStorage.setItem("Answer2", answertwo.value);

			sessionStorage.setItem("Phone",0);
			var telephone = document.getElementById("mobile");
			sessionStorage.setItem("Phone", telephone.value);

			sessionStorage.setItem("Address Line1",0);
			var line1 = document.getElementById("addressline1");
			sessionStorage.setItem("Address Line1", line1.value);

			sessionStorage.setItem("Address Line2",0);
			var line2 = document.getElementById("addressline2");
			sessionStorage.setItem("Address Line2", line2.value);

			 sessionStorage.setItem("Areas", 0);
			 var areas = document.getElementById("areaid");
			 var p= [];

				for(var i=0; i<areas.options.length ; i++)
		 	{
				  if(areas.options[i].selected === true)
				  {
					p.push(areas.options[i].value);

				   }	
			 }

			 sessionStorage.setItem("Areas", p); 
	
		}

		
		function verifyEmail()
		{
			var email1= document.getElementById("email_addr").value;  
			var email2= document.getElementById("vemail_addr").value;  
						
			if (email1 != email2)
			{
				document.getElementById("img2").style.display = 'none';			
				document.getElementById("vemail_addr").style.borderColor="red";
				document.getElementById("span2").innerHTML = "Wrong Password Entered! Please try again."
				document.getElementById("vemail_addr").value="";
		   		document.getElementById("vemail_addr").focus();
			}
			else
			{		
				document.getElementById("span2").innerHTML = ""			
				document.getElementById("img2").style.display = 'block';
				document.getElementById("vemail_addr").style.borderColor="black";	
			}	
		}
	


		function calculateStrength()
		{

			var level;
			var passlen = document.getElementById("password").value.length;
			var minChar = 7;
			var maxChar = 20;
			var pass = document.getElementById("password").value;
			var progressBar = document.getElementById('p');
		
		    var containsDigits = /[0-9]/.test(pass);
		    var specialExpression = /[!@#$%^&*]/.test(pass);
	
		    var user = document.getElementById("userid").value;
		    
		    if(user == pass)
		    {
		    	alert("Password cannot be same as User Id!");
		    	progressBar.value = 0;
		   		document.getElementById("password").value="";
		   		document.getElementById("password").focus();
		   		document.getElementById("span1").innerHTML = "";
		    }
		    else
   			   if(pass.indexOf(' ') >=0)
		   		{	
		   			alert("NO SPACES ALLOWED!!\nEnter password again");
		   			progressBar.value = 0;
		   		 	document.getElementById("password").value="";
		   			document.getElementById("password").focus();
		   			document.getElementById("span1").innerHTML = "";
		   		}
		  	 else 
		  	 {		
		  	 	if(passlen <= minChar )
		  	 	{
		  	 		progressBar.value = 10;
		  	 		document.getElementById("span1").innerHTML = "Weak";
		  	 	}
		  	 	else if (passlen > minChar && passlen <= maxChar)
		  	 	{
		  	 		if(containsDigits || specialExpression)
		  	 		{	
		  	 			if(specialExpression)
		  	 			{
		  	 				if(containsDigits)
		  	 				{
				 				// aplha + num + special
								progressBar.value= 100;
								document.getElementById("span1").innerHTML = "Strong";
				 			}
				 			else
				 			{
				 				// alpha + special
				 				progressBar.value=60;
				 				document.getElementById("span1").innerHTML = "Moderate";
				 			}
				 		}
				 	else
				 		{
				 			// only alpha and numbers
				 			progressBar.value=60;
				 			document.getElementById("span1").innerHTML = "Moderate";
				 		}
				 	}
				 	
				 	else
				 			{
				 				progressBar.value=20;	
				 				document.getElementById("span1").innerHTML = "Weak";
				 			}		

				 }	

			 }	

		}


function calc(){

 	alert("in");

 	if(document.getElementById("showHide").checked)
 	{
 		alert("checked!!");
 	}
 }



