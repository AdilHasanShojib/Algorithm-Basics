// ANAGRAM 
//HELPER FUNCTION (buildchar(string))
//step 1: Initialized an empty object
//step 2: remove any special character (including spaces) by using regular expressions
//step 3:Convert the clean string into lowercase
//step 4: Iterate over each character key is exists in the 'charater'
//step 5: check each character key is exists in the character
//    if it does, increment its frequency count to 1 in the 'charmap'
//    if doesn't, set its frequency count to 1 in the 'charmap'
//step 6: return charMap OBJECT

//MainFunction Anagrams function
//step 7: call the 'Helper function (buildChar(stringA)), store in 'CharMapA'
//step 8: call the 'Helper function (buildChar(stringB)), store in 'CharMapB'
//step 9: check num of unique keys(character) in 'CharmapA' == 'CharMapB'
//        if doesnt return false
//step 10: Iterate through each character in 'CharMapA'
//step 11: for each character, check if the frequency count of characters 'charmapA'== 'CharMapB'
//        if doesn't return false
//Step 12: After loop complete, return true


function builChar(str){


const charMap={};


for(let char of str.replace(/[^\w]/g,"").toLowerCase()){
    charMap[char]=charMap[char]+1 || 1;
}
   return charMap;

}

function checkAnagram(strA,strB){


    let charMapA= builChar(strA);
    let charMapB= builChar(strB);

  if(Object.keys(charMapA).length !== Object.keys(charMapB).length ){

    return false;
  }

   for(let char in charMapA){

      if(charMapA[char] !== charMapB[char]){
        return false;
      }

   }



   return true;




}

// Array Chunk 
// step 1: create empty array 0 hold all chunks (sub-array) called 'Chunked'
// step 2: for each element in the unchunked array
// step 3: retrive the last element in 'chunked'
// step 4: if last element doesn't exist,
//         or if its length equal t chunked size
//step 5: push new chunk into 'chunked' with the current element  
//step 6: else the current element into the last chunk

function ArrayChunk(arr,chunk){

let chunked =[];

for(let element of arr){

  let lastElement = chunked[chunked.length -1];
   if(!lastElement || lastElement.length == chunk){

       chunked.push([element]);


   }
 else{
         lastElement.push(element);
 }


     return chunked;


}

}

console.table(ArrayChunk([1,3,45,6,2,7,8,0,11],3));