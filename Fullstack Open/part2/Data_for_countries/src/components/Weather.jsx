import axios from 'axios'

const Weather = ({info,temp,tempSet}) => {


    return (
        <div>
            temperature {temp} Celcius
        </div>
    )
}

export default Weather