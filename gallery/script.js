var req = new XMLHttpRequest();
req.open("GET","./json/image_list.json");
req.onreadystatechange = function(){
    if(this.readyState==4){
        console.log(this.response);
        var date = JSON.parse(this.response);
        for(var i =0 ; i<data.length;i++){
            var div = document.createElement("div");
            div.setAttribute("class","image");
           /* div.onclick = function(){
                if(this.getAttribute("class").indexOf("image-selected")==-1){
                this.setAttribute("class","image image-selected");
            }else{
                this.setAttribute("class","image");
               이기능을 API로 간단히 표현할수있다. 바로 classList 메소드를 이용하면 됨. 
            }*/
            this.classList.toggle("image-selected");
        
        }
            var img = document.createElement("img");
            img.src=data[i];
            div.appendChild(img);
            document.body.appendChild(div);

        }
    }


req.send();
function selectAll(btn){
    var images = document.getElementsByClassName("image");
 for(var i =0;i<images.length;i++){
     if(btn.value =="Unselect All"){
     images[i].classList.remove("image-selected");
 }else{
     images[i].classList.add("image-selected");
 }
}
if(btn.value == "Unselect All"){
    btn.value = "Select All";
    
}else{
btn.value = "Unselect All";
}
}