import { useState,useEffect } from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import Results from './components/Results'


function App() {
  const [country,setCountry] = useState('')
  const [nameList,setNameList] = useState([])
  const [countryList,setCountryList] = useState([])
  const [buttonPressedList,setButtonPressedList] = useState([])
  const [filteredCountryList,setFilteredCountryList] = useState([])
  const [temperature,setTemperature] = useState(0)

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all").then(
      countries => {
        setCountryList(countries.data)
        setNameList(countries.data.map(country => country.name.common))
        setButtonPressedList(countries.data.map(country => false))
      }
    )
    // // const token = btoa(`${username}:${password}`)
    // console.log(token)

    // // Configuración de la cabecera de autorización
    // const config = {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // }

    // axios.get("https://api.meteomatics.com/2024-06-09T00:00:00Z/t_2m:C/52.520551,13.461804/json"
    // ,config).then(
    //   weather => {
    //     console.log(weather.data)
    //   }
    // )
  },[])

  const getDataFromMeteomatics = (info) => {
    let baseUrl = "https://api.meteomatics.com/"
    let todayDate = new Date()
    todayDate = todayDate.toISOString()
    baseUrl = baseUrl + todayDate + "/t_2m:C/" + info.capitalInfo.latlng[0] + "," + info.capitalInfo.latlng[1] + "/json"

    const token = import.meta.env.VITE_SOME_KEY

    const config = {
        headers: {
        'Authorization': 'Bearer ' +token
        }
    }
    console.log('Attempt of connection')
    console.log(baseUrl)
    axios.get(baseUrl,config).then(
        weather => {
            console.log(weather.data.data[0].coordinates[0].dates[0].value)
            setTemperature(weather.data.data[0].coordinates[0].dates[0].value)
        }
    ).catch( error => {
        console.log('Using default data instead')
        setTemperature(0)
      }
    )
  }

  const searchFunction = (event) =>{
    const newValue = event.target.value
    const semifilteredCountryList = nameList.map((country,i)=>
      [i,country])
    const newFilteredCountryList = semifilteredCountryList.filter(country => 
      country[1].toLowerCase().includes(newValue.toLowerCase()))
    const semiButtonPressedList = buttonPressedList.map(country => false)
    if(newFilteredCountryList.length <= 10 && filteredCountryList.length>1){
      for(let x = 0;x< newFilteredCountryList.length;x++){
        const indexNow = newFilteredCountryList[x][0]
        // console.log(indexNow)
        semiButtonPressedList[indexNow] = buttonPressedList[indexNow]
      }
    }
    setCountry(newValue)
    setFilteredCountryList(newFilteredCountryList)
    setButtonPressedList(semiButtonPressedList)
    if(newFilteredCountryList.length === 1) {
      console.log('event')
      getDataFromMeteomatics(countryList[newFilteredCountryList[0][0]])
    }
  }

  const changeButton = (index) =>{
    console.log(index)
    // = buttonPressedList didn't work for some reason
    const newButtonList = [...buttonPressedList]
    if(buttonPressedList[index]){
      newButtonList[index] = false
    }else newButtonList[index] = true
    setButtonPressedList(newButtonList)
  }

  return (
    <>
      <SearchBar text ={country} functionSearch={searchFunction}/>
      <Results filter = {country} filteredCountryList = {filteredCountryList}
        countryFullList = {countryList} buttonFunction = {changeButton} 
        pressedList = {buttonPressedList} temp = {temperature} tempSet = {setTemperature}/>
    </>
  )}

export default App
