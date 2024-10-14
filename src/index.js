import { LinkedList } from "./linkedLists.js";

//test
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("dragon");

console.log(list.size());
console.log(list.toString());
console.log(list.headNode());
console.log(list.tailNode());
console.log(list.at(2));
list.pop();
console.log(list.toString());
console.log(list.contains("snake"));

console.log(list.find("snake"));

list.insertAt("lamb", 3);
console.log(list.toString());

list.removeAt(4);
console.log(list.toString());
