declare interface ICountry {
  flags: {
    png: string
    svg: string
    alt: string
  }
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  name: {
    common: string
  }
}
