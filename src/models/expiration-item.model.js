export default class ExpirationItem {
  constructor({ id = null,
    name = null,
    expirationDate = null,
  } = {}) {
    this.id = id;
    this.name = name;
    this.expirationDate = expirationDate;
  }

  daysLeft() {
    if (this.expirationDate == null) return null;

    const timeLeft = this.expirationDate - Date.now();
    const timeInDay = 1000 * 60 * 60 * 24;

    return Math.ceil(timeLeft / timeInDay);
  }
}
