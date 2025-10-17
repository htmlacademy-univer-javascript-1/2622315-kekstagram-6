function checkStringLength(str, maxLength)
{
  return str.length <= maxLength;
}

function Palindromechecking(str)
{
 const normalStr = str.replaceAll(' ', '').toLowerCase();
  let reversStr = '';
  for (let i = normalStr.length - 1; i >= 0; i--)
  {
    reversStr += normalStr[i];
  }
  return normalStr === reversStr;
}