function isvalidEmail(email){
return email.includes("@")? true : false
};

console.log (isvalidEmail ("@.com"));
isvalidEmail;

console.log (isvalidEmail ("@.com"));
isvalidEmail;


const downloadBtn = document.querySelector('.hero-buttons .btn-primary');

downloadBtn.addEventListener('click', function(event) {
    event.preventDefault(); 

    const cvUrl = 'images/my-cv.jpeg'; 
    
    const tempLink = document.createElement('a');
    tempLink.href = cvUrl;
    
    
    tempLink.download = 'My_Professional_CV.pdf'; 
    
    
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
});
