import CountryView from './CountryView'
import Weather from './Weather'

const Results = ({filter,filteredCountryList,countryFullList,buttonFunction,pressedList,temp, tempSet}) => {
    if (filter ==='') return null

    if (filteredCountryList.length > 10)
        return(
        <p>Too many matches, specify another filter</p>
    )
    if (filteredCountryList.length === 1){
        return(
            <>
                <CountryView info = {countryFullList.find(country => 
                    country.name.common === filteredCountryList[0][1])}
                    display = {true}/>
                <Weather info = {countryFullList[filteredCountryList[0][0]]} temp = {temp} tempSet = {tempSet}/>
            </>
        )
    }
    return (
        <>
            {filteredCountryList.map(country => <div key = {country[1]}>
                {country[1]} {country[0]}  <button onClick = {() => {buttonFunction(country[0])}}>
                    show
                </button>
                <CountryView info = {countryFullList.find(countryFL => 
                    countryFL.name.common === country[1])}
                    display = {pressedList[country[0]]}/>
            </div>)}
        </>
    )
}

export default Results