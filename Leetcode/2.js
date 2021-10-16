/**
 * 2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

var addTwoNumbers = function(l1, l2) {
    let newNode = new ListNode(0);
    let head3 = newNode;
    let head1 = l1;
    let head2 = l2;
    let carry = 0;
    let sum;
    while(head1 || head2) {
        
        if(head1) {
            head3.val += head1.val;
        }
        if(head2) {
            head3.val += head2.val;
        }
        
        if(head3.val >= 10) {
            head3.val -= 10;
            carry = 1;
        }
        
        if(head1) head1 = head1.next;
        if(head2) head2 = head2.next;
        if(head1 || head2) {
            head3.next = new ListNode(carry);
            head3 = head3.next;
        }
        if(!head1 && !head2 && carry === 1 ) {
            head3.next = new ListNode(carry)
        }
        carry = 0;
    }
    

    
    return newNode;
};