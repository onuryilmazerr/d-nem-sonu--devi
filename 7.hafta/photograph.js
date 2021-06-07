//seçme
const filterItem = document.querySelector(".item");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //pencere yüklendikten sonra
  filterItem.onclick = (selectedItem)=>{ //kullanıcı tıklarsa
    if(selectedItem.target.classList.contains("item")){ //seçilen item
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active"); //seçileni ekleme
      let filterName = selectedItem.target.getAttribute("data-name"); //seçileni saklama
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //verinin adıyla resimin özelliğini eşleştirme
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide");
          image.classList.add("show"); //resim gösterme
        }else{
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
}

//tam ekran
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  //resme tıklandıpında sayfanın  yukarı aşağı kaymasını engelleme
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //resimin adını bir değişkende sakla
  let selectedImgCategory = element.getAttribute("data-name"); //kullanıcının tıkladığı veriyi seçme
  previewImg.src = selectedPrevImg; //önizleme
  categoryName.textContent = selectedImgCategory; //veriyi kategorize etme
  previewBox.classList.add("show"); //önizleme kutusu
  shadow.classList.add("show"); //resme tıklandığında gölge yapma
  closeIcon.onclick = ()=>{ //büyük resimde kapama butonu
    previewBox.classList.remove("show"); //önizleme kapama
    shadow.classList.remove("show"); //arka plan rengini kapatma
    document.querySelector("body").style.overflow = "auto"; //kaydırma çubuğunu tekrar ortaya çıkarır
  }
}