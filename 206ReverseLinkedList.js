//given the head of a singly linked list, reverse the list and RETURN THE REVERSED LIST.
//translate => iterate throught the orginal list, and building the new list from end to start.

/*
Definition for singly-linked list.
     function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }
*/

// var firstAttempt = function(head) {
//     head = head.reverse();
//     let list = null
//     for (let node in head){
//         list = {
//             value: node,
//             rest: list
//         };
//     };
//     return list
// };


var reverseList = function(head){
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
};

var easyIterate = function(head){
    let [prev, current] = [null,head];
    while(current){
        let nxt = current.next
        current.next = prev
        prev = current
        current = nxt  
    }
    return prev
};

console.log(reverseList([1,2,3,4,5,6]));
