module.exports = function check(str, bracketsConfig) {

  let temp = [], new_str = str;

  for (let i = 0; i < bracketsConfig.length; i++) {
    temp.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      new_str = new_str.replace(temp[j], "");
    }
    if (new_str.length == 0) {
      return true;
    }
  }

  return false;
}