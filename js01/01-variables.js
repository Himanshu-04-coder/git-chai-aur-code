const accountId = "122355433"
let accountName = "Himanshu"
var accountCity = "New Delhi"
accountNo = "abcde"
console.log(accountId);
console.table([accountCity,accountId,accountName,accountNo]);


accountCity = "Raipur"
// accountId = "46372883" " Constant are not allowed to change "
/*
 Please do not use var keywords because of scope issue.
*/
console.table([accountCity,accountId,accountName,accountNo]);
