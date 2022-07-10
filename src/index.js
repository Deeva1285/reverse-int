module.exports = function reverse (n) {
  
  let a = n.toString();
  let rev = "";
  for (let i = a.length-1; i >=0; i--) rev+=a[i];
  return parseInt(rev);

}
