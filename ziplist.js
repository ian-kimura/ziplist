function ziplist(list1, list2) {
  const tempList = [];
  for (let i = 0; i < list1.length; i++) {
    tempList.push(list1[i]);
    tempList.push(list2[i]);
  }
  return tempList;
}

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];
console.log(ziplist(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testList1, testList2));
