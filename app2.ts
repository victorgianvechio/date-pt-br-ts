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

enum Language {
  PT_BR = "pt_BR",
  EN = "en",
  FR = "fr",
  ES = "es",
  DE = "de",
}

export const PT_BR = Language.PT_BR;
export const EN = Language.EN;
export const FR = Language.FR;
export const ES = Language.ES;
export const DE = Language.DE;

class DatePtBR {
  // Date and Time variables
  private day: number;
  private strDay: string;
  private monthNumber: number;
  private strMonthNumber: string;
  private month: string;
  private year: number;
  private weekdayNumber: number;
  private weekday: string;
  private hour: number;
  private strHour: string;
  private minute: number;
  private strMinute: string;
  private second: number;
  private strSecond: string;
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

  constructor(lang: Language) {
    // Date and Time variables
    this.day = 0;
    this.strDay = "";
    this.monthNumber = 0;
    this.strMonthNumber = "";
    this.month = "";
    this.year = 0;
    this.weekdayNumber = 0;
    this.weekday = "";
    this.hour = 0;
    this.strHour = "";
    this.minute = 0;
    this.strMinute = "";
    this.second = 0;
    this.strSecond = "";
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
    this.invalidDate = "Invalid Date";

    // Config variables
    this.delimiterDate = "";
    this.delimiterTime = "";
    this.sepDateTime = "";
    this.sepDate = "";
    this.sepTime = "";

    // Config variables
    this.setDefaultConfig(lang);
  }

  // Set default config variables
  public setDefaultConfig(lang: Language): void {
    if (lang === "pt_BR") {
      this.delimiterDate = "/";
      this.delimiterTime = ":";
      this.sepDateTime = ", ";
      this.sepDate = " de ";
      this.sepTime = " e ";
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
      this.isValidDate = true;
      this.date = new Date(date);

      if (this.date.toString() === "Invalid Date") {
        throw new Error(`${date} is not a valid date`);
      }

      this.day = this.date.getDate();
      this.monthNumber = this.date.getMonth() + 1;
      this.year = this.date.getFullYear();
      this.weekdayNumber = this.date.getDay() + 1;
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();

      if (this.day.toString().length === 1) {
        this.strDay = "0" + this.day.toString();
      } else this.strDay = this.day.toString();

      if (this.monthNumber.toString().length === 1) {
        this.strMonthNumber = "0" + this.monthNumber.toString();
      } else this.strMonthNumber = this.monthNumber.toString();

      if (this.hour.toString().length === 1) {
        this.strHour = "0" + this.hour.toString();
      } else this.strHour = this.hour.toString();

      if (this.minute.toString().length === 1) {
        this.strMinute = "0" + this.minute.toString();
      } else this.strMinute = this.minute.toString();

      if (this.second.toString().length === 1) {
        this.strSecond = "0" + this.second.toString();
      } else this.strSecond = this.second.toString();

      if (this.hour !== 1) this.descHour = "horas";
      else this.descHour = "hora";

      if (this.minute !== 1) this.descMinute = "minutos";
      else this.descMinute = "minuto";

      if (this.second !== 1) this.descSecond = "segundos";
      else this.descSecond = "segundo";

      switch (this.weekdayNumber) {
        case 1:
          this.weekday = "domingo";
          break;
        case 2:
          this.weekday = "segunda";
          break;
        case 3:
          this.weekday = "terça";
          break;
        case 4:
          this.weekday = "quarta";
          break;
        case 5:
          this.weekday = "quinta";
          break;
        case 6:
          this.weekday = "sexta";
          break;
        case 7:
          this.weekday = "sábado";
          break;
      }

      switch (this.monthNumber) {
        case 1:
          this.month = "janeiro";
          break;
        case 2:
          this.month = "fevereiro";
          break;
        case 3:
          this.month = "março";
          break;
        case 4:
          this.month = "abril";
          break;
        case 5:
          this.month = "maio";
          break;
        case 6:
          this.month = "junho";
          break;
        case 7:
          this.month = "julho";
          break;
        case 8:
          this.month = "agosto";
          break;
        case 9:
          this.month = "setembro";
          break;
        case 10:
          this.month = "outubro";
          break;
        case 11:
          this.month = "novembro";
          break;
        case 12:
          this.month = "dezembro";
          break;
      }
    } catch (err) {
      this.isValidDate = false;
    }
  }

  // Date Functions
  public getDay(date = new Date()): number | string {
    this.dateNow(date);
    return this.isValidDate ? this.day : this.invalidDate;
  }

  public getMonthNumber(date = new Date()): number | string {
    this.dateNow(date);
    return this.isValidDate ? this.monthNumber : this.invalidDate;
  }

  public getMonth(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate ? this.month : this.invalidDate;
  }

  public getShortMonth(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate ? this.month.substr(0, 3) : this.invalidDate;
  }

  public getYear(date = new Date()): number | string {
    this.dateNow(date);
    return this.isValidDate ? this.year : this.invalidDate;
  }

  public getShortYear(date = new Date()): number | string {
    this.dateNow(date);
    return this.isValidDate
      ? Number(this.year.toString().substr(2, 2))
      : this.invalidDate;
  }

  public getWeekdayNumber(date = new Date()): number | string {
    this.dateNow(date);
    return this.isValidDate ? this.weekdayNumber : this.invalidDate;
  }

  public getWeekday(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate ? this.weekday : this.invalidDate;
  }

  public getShortWeekday(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate ? this.weekday.substr(0, 3) : this.invalidDate;
  }

  public getDate(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strDay}${this.delimiterDate}${this.strMonthNumber}${this.delimiterDate}${this.year}`
      : this.invalidDate;
  }

  public getExtendedDate(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strDay}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  public getExtendedWeekdayDate(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.weekday}, ${this.strDay}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  public getMonthYear(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.month}${this.delimiterDate}${this.year}`
      : this.invalidDate;
  }

  public getShortMonthYear(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.month.substr(0, 3)}${this.delimiterDate}${this.year}`
      : this.invalidDate;
  }

  public getShortMonthShortYear(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.month.substr(0, 3)}${this.delimiterDate}${
        this.year.toString().substr(
          2,
          4,
        )
      }`
      : this.invalidDate;
  }

  public getMonthNumberYear(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strMonthNumber}${this.delimiterDate}${this.year}`
      : this.invalidDate;
  }

  public getHour(date = new Date()): number | string {
    this.dateNow(date);
    return this.isValidDate ? this.hour : this.invalidDate;
  }

  public getExtendedHour(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strHour} ${this.descHour}`
      : this.invalidDate;
  }

  public getMinute(date = new Date()): number | string {
    this.dateNow(date);
    return this.isValidDate ? this.minute : this.invalidDate;
  }

  public getExtendedMinute(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strMinute} ${this.descMinute}`
      : this.invalidDate;
  }

  public getSecond(date = new Date()): number | string {
    this.dateNow(date);
    return this.isValidDate ? this.second : this.invalidDate;
  }

  public getExtendedSecond(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strSecond} ${this.descSecond}`
      : this.invalidDate;
  }

  public getTime(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strHour}${this.delimiterTime}${this.strMinute}${this.delimiterTime}${this.strSecond}`
      : this.invalidDate;
  }

  public getHourMinute(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strHour}${this.delimiterTime}${this.strMinute}`
      : this.invalidDate;
  }

  public getExtendedTime(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strHour} ${this.descHour}${this.sepTime}${this.strMinute} ${this.descMinute}${this.sepTime}${this.strSecond} ${this.descSecond}`
      : this.invalidDate;
  }

  public getExtendedHourMinute(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strHour} ${this.descHour}${this.sepTime}${this.strMinute} ${this.descMinute}`
      : this.invalidDate;
  }

  public getDateTime(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strDay}${this.delimiterDate}${this.strMonthNumber}${this.delimiterDate}${this.year}${this.sepDateTime}${this.strHour}${this.delimiterTime}${this.strMinute}${this.delimiterTime}${this.strSecond}`
      : this.invalidDate;
  }

  public getExtendedDateTime(date = new Date()): string {
    this.dateNow(date);
    return this.isValidDate
      ? `${this.strDay}${this.sepDate}${this.month}${this.sepDate}${this.year}${this.sepDateTime}${this.strHour} ${this.descHour}${this.sepTime}${this.strMinute} ${this.descMinute}${this.sepTime}${this.strSecond} ${this.descSecond}`
      : this.invalidDate;
  }

  public async getExtendedCityDate(date = new Date()): Promise<string> {
    this.dateNow(date);
    await this.getCity();
    return this.isValidDate
      ? `${this.city}, ${this.strDay}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  public async getExtendedRegionDate(date = new Date()): Promise<string> {
    this.dateNow(date);
    await this.getRegion();
    return this.isValidDate
      ? `${this.region}, ${this.strDay}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  public async getExtendedShortRegionDate(date = new Date()): Promise<string> {
    this.dateNow(date);
    await this.getShortRegion();
    return this.isValidDate
      ? `${this.shortRegion}, ${this.strDay}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  public async getExtendedCountryDate(date = new Date()): Promise<string> {
    this.dateNow(date);
    await this.getCountry();
    return this.isValidDate
      ? `${this.country}, ${this.strDay}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  public async getExtendedShortCountryDate(date = new Date()): Promise<string> {
    this.dateNow(date);
    await this.getCountryCode();
    return this.isValidDate
      ? `${this.countryCode}, ${this.strDay}${this.sepDate}${this.month}${this.sepDate}${this.year}`
      : this.invalidDate;
  }

  public async getCity(): Promise<string> {
    if (this.city === "") await this.getLocaleInfo();
    return this.city;
  }

  public async getRegion(): Promise<string> {
    if (this.region === "") await this.getLocaleInfo();
    return this.region;
  }

  public async getShortRegion(): Promise<string> {
    if (this.shortRegion === "") await this.getLocaleInfo();
    return this.shortRegion;
  }

  public async getCountry(): Promise<string> {
    if (this.country === "") await this.getLocaleInfo();
    return this.country;
  }

  public async getCountryCode(): Promise<string> {
    if (this.countryCode === "") await this.getLocaleInfo();
    return this.countryCode;
  }

  public async getTimezone(): Promise<string> {
    if (this.timezone === "") await this.getLocaleInfo();
    return this.timezone;
  }

  public async getZipcode(): Promise<string> {
    if (this.zipcode === "") await this.getLocaleInfo();
    return this.zipcode;
  }

  private capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1);
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

  public async formatPattern(pattern: string, date = new Date()): Promise<string> {
    this.dateNow(date);
    await this.getLocaleInfo();
    let formattedDate = pattern;

    // Full Date
    formattedDate = formattedDate.replace("'date'", this.getDate()); // => 25/02/2020

    // Full time
    formattedDate = formattedDate.replace("'time'", this.getTime()); // => 15:21:03

    // Day
    formattedDate = formattedDate.replace("'d'", this.day.toString()); // => 1, 2
    formattedDate = formattedDate.replace("'dd'", this.strDay); // => 01, 02

    // Month
    formattedDate = formattedDate.replace("'m'", this.monthNumber.toString()); // => 1, 2
    formattedDate = formattedDate.replace("'mm'", this.strMonthNumber); // => 01, 02
    formattedDate = formattedDate.replace("'mmm'", this.getShortMonth()); // => jan
    formattedDate = formattedDate.replace("'mmmm'", this.month); // => janeiro
    formattedDate = formattedDate.replace(
      "'MMM'",
      this.capitalize(this.getShortMonth()),
    ); // => Jan
    formattedDate = formattedDate.replace(
      "'MMMM'",
      this.capitalize(this.month),
    ); // => Janeiro

    // Year
    formattedDate = formattedDate.replace("'yyyy'", this.year.toString()); // => 2020
    formattedDate = formattedDate.replace("'yy'", this.getShortYear.toString()); // => 20

    // Week
    formattedDate = formattedDate.replace("'w'", this.weekdayNumber.toString()); // => 1,2,3
    formattedDate = formattedDate.replace("'ww'", this.getShortWeekday()); // => seg, ter, qua
    formattedDate = formattedDate.replace("'www'", this.weekday); // => segunda, terça, quarta
    formattedDate = formattedDate.replace("'wwww'", this.weekday + "-feira"); // => segunda-feira, terça-feira, quarta-feira
    formattedDate = formattedDate.replace(
      "'WW'",
      this.capitalize(this.getShortWeekday()),
    ); // => Seg, Ter, Qua
    formattedDate = formattedDate.replace(
      "'WWW'",
      this.capitalize(this.weekday),
    ); // => Segunda, Terça, Quarta
    formattedDate = formattedDate.replace(
      "'WWWW'",
      this.capitalize(this.weekday) + "-feira",
    ); // => Segunda-feira, Terça-feira, Quarta-feira

    // Hour
    formattedDate = formattedDate.replace("'h'", this.hour.toString()); // => 1,2,3
    formattedDate = formattedDate.replace("'hh'", this.strHour); // => 01,02,03
    formattedDate = formattedDate.replace(
      "'hhh'",
      this.hour.toString() + this.descHour,
    ); // => 1 hour, 10 hours
    formattedDate = formattedDate.replace(
      "'hhhh'",
      this.strHour + this.descHour,
    ); // => 01 hour, 10 hours
    formattedDate = formattedDate.replace(
      "'HHH'",
      this.hour.toString() + this.capitalize(this.descHour),
    ); // => 1 Hour, 10 Hours
    formattedDate = formattedDate.replace(
      "'HHHH'",
      this.strHour + this.capitalize(this.descHour),
    ); // => 01 Hour, 10 Hours

    // Minute
    formattedDate = formattedDate.replace("'i'", this.minute.toString()); // => 1,2,3
    formattedDate = formattedDate.replace("'ii'", this.strMinute); // => 01,02,03
    formattedDate = formattedDate.replace(
      "'iii'",
      this.minute.toString() + this.descMinute,
    ); // => 1 minute, 10 minutes
    formattedDate = formattedDate.replace(
      "'iiii'",
      this.strMinute + this.descMinute,
    ); // => 01 minute, 10 minutes
    formattedDate = formattedDate.replace(
      "'III'",
      this.minute.toString() + this.capitalize(this.descMinute),
    ); // => 1 Minute, 10 Minutes
    formattedDate = formattedDate.replace(
      "'IIII'",
      this.strMinute + this.capitalize(this.descMinute),
    ); // => 01 Minute, 10 Minutes

    // Second
    formattedDate = formattedDate.replace("'s'", this.second.toString()); // => 1,2,3
    formattedDate = formattedDate.replace("'ss'", this.strSecond); // => 01,02,03
    formattedDate = formattedDate.replace(
      "'sss'",
      this.second.toString() + this.descSecond,
    ); // => 1 second, 10 seconds
    formattedDate = formattedDate.replace(
      "'ssss'",
      this.strSecond + this.descSecond,
    ); // => 01 second, 10 seconds
    formattedDate = formattedDate.replace(
      "'SSS'",
      this.second.toString() + this.capitalize(this.descSecond),
    ); // => 1 Second, 10 Seconds
    formattedDate = formattedDate.replace(
      "'SSSS'",
      this.strSecond + this.capitalize(this.descSecond),
    ); // => 01 Second, 10 Seconds

    // City
    formattedDate = formattedDate.replace("'city'", this.city); // => Marília

    // Region
    formattedDate = formattedDate.replace("'region'", this.region); // => São Paulo
    formattedDate = formattedDate.replace("'reg'", this.shortRegion); // => SP

    // Country
    formattedDate = formattedDate.replace("'country'", this.country); // => Brazil
    formattedDate = formattedDate.replace("'countryCode'", this.countryCode); // => BR

    return formattedDate;
  }
}

// export default new DatePtBR(language.PT_BR);
export default DatePtBR;