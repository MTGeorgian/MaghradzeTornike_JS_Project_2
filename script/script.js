"use strict";

document.getElementById('section-one-discover').addEventListener('click', function(){
	alert('You Clicked Discover Button.');
})

// burger bar

let navigationLeftBlock = document.getElementById('navigation');
let burgerBar = document.getElementById('burger-wrapper-toggle');
let signIn = document.getElementById('sign-in');
let signUp = document.getElementById('sign-up');

burgerBar.addEventListener('click', function(){
	navigationLeftBlock.classList.toggle('burgerBar');
	burgerBar.classList.toggle('active');
	signIn.classList.toggle('burgerBar');
	signUp.classList.toggle('burgerBar');
})

// load more

let loadmore = document.querySelector('#view-all');
    let currentItems = 1;
    loadmore.addEventListener('click', (item) => {
        let loadList = document.querySelectorAll('.destination-box-wrapper');
        for (let i = currentItems; i < currentItems + loadList.length; i++) {
            if (loadList[i]) {
                loadList[i].style.display = 'flex';
				document.getElementById('destinationS3').classList.toggle('actv');
            }
        }
        currentItems += loadList.length;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= loadList.length) {
            event.target.style.display = 'none';
        }
    })

// full heart

let fullHeart = document.querySelectorAll(".destination-box-wrapper div:first-child");

fullHeart.forEach( i => {
	i.addEventListener('click', item => {
		i.classList.toggle('heart');
	})
} )

// read more popup

let readmore = document.querySelectorAll('.readMore');
let overlay = document.getElementById('overlay');
let close = document.getElementById('close');

readmore.forEach( item => {
	item.addEventListener('click', i => {
		overlay.classList.add('show');
	})
	
	close.addEventListener('click', c => {
		overlay.classList.remove('show');
	})
})

// get info from server

let content = document.getElementById('content')

function getinfo() {

	function render(){
		let recivedata = this.responseText;
		let convertdata = JSON.parse(recivedata);		

		convertdata.covid.forEach( el => {
			let hone = document.createElement('h1');
			hone.classList.add('h1-info');
			hone.textContent = el.h1;

			let image = document.createElement('img');
			image.classList.add('img-info');
			image.setAttribute('src', el.img);

			content.appendChild(hone);
			content.appendChild(image);
		})

		console.log(convertdata);
	}

	function showerror(){
		let span = document.createElement('span');
        span.setAttribute('class', 'error-span-style');
        span.textContent = "Error"

        let img2 = document.createElement('img');
        img2.setAttribute('src', 'https://www.freeiconspng.com/uploads/sign-red-error-icon-1.png');
		img2.setAttribute('alt', 'image')

		content.appendChild(span);
		content.appendChild(img2);
	}

	let xmlrequest = new XMLHttpRequest();

	xmlrequest.addEventListener('load', render);
	xmlrequest.addEventListener('error', showerror);
	xmlrequest.open('GET', 'https://www.mockachino.com/1b68987f-0a2f-42/covid');
	xmlrequest.send();
}

getinfo();

// signin/signup popup & validation

let signupoverlay = document.getElementById('signup-overlay');
let signupcontent = document.getElementById('signup-content')
let signupclose = document.getElementById('signup-close');

signUp.addEventListener('click', a => {

	signupoverlay.classList.add('signup-show');

	let divFormContainer = document.createElement('div');
		divFormContainer.classList.add('form-container');
	
	let form = document.createElement('form');
		form.setAttribute('action', '#');
		form.setAttribute('method', 'POST');
		form.setAttribute('id', 'signup_form');
		
	let emailLabel = document.createElement('label');
		emailLabel.setAttribute('for', 'useremail');
		emailLabel.textContent = "Email";
	
	let emailInput = document.createElement('input');
		emailInput.setAttribute('type', 'email');
		emailInput.setAttribute('name', 'useremail');
		emailInput.setAttribute('id', 'useremail');
		emailInput.setAttribute('placeholder', 'Enter Email');
	
	let passwordLable = document.createElement('label');
		passwordLable.setAttribute('for', 'password')
		passwordLable.textContent = "Password";
	
	let passwordInput = document.createElement('input');
		passwordInput.setAttribute('type', 'password');
		passwordInput.setAttribute('name', 'password');
		passwordInput.setAttribute('id', 'password');
		passwordInput.setAttribute('placeholder', 'Enter Password');

	let eyeSignUp = document.createElement('i');
		eyeSignUp.classList.add('far', 'fa-eye');
		eyeSignUp.setAttribute('id', 'eye-signUp');
	
	let eyeSlashSignUp = document.createElement('i');
		eyeSlashSignUp.classList.add('far', 'fa-eye-slash');
		eyeSlashSignUp.setAttribute('id', 'eye-slash-signUp');
		eyeSlashSignUp.style.display = 'none';
	
	let repeatPasswordLable = document.createElement('label');
		repeatPasswordLable.setAttribute('for', 'repeat-password')
		repeatPasswordLable.textContent = "Repeat Password";
	
	let repeatPasswordInput = document.createElement('input');
		repeatPasswordInput.setAttribute('type', 'password');
		repeatPasswordInput.setAttribute('name', 'repeat-password');
		repeatPasswordInput.setAttribute('id', 'repeat_password');
		repeatPasswordInput.setAttribute('placeholder', 'Repeat Password');

	let aTag = document.createElement('a');
		aTag.setAttribute('href', 'https://policies.google.com/terms?hl=en-US');
		aTag.setAttribute('target', '_blank');
		aTag.textContent = "Agree to Terms and Conditions";
	
	let ckeckboxLable = document.createElement('label');
		ckeckboxLable.setAttribute('for', 'checkbox');
	
	let checkboxInput = document.createElement('input');
		checkboxInput.setAttribute('type', 'checkbox');
		checkboxInput.setAttribute('name', 'checkbox');
		checkboxInput.setAttribute('id', 'checkbox');
		checkboxInput.setAttribute('checked', 'checked');

	let signupbutton = document.createElement('button');
		signupbutton.setAttribute('type', 'submit');
		signupbutton.setAttribute('id', 'signup-button');
		signupbutton.textContent = "Sign Up";

		let divEmailSignUp = document.createElement('div');
		divEmailSignUp.classList.add('divEmailSignUp-container');
		
			let errorEmailDiv = document.createElement('div');
				errorEmailDiv.classList.add('errorSignUpDiv');
				errorEmailDiv.setAttribute('id', 'err_signUpn_useremail');

		let divPswrdSignUP = document.createElement('div');
		divPswrdSignUP.classList.add('divPswrdSignUP-container');

			let errorPswrdDiv = document.createElement('div');
				errorPswrdDiv.classList.add('errorSignUpDiv');
				errorPswrdDiv.setAttribute('id', 'err_signUpn_password');

		let divRepeatPswrdSignUP = document.createElement('div');
		divRepeatPswrdSignUP.classList.add('divRepeatPswrdSignUP-container');
			
			let errorRepeatPswrdDiv = document.createElement('div');
				errorRepeatPswrdDiv.classList.add('errorSignUpDiv');
				errorRepeatPswrdDiv.setAttribute('id', 'err_signUpn_repeat-password');

		let divChekBoxSignUP = document.createElement('div');
		divChekBoxSignUP.classList.add('divChekBoxSignUP-container');

			let errorCheckDiv = document.createElement('div');
				errorCheckDiv.classList.add('errorSignUpDiv');
				errorCheckDiv.setAttribute('id', 'err_signUpn_checkbox');

		divEmailSignUp.appendChild(emailLabel);
		divEmailSignUp.appendChild(emailInput);
		divEmailSignUp.appendChild(errorEmailDiv);
		divFormContainer.appendChild(divEmailSignUp);
		divPswrdSignUP.appendChild(passwordLable);
		divPswrdSignUP.appendChild(passwordInput);
		divPswrdSignUP.appendChild(errorPswrdDiv);

		divPswrdSignUP.appendChild(eyeSignUp);
		divPswrdSignUP.appendChild(eyeSlashSignUp);

		divFormContainer.appendChild(divPswrdSignUP);
		divRepeatPswrdSignUP.appendChild(repeatPasswordLable);
		divRepeatPswrdSignUP.appendChild(repeatPasswordInput);
		divRepeatPswrdSignUP.appendChild(errorRepeatPswrdDiv);
		divFormContainer.appendChild(divRepeatPswrdSignUP);
		ckeckboxLable.appendChild(checkboxInput);
		ckeckboxLable.appendChild(aTag);
		divChekBoxSignUP.appendChild(ckeckboxLable);
		divChekBoxSignUP.appendChild(errorCheckDiv);
		divFormContainer.appendChild(divChekBoxSignUP);
		divFormContainer.appendChild(signupbutton);
		form.appendChild(divFormContainer);
		signupcontent.appendChild(form);


		let eyeshowSignUp = document.getElementById('eye-signUp');
		let eyehideSignUp = document.getElementById('eye-slash-signUp');
		let pswrdShowSignUp = document.getElementById('password');
		let repeatpswrdShowSignUp = document.getElementById('repeat_password');
	
		eyeshowSignUp.addEventListener('click', showpswrd => {
					
			if(pswrdShowSignUp.type === 'password'){
				eyeshowSignUp.style.display = 'none';
				eyehideSignUp.style.display = 'inline-block';
				pswrdShowSignUp.type = 'text';
				repeatpswrdShowSignUp.type = 'text';
			}
			eyehideSignUp.addEventListener('click', hidepswrd =>{
				
				if(pswrdShowSignUp.type === 'text'){
					eyeshowSignUp.style.display = 'inline-block';
					eyehideSignUp.style.display = 'none';
					pswrdShowSignUp.type = 'password';
					repeatpswrdShowSignUp.type = 'password';
				}
			})        
		})



	signup_form.addEventListener('submit', signUp_item => {
		signUp_item.preventDefault();
		let error_signUp = {};
		let form_signUp = signUp_item.target;

		let useremail = form_signUp.querySelector('#useremail').value;
			if(!useremail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
				error_signUp.useremail = 'Invalid Email Adress!';
			}
			if(useremail == ''){
				error_signUp.useremail = 'Please Enter Your Email!';
			}

		let password = form_signUp.querySelector('#password').value;
		let repeat_password =  form_signUp.querySelector('#repeat_password').value;
			if(password.length < 6){
				error_signUp.password = 'Please Enter Minimum 6 Symbols!';
			}
			if(password & repeat_password == ''){
				error_signUp.password = 'Password Must Be Filled!';
			}
			if(password != repeat_password){
				error_signUp.password = 'Password Do not Match!';
			}

		let checkbox = form_signUp.querySelector('#checkbox').checked;
			if(!checkbox){
				error_signUp.checkbox = 'Please Agree Our Terms and Conditions!';
			}

		form_signUp.querySelectorAll('.errorSignUpDiv').forEach(item => {
			item.textContent = '';
		})	

		for (let element in error_signUp){
			let signUpErrDiv = document.getElementById('err_signUpn_' + element);
				if(signUpErrDiv){
					signUpErrDiv.textContent = error_signUp[element];
				}
		}

		if(Object.keys(error_signUp).length == 0){
			form_signUp.submit();
		}
	})

	signupclose.addEventListener('click', c => {
		signupcontent.innerHTML = '';
		signupoverlay.classList.remove('signup-show');
	})
})

let signinoverlay = document.getElementById('signin-overlay');
let signincontent = document.getElementById('signin-content')
let signinclose = document.getElementById('signin-close');

signIn.addEventListener('click', a => {

	signinoverlay.classList.add('signin-show');
	
	let formSignIn = document.createElement('form');
		formSignIn.setAttribute('action', '#');
		formSignIn.setAttribute('method', 'POST');
		formSignIn.setAttribute('id', 'signin-form');

	let divFormContainerSignIn = document.createElement('div');
		divFormContainerSignIn.classList.add('form-container-signin');

	let emailLableSignIn = document.createElement('label');
		emailLableSignIn.setAttribute('for', 'useremail-signin');
		emailLableSignIn.textContent = "Email";
		emailLableSignIn.classList.add('email-lbl-signIn');
	
	let emailInputSignIn = document.createElement('input');
		emailInputSignIn.setAttribute('type', 'email');
		emailInputSignIn.setAttribute('name', 'useremail-signin');
		emailInputSignIn.setAttribute('id', 'useremail-signin');
		emailInputSignIn.setAttribute('placeholder', 'Enter Email'); 	
	
	let passwordLableSignIn = document.createElement('label');
		passwordLableSignIn.setAttribute('for', 'password-signin')
		passwordLableSignIn.textContent = "Password";
		passwordLableSignIn.classList.add('pswrd-lbl-signIn');
		
	let passwordInputSignIn = document.createElement('input');
		passwordInputSignIn.setAttribute('type', 'password');
		passwordInputSignIn.setAttribute('name', 'password-signin');
		passwordInputSignIn.setAttribute('id', 'password-signin');
		passwordInputSignIn.setAttribute('placeholder', 'Enter Password');

	let eyeSignIn = document.createElement('i');
		eyeSignIn.classList.add('far', 'fa-eye');
		eyeSignIn.setAttribute('id', 'eye');
		// eyeSignIn.setAttribute('onclick', 'showpswrd()');

	let eyeSlashSignIn = document.createElement('i');
		eyeSlashSignIn.classList.add('far', 'fa-eye-slash');
		eyeSlashSignIn.setAttribute('id', 'eye-slash');
		// eyeSlashSignIn.setAttribute('onclick', 'showpswrd()');
		eyeSlashSignIn.style.display = 'none';

	let ckeckboxLableSignIn = document.createElement('label');
		ckeckboxLableSignIn.setAttribute('for', 'checkbox');
		ckeckboxLableSignIn.textContent = "Remember Me";
		ckeckboxLableSignIn.classList.add('chckbx-lbl-signIn');

	let checkboxInputSignIn = document.createElement('input');
		checkboxInputSignIn.setAttribute('type', 'checkbox');
		checkboxInputSignIn.setAttribute('name', 'checkbox');
		checkboxInputSignIn.setAttribute('id', 'checkbox');
		checkboxInputSignIn.setAttribute('checked', 'checked');	

	let signinbutton = document.createElement('button');
		signinbutton.setAttribute('type', 'submit');
		signinbutton.setAttribute('id', 'signin-button');
		signinbutton.textContent = "Sign In";	

		let divEmailSignIn = document.createElement('div');
			divEmailSignIn.classList.add('divEmailSignIN-container');

			let errEmailDiv = document.createElement('div');
				errEmailDiv.classList.add('errDiv');
				errEmailDiv.setAttribute('id', 'err_signIn_email');
			
		let divPswrdSignIn = document.createElement('div');
			divPswrdSignIn.classList.add('divPswrdSignIn-container');

			let errPswrdDiv = document.createElement('div');
				errPswrdDiv.classList.add('errDiv');
				errPswrdDiv.setAttribute('id', 'err_signIn_password');

		let divChekBoxSignIn = document.createElement('div');
			divChekBoxSignIn.classList.add('divChekBoxSignIn-container');

	divEmailSignIn.appendChild(emailLableSignIn);
	divEmailSignIn.appendChild(emailInputSignIn);
	divEmailSignIn.appendChild(errEmailDiv);
	divFormContainerSignIn.appendChild(divEmailSignIn);
	divPswrdSignIn.appendChild(passwordLableSignIn);
	divPswrdSignIn.appendChild(passwordInputSignIn);
	divPswrdSignIn.appendChild(errPswrdDiv);
	divPswrdSignIn.appendChild(eyeSignIn);
	divPswrdSignIn.appendChild(eyeSlashSignIn);
	divFormContainerSignIn.appendChild(divPswrdSignIn);
	ckeckboxLableSignIn.appendChild(checkboxInputSignIn);
	divChekBoxSignIn.appendChild(ckeckboxLableSignIn);
	divFormContainerSignIn.appendChild(divChekBoxSignIn);
	divFormContainerSignIn.appendChild(signinbutton);
	formSignIn.appendChild(divFormContainerSignIn);
	signincontent.appendChild(formSignIn);

	let eyeshow = document.getElementById('eye');
	let eyehide = document.getElementById('eye-slash');
	let pswrdShowSignIn = document.getElementById('password-signin');

	eyeshow.addEventListener('click', showpswrd => {
		        
        if(pswrdShowSignIn.type === 'password'){
			eyeshow.style.display = 'none';
			eyehide.style.display = 'inline-block';
			pswrdShowSignIn.type = 'text';
        }
		eyehide.addEventListener('click', hidepswrd =>{
			
			if(pswrdShowSignIn.type === 'text'){
				eyeshow.style.display = 'inline-block';
				eyehide.style.display = 'none';
				pswrdShowSignIn.type = 'password';
			}
		})        
	})

	formSignIn.addEventListener('submit', signIn_item => {
		signIn_item.preventDefault();

		let error_signInValidation = {};
		let form_SignIn = signIn_item.target;

		let email = form_SignIn.querySelector('#useremail-signin').value;
		 	if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
				error_signInValidation.email = 'Invalid Email Adress!';
			 }
			if(email == ''){
				error_signInValidation.email = 'Please Enter Your Email!';
			}

		let password = form_SignIn.querySelector('#password-signin').value; 	 
			 if(password.length < 6){
				error_signInValidation.password = 'Please Enter Minimum 6 Symbols!';
			 }
			if(password == ''){
				error_signInValidation.password = 'Password Must Be Filled!';
			}

		form_SignIn.querySelectorAll('.errDiv').forEach(item => {
			item.textContent = '';
		})	 

		for (let erritem in error_signInValidation){

			let errordiv = document.getElementById('err_signIn_' + erritem);	
				if(errordiv){
					errordiv.textContent = error_signInValidation[erritem];
			}
		}

		// sign in cookies

		let signIn_user_checkBox = document.getElementById('checkbox');

		if(signIn_user_checkBox.checked){
			let save_user = document.getElementById('useremail-signin').value;
			let save_pswrd = document.getElementById('password-signin').value;
			Cookies.set('user_bank', save_user);
			Cookies.set('user_bank', save_user, {expires: 0.1});
			Cookies.set('user_pswrd', save_pswrd);
			Cookies.set('user_pswrd', save_pswrd, {expires: 0.1});
		}else{
			Cookies.remove('user_bank');
			Cookies.remove('user_pswrd');
		}

			let savedUser = Cookies.get('user_bank');
			let savedPswrd = Cookies.get('user_pswrd');
			if(savedUser){
				document.getElementById('useremail-signin').value = savedUser;
			}
			if (savedPswrd) {
				document.getElementById('password-signin').value = savedPswrd;
			}

		if(Object.keys(error_signInValidation).length == 0){
			form_SignIn.submit();
		}
	})

	signinclose.addEventListener('click', c => {
		signincontent.innerHTML = '';
		signinoverlay.classList.remove('signin-show');
	})
})

//  send email validation

let send_email_form = document.getElementById('send_email_form');

send_email_form.addEventListener('submit', function(item){
	item.preventDefault();

	let error_sendEmail = {};
	let sndemailtrgt = item.target;

	let sendEmailDiv = document.createElement('div');
	sendEmailDiv.classList.add('sendEmail');
	sendEmailDiv.setAttribute('id', 'send_email');
	send_email_form.appendChild(sendEmailDiv);

	let sendEmail  = sndemailtrgt.querySelector('#email').value;
		if(!sendEmail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
			error_sendEmail.sendEmail = 'Invalid Email Adress!';
		}

	for (let errevent in error_sendEmail){

		let senderrordiv = document.getElementById('send_email');	
			if(senderrordiv){
				senderrordiv.textContent = error_sendEmail[errevent];
		}
	}	

	if(Object.keys(error_sendEmail).length == 0){
		sndemailtrgt.submit();
	}	
})


//Slider 

	let dataSlider = [
		{
			id: 1,
			imgUrl:'images/bonfire.svg',
			title: 'camping & day Use',
			paragraph:'return to your favorite spot or discover a new one that is right for you.'
		},{
			id: 2,
			imgUrl:'images/ticket.svg',
			title: 'tours & tickets',
			paragraph:'reserve tours and tickets to participate in events.'
		},{
			id: 3,
			imgUrl:'images/docs.svg',
			title: 'permits',
			paragraph:'obtain permits for access to high-demand locations.'
		},{
			id: 4,
			imgUrl:'images/fishing.svg',
			title: 'recreation activities',
			paragraph:'find the best spots for hunting, fishing & recreational shooting.'
		}
	]

	let sliderIndex = 0;
	let arrowRight = document.getElementById('right-arrow');
	let arrowLeft = document.getElementById('left-arrow');
	let sliderContent = document.getElementById('slider_content');
	let serviceWrapper = document.getElementById('service-wrapper');
	let selectorList = document.getElementsByClassName('selector');

	function createWrapperDiv(item){
		let wrapperDiv = document.createElement('div');
		wrapperDiv.setAttribute('class', 'box-wrapper');

		return wrapperDiv;
	}

	function createBoxDiv(item){
		let boxDiv = document.createElement('div');
		boxDiv.setAttribute('class', 'box');

		return boxDiv;
	}

	function createImgTag(item){
		let imgTag = document.createElement('img');
		imgTag.setAttribute('src', item.imgUrl);
		imgTag.setAttribute('alt', 'image');

		return imgTag;
	}

	function createH3Tag(item){
		let H3Tag = document.createElement('h3');
		H3Tag.append(item.title);

		return H3Tag;
	}

	function createPtag(item){
		let pTag = document.createElement('p');
		pTag.append(item.paragraph);

		return pTag;
	}

	function createSliderSelector(item){
		let selectors = document.createElement('div');
		selectors.classList.add('selectors');

		dataSlider.forEach( (element) => {
			let selector = document.createElement('div');
			selector.classList.add('selector');
			selector.setAttribute('data-id', element.id - 1);

			selector.onclick = function(event){
				let id = event.target.getAttribute('data-id');
				sliderIndex = id;
				slider();
			}

			selectors.appendChild(selector);
		});

		return selectors;
	}

	function slider(){
		sliderContent.innerHTML = '';
		let sliderItemWrapper = createWrapperDiv(dataSlider[sliderIndex]);
		let sliderItem = createBoxDiv(dataSlider[sliderIndex]);
		let imageTag = createImgTag(dataSlider[sliderIndex]);
		let tagH3 = createH3Tag(dataSlider[sliderIndex]);
		let paragraphTag = createPtag(dataSlider[sliderIndex]);
		let selectors = createSliderSelector();

		sliderItem.appendChild(imageTag);
		sliderItem.appendChild(tagH3);
		sliderItem.appendChild(paragraphTag);
		sliderItemWrapper.appendChild(sliderItem);
		sliderContent.appendChild(sliderItemWrapper);
		sliderContent.appendChild(selectors);
		console.log(sliderItemWrapper);
		activeSelector();
	}

	function activeSelector(){
		selectorList[sliderIndex].classList.add('active-selector');
	}

	function clickLeft(){
		if(sliderIndex <= 0){
			sliderIndex = dataSlider.length - 1;
			slider();
			return;
		}
		sliderIndex--;
		slider();
	}

	function clickRight(){
		if(sliderIndex >= dataSlider.length - 1){
			sliderIndex = 0;
			slider();
			return;
		}
		sliderIndex++
		slider();
	}

	arrowRight.addEventListener('click', clickRight);
	arrowLeft.addEventListener('click', clickLeft);

	setInterval( () => {
		clickRight();
	}, 4000)

	slider();