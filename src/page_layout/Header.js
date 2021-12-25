import React, {useEffect, useState} from 'react'

import imgHeader1 from '../img/header.jpg'
import imgHeader2 from '../img/header2.jpg'

import '../css/Header.css'

const Header = () => {

    const images = [imgHeader1, imgHeader2]
    const descriptions = ["Witaj na stronie!", "Welcome on my page!"]
    const [imgUrls, setImgUrls] = useState(0)
    const [textItems, setTextItems] = useState(0)

    useEffect(() => {
        setTimeout(() => stateChange(), 7000);
    },[imgUrls]);

    const stateChange = () => {
        let tempIndex = imgUrls;
        tempIndex++;
        if (tempIndex === images.length) tempIndex=0;
        setImgUrls(tempIndex)
        setTextItems(tempIndex)
    }

    return (
        <div>
            <img src={images[imgUrls]} alt='header'/>
            <h2>{descriptions[textItems]}</h2>
        </div>
    )
}

export default Header;