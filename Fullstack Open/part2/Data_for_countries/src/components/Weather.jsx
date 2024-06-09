import axios from 'axios'

const Weather = ({info,temp,tempSet}) => {
    // let baseUrl = "https://api.meteomatics.com/"
    // let todayDate = new Date()
    // todayDate = todayDate.toISOString()
    // baseUrl = baseUrl + todayDate + "/t_2m:C/" + info.capitalInfo.latlng[0] + "," + info.capitalInfo.latlng[1] + "/json"

    // const token = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoxLCJ1c2VyIjoicG9udGlmaWNpYXVuaXZlcnNpZGFkY2F0bGljYWRlbHBlcl9idXJnb3NfcmFmYWVsIiwiaXNzIjoibG9naW4ubWV0ZW9tYXRpY3MuY29tIiwiZXhwIjoxNzE3OTI0NTUxLCJzdWIiOiJhY2Nlc3MifQ.NvVD58UYuy2oQ8pZ0hkrQLwx_brve-pqV8Jyi5bMpkpa8qAeZbEJFXBfjvbcPUXtwzLbSwh21-SGcrlC1ysQQA'

    // const config = {
    //     headers: {
    //     'Authorization': 'Bearer ' +token
    //     }
    // }

    // axios.get(baseUrl,config).then(
    //     weather => {
    //         console.log(weather.data.data[0].coordinates[0].dates[0].value)
    //         tempSet(weather.data.data[0].coordinates[0].dates[0].value)
    //     }
    // ).catch(
    //     tempSet(0)
    // )

    return (
        <div>
            temperature {temp} Celcius
        </div>
    )
}

export default Weather