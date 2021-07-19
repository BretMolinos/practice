var x = document.getElementsByClassName('test'); // getElementsByClassName is an array so if you want to modify  the HTML element you need to declare it as an array

for (i = 0; i < x.length; i++) {
    x[i].style.color = "red";
}

document.getElementsByTagName('P')[0].setAttribute('class', 'test1');


//document.getElementsByTagName('IMG')[0].setAttribute('src', 'UMID.jpg'); // OR the same at the below
document.getElementById('testImage').setAttribute('src', 'UMID.jpg');// OR
//document.getElementById('testImage').src = 'UMID.jpg';

document.getElementById('btn-image').onclick = function () {
    var image = document.getElementById('img2').innerHTML = "<span style='font-size: 20px; color: red;'>Image 3</span>";
    document.getElementById('testImage2').src = 'UMID.jpg';
    this.image;
};

document.getElementById('testImage2').onclick = function () {

    var image = document.getElementById('img2').innerHTML = "<span style='font-size: 20px; color: green;'>Image 3</span>";
    this.src = 'UMID.jpg'; // 'this' method is use for objects
    this.image;
};

var h4 = document.querySelectorAll('h4.head4');

for (i = 0; i < h4.length; i++) {
    h4[i].style.color = "green";
}




