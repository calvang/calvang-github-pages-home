/*
  @author 2020-08-03 by Calvin Huang

  Tree data structure with unlimited children that point back to the parent node
  There purpose is the track DOM traversal similar to how a file system works

  @constraints
  - unlimited child nodes
  - each child knows its parent, but not its siblings
  - each parent knows all of its children
  - values are unique
*/

export class TreeNode {
  value: any;
  parent: any;
  children: {};
  numChildren: number;

  constructor(value: any, parent: TreeNode) {
    this.value = value;
    this.parent = parent;
    this.children = {};
    this.numChildren = 0;
  }

  // add new child node
  add(key: string , value: any) {
    let tmpNode = new TreeNode(value, this);
    this.children[key] = tmpNode;
    this.numChildren++;
  }

  // remove child node by key
  remove(key: string) {
    delete this.children[key];
    this.numChildren--;
  }

  // find child node by key
  find(key: string) {
    return this.children[key];
  }
}

export class Tree {
  size: number;
  current: TreeNode;

  constructor(rootVal: any) {
    this.size = 0;
    this.current = new TreeNode(rootVal, null);
  }

  // add child to current node
  push(key: string, value: any) {
    this.current.add(key, value);
    this.size++;
  }

  // remove child from current node
  pop(key: string) {
    this.current.remove(key);
    this.size++;
  }

  // go to child node with key
  traverseChild(key: string) {
    if (this.current.children[key])
      this.current = this.current.children[key];
    else
      console.error("Child node with key", key, "does not exist!");
  }

  // go to parent directory
  traverseParent() {
    if (this.current.parent)
      this.current = this.current.parent;
    else
      console.error("No parent for current node (this is probably the root node)!");
  }

  // finds key among children recursively
  // @return true if found
  find(value: any) {
    if (this.current.value === value)
      return true;
    // recursively search children
    var tmpTree = this.current;
    var returnVal: boolean = false;
    for (const key in this.current.children) {
      this.current = this.current.children[key];
      returnVal = this.find(value);
    }
    this.current = tmpTree;
    return returnVal;
  }
}