
function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;
    const alert = document.getElementById('alert-contact');
    const alert_error = document.getElementById('alert-contact-error');
    let showerror=false
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(fullName.length == 0){
        showerror = true
        alert_error.innerHTML = "Please enter your full name"
        alert_error.classList.remove('d-none');
    }else if(userEmail.length == 0){
        showerror = true
        alert_error.innerHTML = "Please enter your email"
        alert_error.classList.remove('d-none');
    }else{
        if (filter.test(userEmail)) {
            showerror = false
        }
        else{
            showerror = true
            alert_error.innerHTML = "Please enter valid email"
            alert_error.classList.remove('d-none');
        }
    }
    
                
      setTimeout(() => {
                    alert_error.classList.add('d-none');
                }, 4000)

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };

        console.log("contactParams",contactParams)
        if(!showerror){

                emailjs.send(process.env.EMAILJS_SERVICEID, process.env.EMAILJS_TEMPLATEID1, contactParams,process.env.EMAILJS_PUBLICKEY).then(function (res) {
                    document.getElementById("name").value = ''
                    document.getElementById("email").value = ''
                    document.getElementById("message").value = ''
                    document.getElementById("subject").value = ''
                    alert.classList.remove('d-none');
        
                        setTimeout(() => {
                            alert.classList.add('d-none');
                        }, 4000)
                })
        }
}

function sendassessmentreqest() {
  
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userPhone = document.getElementById("phno").value;
    let userDob = document.getElementById("dob").value;
    let userGender = document.getElementById("gender").value;
    let userStatus = document.getElementById("marriage_status").value;
    let userEducation = document.getElementById("education").value;
    let userLang = document.getElementById("language_test").value;
    let userResidence = document.getElementById("residence").value;
    let userCitizenship = document.getElementById("citizenship").value;
    let userOccupation = document.getElementById("occupation").value;
    let userYears= document.getElementById("years").value;
    const alert_assessment = document.getElementById('alert-assessment');
    const alert_assessment_error = document.getElementById('alert-assessment-error');
    let showerror=false
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(fullName.length == 0 | userEmail.length == 0 | userPhone.length == 0 | userGender == 0 | userStatus == 0 | userEducation == 0 | userLang == 0 | userResidence.length == 0 | userCitizenship.length == 0 | userOccupation.length == 0 | userYears == 0 ){
        showerror = true
        alert_assessment_error.innerHTML = "Please complete full form"
        alert_assessment_error.classList.remove('d-none');
    }else{
        if (filter.test(userEmail)) {
            showerror = false
        }
        else{
            showerror = true
            alert_assessment_error.innerHTML = "Please enter valid email"
            alert_assessment_error.classList.remove('d-none');
        }
    }

     setTimeout(() => {
                    alert_assessment_error.classList.add('d-none');
                }, 4000)

        var contactParams1 = {
            from_name: fullName,
            from_email: userEmail,
            userPhone: userPhone,
            userDob:userDob,
            userGender:userGender,
            userStatus:userStatus,
            userEducation:userEducation,
            userSub:userLang,
            userResidence:userResidence,
            userCitizenship:userCitizenship,
            userOccupation:userOccupation,
            userYears:userYears
        };

        console.log("contactParams1",contactParams1)
 if(!showerror){
        emailjs.send(process.env.EMAILJS_SERVICEID, process.env.EMAILJS_TEMPLATEID2, contactParams1,process.env.EMAILJS_PUBLICKEY).then(function (res) {
            document.getElementById("name").value = ''
            document.getElementById("email").value = ''
            document.getElementById("phno").value = ''
            document.getElementById("phno").value = ''
            document.getElementById("dob").value = ''
            document.getElementById("gender").value = ''
            document.getElementById("marriage_status").value = ''
            document.getElementById("education").value = ''
            document.getElementById("language_test").value = ''
            document.getElementById("residence").value = ''
            document.getElementById("citizenship").value = ''
            document.getElementById("occupation").value = ''
            document.getElementById("years").value =''

            alert_assessment.classList.remove('d-none');
  
            setTimeout(() => {
                alert_assessment.classList.add('d-none');
            }, 4000)


        })
 }
}