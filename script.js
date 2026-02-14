// SPA Navigation
function showPage(pageId){
document.querySelectorAll('.page').forEach(p=>p.style.display='none');
document.getElementById(pageId).style.display='block';
}
function showSignup(){showPage('signup');}

// DARK / LIGHT MODE
const modeBtn=document.getElementById("mode");
modeBtn.onclick=()=>document.body.classList.toggle("light");

// LOGIN / SIGNUP (Simulated)
document.getElementById("login-form").addEventListener("submit",function(e){
e.preventDefault(); showPage('profile');
});
document.getElementById("signup-form").addEventListener("submit",function(e){
e.preventDefault();
const file=document.getElementById("profile-img").files[0];
if(file){
const reader=new FileReader();
reader.onload=function(){document.getElementById("profile-pic").src=this.result;}
reader.readAsDataURL(file);
}
showPage('profile');
});

// Products
let products=[];
let myProducts=[];

// Add Product
document.getElementById("add-form").addEventListener("submit",function(e){
e.preventDefault();
const name=this[0].value;
const file=this[1].files[0];
const price=this[2].value;
const desc=this[3].value;
const contact=this[4].value;

let imgSrc="assets/images/default_product.png";
if(file){
const reader=new FileReader();
reader.onload=function(){addProductCard(this.result);}
reader.readAsDataURL(file);
}else{addProductCard(imgSrc);}

function addProductCard(src){
const product={name,img:src,price,desc,contact};
products.push(product);
myProducts.push(product);
renderProducts();
showPage('profile');
}
});

// Render Products
function renderProducts(){
const container=document.getElementById("products-container");
const myContainer=document.getElementById("my-products");
container.innerHTML=''; myContainer.innerHTML='';
products.forEach(p=>{
const card=document.createElement('div');
card.className='card';
card.innerHTML=`<img src="${p.img}" alt="Product">
<h3>@storm_user <span class="verified">⭐</span></h3>
<p class="desc">${p.desc}</p>
<span class="price">${p.price}</span>
<button class="contact" onclick="alert('Contact: ${p.contact}')">Contact</button>`;
container.appendChild(card);
myContainer.appendChild(card.cloneNode(true));
});
}

// Search Products
function searchProducts(){
const query=document.getElementById("search").value.toLowerCase();
const filtered=products.filter(p=>p.name.toLowerCase().includes(query));
const container=document.getElementById("products-container");
container.innerHTML='';
filtered.forEach(p=>{
const card=document.createElement('div');
card.className='card';
card.innerHTML=`<img src="${p.img}" alt="Product">
<h3>@storm_user <span class="verified">⭐</span></h3>
<p class="desc">${p.desc}</p>
<span class="price">${p.price}</span>
<button class="contact" onclick="alert('Contact: ${p.contact}')">Contact</button>`;
container.appendChild(card);
});
}

// Edit Profile
function editProfile(){
const bio=prompt("Enter new bio:",document.getElementById("profile-bio")?.innerText||"");
const contact=prompt("Enter contact info:",document.getElementById("profile-contact")?.innerText||"");
if(bio) document.getElementById("profile-bio").innerText=bio;
if(contact) document.getElementById("profile-contact").innerText=contact;
  }
