class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }
}

const myTree1 = new Tree(1);
myTree1.insertChild(2);
const myTree2 = myTree1.insertChild(3);
myTree1.insertChild(4);
myTree2.insertChild(5);
myTree2.insertChild(6);
myTree2.insertChild(7);
console.log(JSON.stringify(myTree1, null, 2));
