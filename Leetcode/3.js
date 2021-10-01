/**
 * 3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.
 */

 let set = new Set();
 let max = 0;
 let slow = 0;
 let fast = 0;
 while(fast < s.length) {
     while(set.has(s[fast])) {
         set.delete(s[slow]);
         slow++;
     }
     
     set.add(s[fast]);
     max = Math.max(max, fast-slow+1)
     fast++;
 }
 return max;