let input_object = `
{  
    "dt":1485741600,
    "temp":{  
       "day":285.51,
       "min":285.51,
       "max":285.51,
       "night":285.51,
       "eve":285.51,
       "morn":285.51
    },
    "pressure":1013.75,
    "humidity":100,
    "weather":[  
       {  
          "id":800,
          "main":"Clear",
          "description":"sky is clear",
          "icon":"01n"
       }
    ],
    "speed":5.52,
    "deg":311,
    "clouds":0
 }`;
// input_object = input_object.replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/\s/g, '');
input_object = input_object.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, '$1"$3":');
let input_arr = JSON.parse('[' + input_object + ']');


// console.log(input_arr[0])


const movies = [
    {
        title: "The Fate of the Furious",
        studio: "Uni.",
        firstWeek: "2017-15",
        maxRank: 1,
        maxGross: 225764765,
        coordinates: [
          {week: 1,grossWeekly: 124896220,theaterCount: 4310,theaterAvg: 28978,date: "2017-04-14",rank: 1},
          {week: 2,grossWeekly: 48435355,theaterCount: 4329,theaterAvg: 11189,date: "2017-04-21",rank: 1},
          {week: 3,grossWeekly: 25275955,theaterCount: 4077,theaterAvg: 6200,date: "2017-04-28",rank: 1},
          {week: 4,grossWeekly: 11126400,theaterCount: 3595,theaterAvg: 3095,date: "2017-05-05",rank: 2},
          {week: 5,grossWeekly: 6976370,theaterCount: 3067,theaterAvg: 2275,date: "2017-05-12",rank: 4},
          {week: 6,grossWeekly: 4340570,theaterCount: 2287,theaterAvg: 1898,date: "2017-05-19",rank: 8},
          {week: 7,grossWeekly: 2267065,theaterCount: 1358,theaterAvg: 1669,date: "2017-05-26",rank: 11},
          {week: 8,grossWeekly: 746930,theaterCount: 593,theaterAvg: 1260,date: "2017-06-02",rank: 15},
          {week: 9,grossWeekly: 661010,theaterCount: 389,theaterAvg: 1699,date: "2017-06-09",rank: 16},
          {week: 10,grossWeekly: 327005,theaterCount: 175,theaterAvg: 1869,date: "2017-06-16",rank: 24},
          {week: 11,grossWeekly: 237990,theaterCount: 159,theaterAvg: 1497,date: "2017-06-23",rank: 26},
          {week: 12,grossWeekly: 296470,theaterCount: 144,theaterAvg: 2059,date: "2017-06-30",rank: 23},
          {week: 13,grossWeekly: 177425,theaterCount: 115,theaterAvg: 1543,date: "2017-07-07",rank: 25}
        ],
        type: "landslide"
      },
      {
        title: "Straight Outta Compton",
        studio: "Uni.",
        firstWeek: "2015-33",
        maxRank: 1,
        maxGross: 161058685,
        coordinates: [
          {week: 1,grossWeekly: 84723470,theaterCount: 2757,theaterAvg: 30730,date: "2015-08-14",rank: 1},
          {week: 2,grossWeekly: 36162705,theaterCount: 3025,theaterAvg: 11955,date: "2015-08-21",rank: 1},
          {week: 3,grossWeekly: 18049530,theaterCount: 3142,theaterAvg: 5745,date: "2015-08-28",rank: 1},
          {week: 4,grossWeekly: 12686895,theaterCount: 3094,theaterAvg: 4100,date: "2015-09-04",rank: 3},
          {week: 5,grossWeekly: 5328660,theaterCount: 2812,theaterAvg: 1895,date: "2015-09-11",rank: 6},
          {week: 6,grossWeekly: 2596870,theaterCount: 1938,theaterAvg: 1340,date: "2015-09-18",rank: 9},
          {week: 7,grossWeekly: 880290,theaterCount: 609,theaterAvg: 1445,date: "2015-09-25",rank: 16},
          {week: 8,grossWeekly: 338540,theaterCount: 281,theaterAvg: 1205,date: "2015-10-02",rank: 22},
          {week: 9,grossWeekly: 191170,theaterCount: 170,theaterAvg: 1125,date: "2015-10-09",rank: 31},
          {week: 10,grossWeekly: 100555,theaterCount: 113,theaterAvg: 890,date: "2015-10-16",rank: 38}
        ],
        type: "landslide"
      }
]


let obj = `{"cod":"200","message":0,"city":{"geoname_id":1907296,"name":"Tawarano","lat":35.0164,"lon":139.0077,"country":"JP","iso2":"JP","type":"","population":0},"cnt":10,"coordinates":[{"dt":1485741600,"temp":{"day":285.51,"min":285.51,"max":285.51,"night":285.51,"eve":285.51,"morn":285.51},"pressure":1013.75,"humidity":100,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":5.52,"deg":311,"clouds":0},{"dt":1485828000,"temp":{"day":282.27,"min":282.27,"max":284.66,"night":284.66,"eve":282.78,"morn":282.56},"pressure":1023.68,"humidity":100,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":5.46,"deg":66,"clouds":0},{"dt":1485914400,"temp":{"day":284.83,"min":283.21,"max":285.7,"night":284.16,"eve":285.49,"morn":283.21},"pressure":1017.39,"humidity":100,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"02d"}],"speed":13.76,"deg":260,"clouds":8},{"dt":1486000800,"temp":{"day":283.71,"min":281.86,"max":285.13,"night":283.81,"eve":284.76,"morn":281.86},"pressure":1017.36,"humidity":100,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":8.95,"deg":288,"clouds":0},{"dt":1486087200,"temp":{"day":280,"min":275.68,"max":283.75,"night":278.79,"eve":283.75,"morn":275.68},"pressure":996.2,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.92,"deg":295,"clouds":0},{"dt":1486173600,"temp":{"day":279.4,"min":276.69,"max":283.22,"night":277.58,"eve":283.22,"morn":276.69},"pressure":998.07,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":3.71,"deg":314,"clouds":0},{"dt":1486260000,"temp":{"day":280.88,"min":276.28,"max":284.66,"night":281.2,"eve":284.66,"morn":276.28},"pressure":997.4,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.1,"deg":337,"clouds":66,"rain":0.28},{"dt":1486346400,"temp":{"day":281.58,"min":278.74,"max":283.76,"night":278.74,"eve":283.76,"morn":279.15},"pressure":991.11,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":2.69,"deg":2,"clouds":4,"rain":3.72},{"dt":1486432800,"temp":{"day":277.62,"min":275.86,"max":281.14,"night":276.45,"eve":281.14,"morn":275.86},"pressure":993.37,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.05,"deg":353,"clouds":47,"rain":0.52,"snow":0.03},{"dt":1486519200,"temp":{"day":279.26,"min":275.51,"max":281.61,"night":276.55,"eve":281.61,"morn":275.51},"pressure":991.72,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":3.47,"deg":326,"clouds":2,"rain":0.35}]}`;

let json_obj = JSON.parse(obj)

console.log(JSON.stringify(json_obj, null, 2))