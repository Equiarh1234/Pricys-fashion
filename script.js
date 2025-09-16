// form submission
document.getElementById("lead-form")
.addEventListener("submit",function(e) {
    e.preventDefault();

    // Get form values
    const firstname =this.elements[0].value;
    const lastname =this.elements[1].value;
    const email =this.elements[2].value;
    const bestoutfits =this.elements[3].value

    // in real scenario,you would send this data to a server
    console.log("lead captured:" (firstname,lastname,email,bestoutfits));

    // show configuration
    alert("Thank you for your interest! We will contact you shoutly with our fastion detail")
// Reset form
this .reset()

}
)
//show popup after 5 seconds

setTimeout(function(){
    document.getElementById("emmail-popup").style.display="flex"
},5000);

// close popup when X is clicked
document.querySelector(".close-btn").addEventListener("click",function(){
    document.getElementById("emmail-popup").style.display="none";
})

// close when clicking outside content
document.getElementById("emmail-popup").addEventListener("click",function(e){
    if(e.target=== this){
        this.style.display="none";
 }
});   





//=======================> Cookies <======================


function acceptCookies() {
    document.getElementById("cookie-banner").style.display="none";
    localStorage.setItem("cookiesAccepted", "true")
    loadAnalytics();// GA4

}


function declineCookies() {
    document.getElementById("cookie-banner").style.display="none";
    localStorage.setItem("cookiesAccepted", "false")
    loadAnalytics();// GA4

}

// on page load, check past choice

window.onload=function() {

    if(this.localStorage.getItem("cookiesAccepted")==="true"){
        loadAnalytics();
  }else if (localStorage.getItem("cookiesAccepted")=="true"){
    this.document.getElementById("cookies-banner").style.disply="none";
  }
}

    

