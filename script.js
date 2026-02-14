// SPA Navigation
function showPage(pageId){
document.querySelectorAll('.page').forEach(p=>p.style.display='none');
document.getElementById(pageId).style.display='block';
}

// DARK / LIGHT MODE
const modeBtn = document.getElementById("mode");
modeBtn.onclick = ()=>document.body.classList.toggle("light");

// Fake Contact Button
document.querySelectorAll(".contact").forEach(btn=>{
btn.onclick = ()=>{
alert("Contact the seller via Telegram / Email / Phone");
}
});

// Signup Form
document.getElementById("signup-form").addEventListener("submit",function(e){
e.preventDefault();
alert("Account created! (Simulated)");
showPage('store');
});

// Add Product Form
document.getElementById("add-form").addEventListener("submit",function(e){
e.preventDefault();
const name=this[0].value;
const img=this[1].value;
const price=this[2].value;
const desc=this[3].value;
const contact=this[4].value;

// Create new card
const container=document.getElementById("my-products");
const card=document.createElement("div");
card.className="card";
card.innerHTML=`<img src="${img}" alt="Product">
<h3>@storm_user <span class="verified">⭐</span></h3>
<p class="desc">${desc}</p>
<span class="price">${price}</span>
<button class="contact">Contact</button>`;
container.appendChild(card);
showPage('profile');
});
