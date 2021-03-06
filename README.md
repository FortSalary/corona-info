# 🦠 corona-info

[![NPM](https://nodei.co/npm/corona-info.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/corona-info/)

**New Update**
- .getAll() and .getCountry() methods are replaced by the .findData({ country: <all> or <country name> }) method

# Installing

- npm install corona-info


#   Example usage with "async-await" construct:

To pull all the data

```js
const covid = require('corona-info');

const covidData = async () => {
    let data = await covid.findData({ country: "all" });
    console.log(data)
}

covidData();

/*{
  updatedDate: '20.06.2021',
  cases: '179.145.921',
  deaths: '3.879.307',
  todayCases: '196.034',
  todayDeaths: '3.647',
  tests: '2.642.386.816',
  active: '11.578.660',
  critical: '82.715',
  recovered: '163.687.954',
  todayRecovered: '215.127'
}*/
```

To pull country data

```js
const covid = require('corona-info'); 

const covidData = async () => {
    let data = await covid.findData({ country: "USA" });
    console.log(data);
};

covidData();

/*{
  updatedDate: '20.06.2021',
  cases: '34.402.791',      
  todayCases: '1.079',      
  deaths: '617.111',
  todayDeaths: '31',
  countryName: 'USA',
  countryFlag: 'https://disease.sh/assets/img/flags/us.png',
  testCount: '498.955.652',
  active: '5.078.294',
  critical: '3.977',
  recovered: '28.707.386',
  todayRecovered: '12.543'
}*/
```

If you want to pull certain data

```js
const covid = require('corona-info');

const covidData = async () => {
    let data = await covid.findData({ country: "all" });
    console.log(data.cases)
}

covidData();
// Output: '34.402.791'
```

# Example usage with ".then" construct:

To pull all the data

```js
const covid = require('corona-info');

covid.findData({ country: "all" }).then(res => {
    console.log(res);
});

/*{
  updatedDate: '20.06.2021',
  cases: '179.145.921',
  deaths: '3.879.307',
  todayCases: '196.034',
  todayDeaths: '3.647',
  tests: '2.642.386.816',
  active: '11.578.660',
  critical: '82.715',
  recovered: '163.687.954',
  todayRecovered: '215.127'
}*/
```

To pull country data

```js
const covid = require('corona-info'); 

covid.findData({ country: "USA" }).then(res => {
    console.log(res);
});
/*{
  updatedDate: '20.06.2021',
  cases: '34.402.791',      
  todayCases: '1.079',      
  deaths: '617.111',
  todayDeaths: '31',
  countryName: 'USA',
  countryFlag: 'https://disease.sh/assets/img/flags/us.png',
  testCount: '498.955.652',
  active: '5.078.294',
  critical: '3.977',
  recovered: '28.707.386',
  todayRecovered: '12.543'
}*/
```

If you want to pull certain data

```js
const covid = require('corona-info');

covid.findData({ country: "USA" }).then(res => {
    console.log(res.cases);
});
// Output: '34.402.791'
```
