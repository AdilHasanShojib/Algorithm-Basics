// step Print Algorithm



function staricase(n){

 let result="";
   

 for(let row=0;row<n;row++){
     let stairs="";

     for(let col=0;col<n;col++){
   
        if(col<=row){
            stairs +="#";
        }

       else{
          
        stairs +="-";
       }
     }

      result +=stairs+"<br>";
 }


   return result;

}

 documrnt.getElementById("result").innerHTML= staricase(4); 

 // output:
 //        #---
 //        ##--
 //        ###-
 //        ####

 // Pyramid ALgorithm

function Pyramid(n){
    let result="";
   const midpoint=Math.floor((2*n-1)/2);
    for(let row=0;row<n;row++){
        let level="";
   
        for(let col=0;col<2*n-1;col++){
      
           if( midpoint-row<=col && midpoint+row>=col){
               level +="#";
           }
   
          else{
             
           level +="-";
          }
        }
   
         result +=level+"<br>";
    }
   
   
      return result;




}

// Find Vowels


function findVowels(str){

let count =0;
const vowels= "aeiou";

for(let char of str.toLowerCase()){
    if(vowels.includes(char)) count++;
}



return count;



}