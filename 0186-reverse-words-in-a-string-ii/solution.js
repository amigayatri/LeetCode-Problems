const reverseWords = function(s) {
   let temp = s.join('').split(' ').reverse().join(' ').split('');
   return s.splice(0,s.length, ...temp);
};
