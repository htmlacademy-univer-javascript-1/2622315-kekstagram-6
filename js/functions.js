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