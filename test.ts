import DatePtBR from './app.ts';
import { pt_BR } from './lib/languages/index.ts';

const date = new DatePtBR(pt_BR);

interface ApiData {
  city: string;
  regionName: string;
  region: string;
  country: string;
  countryCode: string;
  timezone: string;
  zip: string;
}

async function getLocaleInfo(): Promise<void> {
  const data: ApiData = await (await fetch('http://ip-api.com/json')).json();

  console.log(data);
};

function test(): void {
  const a = new Date('ABSJAKDGAYE');
  const b = new Date();
  console.log(a);
  console.log(a.toString() === 'Invalid Date');
  console.log(b);
  console.log(typeof b);
}

async function testDate(): Promise<void> {
  console.log(`\ngetDay() =>`, date.getDay())
  console.log(`\ngetMonthNumber() =>`, date.getMonthNumber())
  console.log(`\ngetMonth() =>`, date.getMonth())
  console.log(`\ngetShortMonth() =>`, date.getShortMonth())
  console.log(`\ngetYear() =>`, date.getYear())
  console.log(`\ngetShortYear() =>`, date.getShortYear())
  console.log(`\ngetWeekdayNumber() =>`, date.getWeekdayNumber())
  console.log(`\ngetWeekday() =>`, date.getWeekday())
  console.log(`\ngetShortWeekday() =>`, date.getShortWeekday())
  console.log(`\ngetDate() =>`, date.getDate())
  console.log(`\ngetExtendedDate() =>`, date.getExtendedDate())
  console.log(`\ngetExtendedWeekdayDate() =>`, date.getExtendedWeekdayDate())
  console.log(`\ngetMonthYear() =>`, date.getMonthYear())
  console.log(`\ngetShortMonthYear() =>`, date.getShortMonthYear())
  console.log(`\ngetShortMonthShortYear() =>`, date.getShortMonthShortYear())
  console.log(`\ngetMonthNumberYear() =>`, date.getMonthNumberYear())
  console.log(`\ngetHour() =>`, date.getHour())
  console.log(`\ngetMinute() =>`, date.getMinute())
  console.log(`\ngetSecond() =>`, date.getSecond())
  console.log(`\ngetTime() =>`, date.getTime())
  console.log(`\ngetHourMinute() =>`, date.getHourMinute())
  console.log(`\ngetExtendedHour() =>`, date.getExtendedHour())
  console.log(`\ngetExtendedMinute() =>`, date.getExtendedMinute())
  console.log(`\ngetExtendedSecond() =>`, date.getExtendedSecond())
  console.log(`\ngetExtendedTime() =>`, date.getExtendedTime())
  console.log(`\ngetExtendedHourMinute() =>`, date.getExtendedHourMinute())
  console.log(`\ngetDateTime() =>`, date.getDateTime())
  console.log(`\ngetExtendedDateTime() =>`, date.getExtendedDateTime())
  console.log(`\ngetExtendedCityDate() =>`, await date.getExtendedCityDate())
  console.log(`\ngetExtendedRegionDate() =>`, await date.getExtendedRegionDate())
  console.log(`\ngetExtendedShortRegionDate() =>`, await date.getExtendedRegionCodeDate())
  console.log(`\ngetExtendedCountryDate() =>`, await date.getExtendedCountryDate())
  console.log(`\ngetExtendedShortCountryDate() =>`, await date.getExtendedShortCountryDate())
  console.log(`\ngetCity() =>`, await date.getCity())
  console.log(`\ngetRegion() =>`, await date.getRegion())
  console.log(`\ngetShortRegion() =>`, await date.getRegionCode())
  console.log(`\ngetCountry() =>`, await date.getCountry())
  console.log(`\ngetCountryCode() =>`, await date.getCountryCode())
  console.log(`\ngetTimezone() =>`, await date.getTimezone())
  console.log(`\ngetZipcode() =>`, await date.getZipcode())
  console.log(`\nformatPattern() =>`, await date.formatPattern("'MMM' teste", undefined))
  console.log(`\nformatPattern() =>`, await date.formatPattern("'m'/'WW'", new Date()))
  console.log(`\nformatPattern() =>`, await date.formatPattern("'m' e 'mm' e 'mmm' e 'mmmm' e 'MMM' e 'MMMM'", new Date()))
  console.log(`\nformatPattern() =>`, await date.formatPattern("'city' e 'country' e 'ww' e 'WWWW' e 'www' e 'wwww'"))
  console.log(`\nformatPattern() =>`, await date.formatPattern("'date' e 'time' / 'region' - 'regionCode' / regionCode 'regionCode'"))
}

// await getLocaleInfo();
// test();
await testDate();
await test();