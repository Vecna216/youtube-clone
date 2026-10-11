export const API_KEY = 'AIzaSyCZ4li9JVq_uW1KU-34pEBH-FQGIpZ_4Hk'

export const value_converter = (value) =>{
  if(value>=1000000)
  {
    return Math.floor(value/1000000)+"M"
  }
  else if(value>=1000)
  {
    return Math.floor(value/1000)+"K"
  }
  else {
    return value;
  }
}