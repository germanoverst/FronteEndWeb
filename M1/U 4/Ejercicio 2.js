var num=[5, 6, 8, 10, 2];
var num_mayor=0;
document.write('Los números son: ', num);

for(var i=0; i<num.length ; i++) {
  if(num[i]>num_mayor){
    num_mayor=num[i];
  }

};
document.write("</br>");
document.write("</br>");
document.write('El número mayor es '+ num_mayor);
