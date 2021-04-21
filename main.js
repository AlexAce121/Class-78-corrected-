var names= ["Manvi" , "Naveen" , "Mahi" , "Leo"];
var images  = ["manvi.jpg" , "naveen.jpg" , "mahi.jpg" , "leo.jpg"];
var i = 0;
var o = 0;
function change(){
   if(i==4){
i=0;
   }
   document.getElementById("IMAGES").src = images[i];
   i++;

   if(o==4){
      o=0;
         }
         document.getElementById("invincible").innerHTML = names[o];
         o++;
}