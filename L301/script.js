var str = prompt("შეიყვანეთ ტექსტი: ");
 if(str.indexOf("რეკლამა") != -1 || str.indexOf("მარკეტინგი") !=-1 || str.indexOf("ვირუსი") != -1 ){
    alert("თქვენს შეტანილ წინადადებაში ნაპოვნია ისეთი სიტყვები რომელიც დაუშვებელია დასაპოსტად.")
 }
 else {
     alert(str);
 }