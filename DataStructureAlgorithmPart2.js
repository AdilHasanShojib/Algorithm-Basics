class Tree{

  constructor(){

    this.root= null;



  }

  traversBFS(fn){

    const arr =[this.root];
    while(arr.length){

      const node=arr.shift();
      arr.push(...node.children);
      fn(node)  
    }
  }

  traversDFS(fn){

    const arr =[this.root];
    while(arr.length){

      const node=arr.unshift();
      arr.push(...node.children);
      fn(node)  
    }
  }




}

function levelWidth(root){

  const arr=[root,'r'];
  const counter=[0];

  while(arr.length>1){

    const node=arr.shift();
    if(node=='r'){
      counter.push(0);
      arr.push('r');

    }
    
    else{

        arr.push(...node.children);
        counter[counter.length-1]++;


    }




  }
   


}


const num1=[];
const num2=[];
const tree=new Tree()
tree.root= new TreeNode(1);

tree.root,add(4);
tree.root,add(4);
tree.root,add(4);
tree.root,add(4);
tree.root.children[2].add(44);
tree.root.children[2].add(45);
tree.root.children[2].add(46);

console.log(tree.root);

tree.traversBFS(node =>{
  number2.push(node.data);

})