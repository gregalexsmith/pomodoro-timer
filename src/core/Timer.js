class Timer {
  constructor({name, duration, successMessage, message}) {
    this.name = name;
    this.duration = duration;
    this.successMessage = successMessage;
    this.messages = message;
  }

  getMessage(count) {
    if (typeof this.messages === 'string') return this.messages;
    else if (this.messages instanceof Array && isNumeric(count)) {
      const result = this.messages[count - 1];
      return typeof result === 'string' ? result : this.messages[0];
    }

    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  }
}

export default Timer;