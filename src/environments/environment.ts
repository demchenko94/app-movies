// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    token: '4a0f031a-99a8-4747-8272-8c720bc5d129',
    urlDirector: 'https://www.imdb.com/name/',
    urlTopMovies () { return `https://www.myapifilms.com/imdb/top?start=1&end=20&token=${this.token}&format=json&data=1`},
    urlTrailers: './mock-data/trailers-data.json'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
