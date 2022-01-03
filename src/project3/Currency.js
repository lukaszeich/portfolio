import React, {useState} from 'react'

const Currency = ({curCode, flagCode}) => {

    const [currencyValue, setCurrencyValue] = useState('');

    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${curCode}/?format=json`)
    .then(res => res.json())
    .then(data => setCurrencyValue(data.rates[0].mid))
    .catch(err => console.log(err));

    return (
        <div className='currency'>
             <p className='curCode'>{curCode}</p>
             <div className='flag'><img src={`https://flagcdn.com/32x24/${flagCode}.png`}></img></div>
             <p className='rate'>{currencyValue}</p>
        </div>
    )
}

export default Currency;