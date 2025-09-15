// document.getElementById("btn")
// .addEventListener("click",function(e) {


//     alert("Thank you for your interest! We will contact you shoutly with our fastion detail")

// this.reset()
// })

// for clothing.html

document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll(".buy-now-btn");
    const purchaseForm = document.getElementById("purchaseForm");
    const thankYou = document.getElementById("thankYou");
    const selectedproductImage = document.getElementById("selectedproductImage");
    const selectedproductName = document.getElementById("selectedProductName");
    const selectedproductPrice = document.getElementById("selectedProductPrice");
    const checkoutForm = document.getElementById("checkoutform");

       // store selected product details

       let selectedProduct ='';
       let selectedPrice ='';
       let selectedImage ='';

       // Buy Now buttons
       buyButtons.forEach(button =>{
        button.addEventListener("click", function() {
            selectedProduct = this.getAttribute("data-product");
            selectedPrice = this.getAttribute("data-price");
            selectedImage = this.getAttribute("data-image");

            // update form with product details
             selectedproductImage.src=selectedImage;
             selectedproductImage.alt= selectedProduct;
             selectedproductName.textContent=selectedProduct;
             selectedproductPrice.textContent=`price: $${selectedPrice}`;

             //show form
             purchaseForm.style.display="block"
             purchaseForm.scrollIntoView({behavior:"smooth"});


        });
       });

       // handle form submission
       checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;

        const subject =`Order for: ${selectedProduct}`;
        const body =`
          Hello Pricys fashion,

          I would like to place an order for the following items:

          Product: ${selectedProduct}
          Price: ${selectedPrice}

          My details:
          - Name: ${name}
          -Email: ${email}
          -Shipping Address: ${address}
          -Phone: ${phone}

          Please process your order and let me know the the next step.
          `.trim();

          const mailtoLink =`mailto:pricysfashion@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href=mailtoLink;

          purchaseForm.style.display='none';
          thankYou.style.display='block';
          thankYou.scrollIntoView({behavior: "smooth"});
    });
   });
