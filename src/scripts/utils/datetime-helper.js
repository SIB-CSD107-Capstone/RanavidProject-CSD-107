class DateTimeHelper {
  constructor(stringDateTime) {
    this.stringDateTime = stringDateTime;

    this.stringDateTime = this.stringDateTime.trim();
    this.stringDateTime = this.stringDateTime.split('-');
    this.stringDateTime[this.stringDateTime.length - 1] = this.stringDateTime[this.stringDateTime.length - 1].split(' ');
    const [date, month, [year, time]] = this.stringDateTime;

    this.dateTime = new Date(`${year}-${month}-${date} ${time}`);
  }

  distanceWithNow() {
    const now = new Date().getTime();
    const distance = now - this.dateTime.getTime();
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
};

export default DateTimeHelper;
