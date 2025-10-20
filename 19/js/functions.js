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


function isMeetingWithinWorkday(startDay, endDay, meetingStart, meetingTime) {
    const timeMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    const workStart = timeMinutes(startDay);
    const workEnd = timeMinutes(endDay);

    const meetingStartMinutes = timeMinutes(meetingStart);
    const meetingEndMinutes = meetingStartMinutes + meetingTime;

    return meetingStartMinutes >= workStart && meetingEndMinutes <= workEnd;
}