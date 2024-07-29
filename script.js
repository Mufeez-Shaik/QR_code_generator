const input = document.getElementById('qr-input');
const img = document.getElementById('qr-img');
const button = document.getElementById('qr-button');
console.log(input,img, button)


button.addEventListener('click', () =>{
    let inputvalue = input.value
    if(!inputvalue){
        alert("please paste something")
        return
    }
    else{
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
    }
     
})