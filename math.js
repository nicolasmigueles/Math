/*
 * Nicolás Migueles 25/3/17, free to use.
 */

// Variables

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
 var term = new Array;
 var vars = new Array;
 var nums = new Array;
 var termindep = new Array;
 var newterm = new Array;
 var sumaterminosindependientes = 0;
 var final = null;
 var finalvars = new Array;
 var negative = false;
// Funciones
 function Terminos(ecuacion){
   term = [];
   var ecu = ecuacion.replaceAll("-", "+-");
   if (ecu[0] == "+") {
     //correccion de algoritmo por si la cadena empieza con -
     //es reemplazado innecesariamente y sepera en un termino que no existe.
     ecu = ecu.substr(1);
   }
   console.log(ecu);
   var t = ecu.split("+");
   for (var i in t) {
     term.push(t[i]);
   }
   //console.log(term);
   console.info("Se analiza la operación: "+ecuacion);
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
      go = nums[0];
       for (var o in nums) {
         if (nums[0] == -1) {
           go = nums[1]* (-1);
         }
       }
       termindep.push(parseFloat(go));
   }else{
     if (coef == 1) {
       response = "El termino "+numterm+" tiene "+ vars.length +" variable/s; El termino queda: '"+vars.join("")+"'";
       if (!finalvars.includes(vars.join(""))) {
         finalvars.push(vars.join(""));
       }
     }else{
       response = "El termino "+numterm+" tiene "+ vars.length +" variable/s; y su coeficiente es "+coef+" , el termino queda: '"+coef+vars.join("")+"'";
       if (!finalvars.includes(coef+vars.join(""))) {
         finalvars.push(coef+vars.join(""));
       }
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
   if (finalvars  != null) {
     newterm.push(finalvars.join("+"));
   }
   // Se guarda el termino indep
   final = termindep.reduce(function(valorAnterior, valorActual, indice, vector){
     var responsebro = valorAnterior + valorActual;
       if (responsebro == 0) {
         return null;
       }else{
       return responsebro;
       }
   });
   if (final != null) {
     newterm.push(final);
   }else{
     console.log("El termino independiente se elimina ya que da 0.");
   }
   var splitnewterm = newterm.join("+");
   console.info(splitnewterm);
 }
 function Operar(x,y){
   // opera dos numeros.
   x == null ? x = 0 : x;
   y == null ? y = 0 : y;
   return parseFloat(x) + parseFloat(y);
 }


// Prueba
Terminos("-3f-2x-7");
AnalizarTerminos();

// falta al poner dos numeros juntos que no los multiplique.
