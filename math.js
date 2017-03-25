/*
 * Nicolás Migueles 25/3/17, free to use.
 */

// Variables
 var term = new Array;
 var vars = new Array;
 var nums = new Array;
 var termindep = new Array;
 var sumaterminosindependientes = 0;
// Funciones
 function Terminos(ecuacion){
   term = [];
   var ecu = ecuacion.replace("-", "+-");
   var t = ecu.split("+");
   for (var i in t) {
     term.push(t[i]);
   }
   console.log(term);
   return term;
 }
 function Variables(termino,numterm){
   var v = termino.split(""); //divide el termino en cada espacio literal.
   for (var y in v) {
     if (isNaN(v[y])) {
       if (v[y] == "-") {
         nums.push("-1");
       }else{
         vars.push(v[y]);
       }
     }else{
       nums.push(v[y]);
     }
   }
   var coef = 1;
   for (var i in nums) {

     coef = coef * nums[i];
   }
   coef == 1 ? "" : coef;
   var response = null;
   if (vars.length == 0) {
     if (nums.length > 1) {
       nums.slice(i);
       sumaterminosindependientes = nums[i];
     }else{
       final = parseInt(coef) + parseInt(sumaterminosindependientes);
       response = "El termino "+numterm+" es independiente: "+final;
     }

   }else{
     if (coef == 1) {
       response = "El termino "+numterm+" tiene "+ vars.length +" variable/s; El termino queda: '"+vars.join("")+"'";
     }else{
       response = "El termino "+numterm+" tiene "+ vars.length +" variable/s; y su coeficiente es "+coef+" , el termino queda: '"+coef+vars.join("")+"'";
     }

   }
   vars = [];
   nums = [];

   return response;
 }
 function AnalizarTerminos(){
   var numtermino = 0;
   for (var t in term) {
     if (Variables(term[t],numtermino) != null) {
       numtermino++;
       console.log(Variables(term[t],numtermino));
     }
   }
 }
// Prueba
Terminos("x5g4-7+4");
AnalizarTerminos();
