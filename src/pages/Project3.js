import React, {useState} from 'react'
import Currency from '../project3/Currency'

import '../css/Project3.css'

const Project3 = () => {

    const [effectiveDate, setEffectiveDate] = useState('');

    fetch('https://api.nbp.pl/api/exchangerates/tables/C/?format=json')
    .then(res => res.json())
    .then(data => setEffectiveDate(data[0].effectiveDate))
    .catch(err => console.log(err))

    return (
        <div className='project3'>
            <h1>Currencies table</h1>
            <p className='executeDate'>as of {effectiveDate}</p>
            <Currency curCode="USD" flagCode="us"/>
            <Currency curCode="EUR" flagCode="eu"/>
            <Currency curCode="CHF" flagCode="ch"/>
            <Currency curCode="GBP" flagCode="gb"/>
            <Currency curCode="CZK" flagCode="cz"/>
            <Currency curCode="HUF" flagCode="hu"/>
        </div>
    )
}

export default Project3;