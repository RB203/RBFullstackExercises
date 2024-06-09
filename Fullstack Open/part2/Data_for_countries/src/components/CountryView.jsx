const CountryView = ({info,display}) => {
    if (!display) return null
    const languages = []
    const objLanguages = info.languages
    for (let lang in objLanguages){
        if (objLanguages.hasOwnProperty(lang)) {
            languages.push(objLanguages[lang])
        }
    }
    return (
        <div className = "country">
            <h1>{info.name.common}</h1>
            <p>capital {info.capital}</p>
            <p>area {info.area}</p>
            <h2>languages:</h2>
            <ul>
                {languages.map(lang => <li key = {lang}>{lang}</li>)}
            </ul>
            <img src = {info.flags.png}/>
        </div>
    )
}

export default CountryView