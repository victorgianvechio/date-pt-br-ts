interface ApiData {
  city: string;
  regionName: string;
  region: string;
  country: string;
  countryCode: string;
  timezone: string;
  zip: string;
}

interface CfgData {
  delimiterDate: string;
  delimiterTime: string;
  sepDateTime: string;
  sepDate: string;
  sepTime: string;
}

class DatePtBR {
  // Date and Time variables
  private day: string;
  private monthNumber: string;
  private month: string;
  private year: string;
  private weekdayNumber: string;
  private weekday: string;
  private hour: string;
  private minute: string;
  private second: string;
  private descHour: string;
  private descMinute: string;
  private descSecond: string;
  private date: Date;

  // Locale variables
  private city: string;
  private region: string;
  private shortRegion: string;
  private country: string;
  private countryCode: string;
  private timezone: string;
  private zipcode: string;

  // Date validations variables
  private isValidDate: boolean;
  private invalidDate: string;

  // Config variables
  private delimiterDate: string;
  private delimiterTime: string;
  private sepDateTime: string;
  private sepDate: string;
  private sepTime: string;

  constructor() {
    // Date and Time variables
    this.day = "";
    this.monthNumber = "";
    this.month = "";
    this.year = "";
    this.weekdayNumber = "";
    this.weekday = "";
    this.hour = "";
    this.minute = "";
    this.second = "";
    this.descHour = "";
    this.descMinute = "";
    this.descSecond = "";
    this.date = new Date();

    // Locale variables
    this.city = "";
    this.region = "";
    this.shortRegion = "";
    this.country = "";
    this.countryCode = "";
    this.timezone = "";
    this.zipcode = "";

    // Date validations variables
    this.isValidDate = true;
    this.invalidDate = "";

    // Config variables
    this.delimiterDate = "";
    this.delimiterTime = "";
    this.sepDateTime = "";
    this.sepDate = "";
    this.sepTime = "";

    // Config variables
    this.setDefaultConfig();
  }

  // Set default config variables
  public setDefaultConfig(): void {
    switch (this.countryCode) {
      case "BR":
        this.delimiterDate = "/";
        this.delimiterTime = ":";
        this.sepDateTime = ", ";
        this.sepDate = " de ";
        this.sepTime = " e ";
        break;
      case "EN":
        this.delimiterDate = "/";
        this.delimiterTime = ":";
        this.sepDateTime = ", ";
        this.sepDate = " of ";
        this.sepTime = " and ";
        break;
    }
  }

  // Set new config
  public setConfig(cfg: CfgData): void {
    this.delimiterDate = cfg.delimiterDate;
    this.delimiterTime = cfg.delimiterTime;
    this.sepDateTime = cfg.sepDateTime;
    this.sepDate = cfg.sepDate;
    this.sepTime = cfg.sepTime;
  }

  private dateNow(date: Date): void {
    try {
      this.isValidDate = true
      this.date = new Date(date)

      if (this.invalidDate === 'Invalid Date') throw new Error(`${date} is not a valid date`)

      this.day = String(this.date.getDate());
      this.monthNumber = String(this.date.getMonth() + 1);
      this.year = String(this.date.getFullYear());
      this.weekdayNumber = String(this.date.getDay() + 1);
      this.hour = String(this.date.getHours());
      this.minute = String(this.date.getMinutes());
      this.second = String(this.date.getSeconds());

      if (this.day.toString().length === 1) this.day = '0' + this.day

      if (this.monthNumber.toString().length === 1) this.monthNumber = '0' + this.monthNumber

      if (this.hour.toString().length === 1) this.hour = '0' + this.hour

      if (this.minute.toString().length === 1) this.minute = '0' + this.minute

      if (this.second.toString().length === 1) this.second = '0' + this.second

      if (this.hour !== '01') this.descHour = 'horas'
      else this.descHour = 'hora'

      if (this.minute !== '01') this.descMinute = 'minutos'
      else this.descMinute = 'minuto'

      if (this.second !== '01') this.descSecond = 'segundos'
      else this.descSecond = 'segundo'

      switch (this.weekdayNumber) {
        case 1:
          this.weekday = 'Domingo'
          break
        case 2:
          this.weekday = 'Segunda-Feira'
          break
        case 3:
          this.weekday = 'Terça-Feira'
          break
        case 4:
          this.weekday = 'Quarta-Feira'
          break
        case 5:
          this.weekday = 'Quinta-Feira'
          break
        case 6:
          this.weekday = 'Sexta-Feira'
          break
        case 7:
          this.weekday = 'Sábado'
          break
      }

      switch (String(this.monthNumber)) {
        case '01':
          this.month = 'Janeiro'
          break
        case '02':
          this.month = 'Fevereiro'
          break
        case '03':
          this.month = 'Março'
          break
        case '04':
          this.month = 'Abril'
          break
        case '05':
          this.month = 'Maio'
          break
        case '06':
          this.month = 'Junho'
          break
        case '07':
          this.month = 'Julho'
          break
        case '08':
          this.month = 'Agosto'
          break
        case '09':
          this.month = 'Setembro'
          break
        case '10':
          this.month = 'Outubro'
          break
        case '11':
          this.month = 'Novembro'
          break
        case '12':
          this.month = 'Dezembro'
          break
      }
    } catch (err) {
        this.isDateValid = false
    }
  }

  // Date Functions
  getDay(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid ? this.day : this.invalidDate;
  }

  getMonthNumber(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid ? this.monthNumber : this.invalidDate;
  }

  getMonth(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid ? this.month : this.invalidDate;
  }

  getShortMonth(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? String(this.month).substr(0, 3)
      : this.invalidDate;
  }

  getYear(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid ? this.year : this.invalidDate;
  }

  getShortYear(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid ? String(this.year).substr(2, 4) : this.invalidDate;
  }

  getWeekdayNumber(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid ? this.weekdayNumber : this.invalidDate;
  }

  getWeekday(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid ? this.weekday : this.invalidDate;
  }

  getDate(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.day}${this.delimiterDate}${this.monthNumber}${this.delimiterDate}${this.year}`
      : this.invalidDate;
  }

  getExtendedDate(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  getExtendedWeekdayDate(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.weekday}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  getMonthYear(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.month}${this.delimiterDate}${this.year}`
      : this.invalidDate;
  }

  getShortMonthYear(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${String(this.month).substr(0, 3)}${this.delimiterDate}${this.year}`
      : this.invalidDate;
  }

  getShortMonthShortYear(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${String(this.month).substr(0, 3)}${this.delimiterDate}${
        String(this.year).substr(
          2,
          4,
        )
      }`
      : this.invalidDate;
  }

  getMonthNumberYear(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.monthNumber}${this.delimiterDate}${this.year}`
      : this.invalidDate;
  }

  getHour(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid ? this.hour : this.invalidDate;
  }

  getExtendedHour(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.hour} ${this.descHour}`
      : this.invalidDate;
  }

  getMinute(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid ? this.minute : this.invalidDate;
  }

  getExtendedMinute(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.minute} ${this.descMinute}`
      : this.invalidDate;
  }

  getSecond(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid ? this.second : this.invalidDate;
  }

  getExtendedSecond(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.second} ${this.descSecond}`
      : this.invalidDate;
  }

  getTime(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.hour}${this.delimiterTime}${this.minute}${this.delimiterTime}${this.second}`
      : this.invalidDate;
  }

  getHourMinute(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.hour}${this.delimiterTime}${this.minute}`
      : this.invalidDate;
  }

  getExtendedTime(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.hour} ${this.descHour}${this.sepTime}${this.minute} ${this.descMinute}${this.sepTime}${this.second} ${this.descSecond}`
      : this.invalidDate;
  }

  getExtendedHourMinute(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.hour} ${this.descHour}${this.sepTime}${this.minute} ${this.descMinute}`
      : this.invalidDate;
  }

  getDateTime(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.day}${this.delimiterDate}${this.monthNumber}${this.delimiterDate}${this.year}${this.sepDateTime}${this.hour}${this.delimiterTime}${this.minute}${this.delimiterTime}${this.second}`
      : this.invalidDate;
  }

  getExtendedDateTime(date = new Date()) {
    this.dateNow(date);
    return this.isDateValid
      ? `${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}${this.sepDateTime}${this.hour} ${this.descHour}${this.sepTime}${this.minute} ${this.descMinute}${this.sepTime}${this.second} ${this.descSecond}`
      : this.invalidDate;
  }

  async getExtendedCityDate(date = new Date()) {
    this.dateNow(date);
    await this.getCity();
    return this.isDateValid
      ? `${this.city}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  async getExtendedRegionDate(date = new Date()) {
    this.dateNow(date);
    await this.getRegion();
    return this.isDateValid
      ? `${this.region}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  async getExtendedShortRegionDate(date = new Date()) {
    this.dateNow(date);
    await this.getShortRegion();
    return this.isDateValid
      ? `${this.shortRegion}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  async getExtendedCountryDate(date = new Date()) {
    this.dateNow(date);
    await this.getCountry();
    return this.isDateValid
      ? `${this.country}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  async getExtendedShortCountryDate(date = new Date()) {
    this.dateNow(date);
    await this.getShortCountry();
    return this.isDateValid
      ? `${this.shortCountry}, ${this.day}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  async getCity() {
    if (this.city === "") await this.getLocaleInfo();
    return this.city;
  }

  async getRegion() {
    if (this.region === "") await this.getLocaleInfo();
    return this.region;
  }

  async getShortRegion() {
    if (this.shortRegion === "") await this.getLocaleInfo();
    return this.shortRegion;
  }

  async getCountry() {
    if (this.country === "") await this.getLocaleInfo();
    return this.country;
  }

  async getShortCountry() {
    if (this.shortCountry === "") await this.getLocaleInfo();
    return this.shortCountry;
  }

  async getTimezone() {
    if (this.timezone === "") await this.getLocaleInfo();
    return this.timezone;
  }

  async getZipcode() {
    if (this.zipcode === "") await this.getLocaleInfo();
    return this.zipcode;
  }

  private async getLocaleInfo(): Promise<void> {
    const data: ApiData = await (await fetch("http://ip-api.com/json")).json();

    this.city = data.city;
    this.region = data.regionName;
    this.shortRegion = data.region;
    this.country = data.country;
    this.countryCode = data.countryCode;
    this.timezone = data.timezone;
    this.zipcode = data.zip;
  }
}

export default new DatePtBR();
