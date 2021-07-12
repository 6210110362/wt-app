import React from 'react';
import { Text } from 'react-native';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return(
        <Forecast {...forecastInfo}/>
    )
}