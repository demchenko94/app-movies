export const environment = {
  production: true,
  api: {
    token: '4a0f031a-99a8-4747-8272-8c720bc5d129',
    urlDirector: 'https://www.imdb.com/name/',
    urlTopMovies () { return `https://www.myapifilms.com/imdb/top?start=1&end=20&token=${this.token}&format=json&data=1`},
    urlTrailers: './mock-data/trailers-data.json'
  }
};
