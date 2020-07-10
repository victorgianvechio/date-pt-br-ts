import {
  LanguageType,
  pt_BR,
  EN,
  DE,
  FR,
  ES,
} from "./lib/languages/index.ts";

// Deno.readTextFile('./languages/pt_BR.json').then(data => {
//   const d = JSON.parse(data);
//   console.log(d.day)
// })

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
  private formattedDate: String;

  // Locale variables
  private city: string;
  private region: string;
  private regionCode: string;
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

  // Translate variables
  private daySingular: string;
  private dayPlural: string;
  private hourSingular: string;
  private hourPlural: string;
  private minuteSingular: string;
  private minutePlural: string;
  private secondSingular: string;
  private secondPlural: string;
  private weekdaySingular: string;
  private weekdayPlural: string;
  private weekday1: string;
  private weekday2: string;
  private weekday3: string;
  private weekday4: string;
  private weekday5: string;
  private weekday6: string;
  private weekday7: string;
  private monthSingular: string;
  private monthPlural: string;
  private month1: string;
  private month2: string;
  private month3: string;
  private month4: string;
  private month5: string;
  private month6: string;
  private month7: string;
  private month8: string;
  private month9: string;
  private month10: string;
  private month11: string;
  private month12: string;
  private yearSingular: string;
  private yearPlural: string;

  // Language
  private language: LanguageType;

  constructor(language: LanguageType) {
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
    this.formattedDate = "";

    // Locale variables
    this.city = "";
    this.region = "";
    this.regionCode = "";
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

    // Translate variables
    this.daySingular = "";
    this.dayPlural = "";
    this.hourSingular = "";
    this.hourPlural = "";
    this.minuteSingular = "";
    this.minutePlural = "";
    this.secondSingular = "";
    this.secondPlural = "";
    this.weekdaySingular = "";
    this.weekdayPlural = "";
    this.weekday1 = "";
    this.weekday2 = "";
    this.weekday3 = "";
    this.weekday4 = "";
    this.weekday5 = "";
    this.weekday6 = "";
    this.weekday7 = "";
    this.monthSingular = "";
    this.monthPlural = "";
    this.month1 = "";
    this.month2 = "";
    this.month3 = "";
    this.month4 = "";
    this.month5 = "";
    this.month6 = "";
    this.month7 = "";
    this.month8 = "";
    this.month9 = "";
    this.month10 = "";
    this.month11 = "";
    this.month12 = "";
    this.yearSingular = "";
    this.yearPlural = "";

    // Language
    this.language = language;

    // Set config variables
    this.setDefaultConfig(language);

    // Translate
    this.translate(language);
  }

  public translate(language: LanguageType): void {
    const decoder = new TextDecoder("utf-8");
    console.log(`./lib/languages/${language}/${language}.json`)
    const file = Deno.readFileSync(`./lib/languages/${language}/${language}.json`);
    const decodedFile = decoder.decode(file);
    const data = JSON.parse(decodedFile);

    this.daySingular = data.day.singular;
    this.dayPlural = data.day.plural;
    this.hourSingular = data.hour.singular;
    this.hourPlural = data.hour.plural;
    this.minuteSingular = data.minute.singular;
    this.minutePlural = data.minute.plural;
    this.secondSingular = data.second.singular;
    this.secondPlural = data.second.plural;
    this.weekdaySingular = data.week.singular;
    this.weekdayPlural = data.week.plural;
    this.weekday1 = data.week.weekDay[0];
    this.weekday2 = data.week.weekDay[1];
    this.weekday3 = data.week.weekDay[2];
    this.weekday4 = data.week.weekDay[3];
    this.weekday5 = data.week.weekDay[4];
    this.weekday6 = data.week.weekDay[5];
    this.weekday7 = data.week.weekDay[6];
    this.monthSingular = data.month.singular;
    this.monthPlural = data.month.plural;
    this.month1 = data.month.months[0];
    this.month2 = data.month.months[1];
    this.month3 = data.month.months[2];
    this.month4 = data.month.months[3];
    this.month5 = data.month.months[4];
    this.month6 = data.month.months[5];
    this.month7 = data.month.months[6];
    this.month8 = data.month.months[7];
    this.month9 = data.month.months[8];
    this.month10 = data.month.months[9];
    this.month11 = data.month.months[10];
    this.month12 = data.month.months[11];
    this.yearSingular = data.year.singular;
    this.yearPlural = data.year.plural;
  }

  // Set default config variables
  public setDefaultConfig(language: LanguageType): void {
    if (language === pt_BR) {
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

      if (this.hour !== 1) this.descHour = this.hourPlural;
      else this.descHour = this.hourSingular;

      if (this.minute !== 1) this.descMinute = this.minutePlural;
      else this.descMinute = this.minuteSingular;

      if (this.second !== 1) this.descSecond = this.secondPlural;
      else this.descSecond = this.secondSingular;

      switch (this.weekdayNumber) {
        case 1:
          this.weekday = this.weekday1;
          break;
        case 2:
          this.weekday = this.weekday2;
          break;
        case 3:
          this.weekday = this.weekday3;
          break;
        case 4:
          this.weekday = this.weekday4;
          break;
        case 5:
          this.weekday = this.weekday5;
          break;
        case 6:
          this.weekday = this.weekday6;
          break;
        case 7:
          this.weekday = this.weekday7;
          break;
      }

      switch (this.monthNumber) {
        case 1:
          this.month = this.month1;
          break;
        case 2:
          this.month = this.month2;
          break;
        case 3:
          this.month = this.month3;
          break;
        case 4:
          this.month = this.month4;
          break;
        case 5:
          this.month = this.month5;
          break;
        case 6:
          this.month = this.month6;
          break;
        case 7:
          this.month = this.month7;
          break;
        case 8:
          this.month = this.month8;
          break;
        case 9:
          this.month = this.month9;
          break;
        case 10:
          this.month = this.month10;
          break;
        case 11:
          this.month = this.month11;
          break;
        case 12:
          this.month = this.month12;
          break;
      }

      if (this.language === pt_BR || DE || ES || FR) {
        this.formattedDate =
          `${this.strDay}${this.delimiterDate}${this.strMonthNumber}${this.delimiterDate}${this.year}`;
      } else if (this.language === EN) {
        this.formattedDate =
          `${this.strMonthNumber}${this.delimiterDate}${this.strDay}${this.delimiterDate}${this.year}`;
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

    return this.isValidDate ? `${this.formattedDate}` : this.invalidDate;
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
        this.year.toString().substr(2, 4)
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

  public async getExtendedRegionCodeDate(date = new Date()): Promise<string> {
    this.dateNow(date);
    await this.getRegionCode();
    return this.isValidDate
      ? `${this.regionCode}, ${this.strDay}${this.sepDate}${this.month}${this.sepDate}${this.year}`
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

  public async getRegionCode(): Promise<string> {
    if (this.regionCode === "") await this.getLocaleInfo();
    return this.regionCode;
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
    this.regionCode = data.region;
    this.country = data.country;
    this.countryCode = data.countryCode;
    this.timezone = data.timezone;
    this.zipcode = data.zip;
  }

  public async formatPattern(
    pattern: string,
    date = new Date(),
  ): Promise<string> {
    this.dateNow(date);
    await this.getLocaleInfo();
    let formattedDate = pattern;

    // Full Date
    formattedDate = formattedDate.replaceAll("'date'", this.getDate()); // => 25/02/2020

    // Full time
    formattedDate = formattedDate.replaceAll("'time'", this.getTime()); // => 15:21:03

    // Day
    formattedDate = formattedDate.replaceAll("'d'", this.day.toString()); // => 1, 2
    formattedDate = formattedDate.replaceAll("'dd'", this.strDay); // => 01, 02

    // Month
    formattedDate = formattedDate.replaceAll(
      "'m'",
      this.monthNumber.toString(),
    ); // => 1, 2
    formattedDate = formattedDate.replaceAll("'mm'", this.strMonthNumber); // => 01, 02
    formattedDate = formattedDate.replaceAll("'mmm'", this.getShortMonth()); // => jan
    formattedDate = formattedDate.replaceAll("'mmmm'", this.month); // => janeiro
    formattedDate = formattedDate.replaceAll(
      "'MMM'",
      this.capitalize(this.getShortMonth()),
    ); // => Jan
    formattedDate = formattedDate.replaceAll(
      "'MMMM'",
      this.capitalize(this.month),
    ); // => Janeiro

    // Year
    formattedDate = formattedDate.replaceAll("'yyyy'", this.year.toString()); // => 2020
    formattedDate = formattedDate.replaceAll(
      "'yy'",
      this.getShortYear.toString(),
    ); // => 20

    // Week
    formattedDate = formattedDate.replaceAll(
      "'w'",
      this.weekdayNumber.toString(),
    ); // => 1,2,3
    formattedDate = formattedDate.replaceAll("'ww'", this.getShortWeekday()); // => seg, ter, qua
    formattedDate = formattedDate.replaceAll("'www'", this.weekday); // => segunda, terça, quarta
    formattedDate = formattedDate.replaceAll("'wwww'", this.weekday + "-feira"); // => segunda-feira, terça-feira, quarta-feira
    formattedDate = formattedDate.replaceAll(
      "'WW'",
      this.capitalize(this.getShortWeekday()),
    ); // => Seg, Ter, Qua
    formattedDate = formattedDate.replaceAll(
      "'WWW'",
      this.capitalize(this.weekday),
    ); // => Segunda, Terça, Quarta
    formattedDate = formattedDate.replaceAll(
      "'WWWW'",
      this.capitalize(this.weekday) + "-feira",
    ); // => Segunda-feira, Terça-feira, Quarta-feira

    // Hour
    formattedDate = formattedDate.replaceAll("'h'", this.hour.toString()); // => 1,2,3
    formattedDate = formattedDate.replaceAll("'hh'", this.strHour); // => 01,02,03
    formattedDate = formattedDate.replaceAll(
      "'hhh'",
      this.hour.toString() + this.descHour,
    ); // => 1 hour, 10 hours
    formattedDate = formattedDate.replaceAll(
      "'hhhh'",
      this.strHour + this.descHour,
    ); // => 01 hour, 10 hours
    formattedDate = formattedDate.replaceAll(
      "'HHH'",
      this.hour.toString() + this.capitalize(this.descHour),
    ); // => 1 Hour, 10 Hours
    formattedDate = formattedDate.replaceAll(
      "'HHHH'",
      this.strHour + this.capitalize(this.descHour),
    ); // => 01 Hour, 10 Hours

    // Minute
    formattedDate = formattedDate.replaceAll("'i'", this.minute.toString()); // => 1,2,3
    formattedDate = formattedDate.replaceAll("'ii'", this.strMinute); // => 01,02,03
    formattedDate = formattedDate.replaceAll(
      "'iii'",
      this.minute.toString() + this.descMinute,
    ); // => 1 minute, 10 minutes
    formattedDate = formattedDate.replaceAll(
      "'iiii'",
      this.strMinute + this.descMinute,
    ); // => 01 minute, 10 minutes
    formattedDate = formattedDate.replaceAll(
      "'III'",
      this.minute.toString() + this.capitalize(this.descMinute),
    ); // => 1 Minute, 10 Minutes
    formattedDate = formattedDate.replaceAll(
      "'IIII'",
      this.strMinute + this.capitalize(this.descMinute),
    ); // => 01 Minute, 10 Minutes

    // Second
    formattedDate = formattedDate.replaceAll("'s'", this.second.toString()); // => 1,2,3
    formattedDate = formattedDate.replaceAll("'ss'", this.strSecond); // => 01,02,03
    formattedDate = formattedDate.replaceAll(
      "'sss'",
      this.second.toString() + this.descSecond,
    ); // => 1 second, 10 seconds
    formattedDate = formattedDate.replaceAll(
      "'ssss'",
      this.strSecond + this.descSecond,
    ); // => 01 second, 10 seconds
    formattedDate = formattedDate.replaceAll(
      "'SSS'",
      this.second.toString() + this.capitalize(this.descSecond),
    ); // => 1 Second, 10 Seconds
    formattedDate = formattedDate.replaceAll(
      "'SSSS'",
      this.strSecond + this.capitalize(this.descSecond),
    ); // => 01 Second, 10 Seconds

    // City
    formattedDate = formattedDate.replaceAll("'city'", this.city); // => Marília

    // Region
    formattedDate = formattedDate.replaceAll("'region'", this.region); // => São Paulo
    formattedDate = formattedDate.replaceAll("'regionCode'", this.regionCode); // => SP

    // Country
    formattedDate = formattedDate.replaceAll("'country'", this.country); // => Brazil
    formattedDate = formattedDate.replaceAll("'countryCode'", this.countryCode); // => BR

    return formattedDate;
  }
}

// export default new DatePtBR(language.PT_BR);
export default DatePtBR;
