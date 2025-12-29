window.addEventListener("load",()=>{
  const loader=document.getElementById("loader");
  setTimeout(()=>{
    loader.style.opacity="0";
    loader.style.transition="opacity .6s ease";
    setTimeout(()=>loader.remove(),600);
  },2200);
});

const modal=document.getElementById("paymentModal");
const modalTitle=document.getElementById("modalTitle");
const modalContent=document.getElementById("modalContent");
const toast=document.getElementById("toast");

function showToast(){
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2000);
}

function showNumber(title,number){
  modalTitle.innerText=title;
  modalContent.innerHTML=`
    <p id="payNumber">${number}</p>
    <button onclick="copyNumber()">COPY NOMOR</button>
  `;
  modal.style.display="flex";
}

function copyNumber(){
  navigator.clipboard.writeText(
    document.getElementById("payNumber").innerText
  );
  showToast();
}

function closeModal(){modal.style.display="none";}
