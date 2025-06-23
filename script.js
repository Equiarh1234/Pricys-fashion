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
   
    