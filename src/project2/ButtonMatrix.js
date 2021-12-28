import React from 'react';

import Button from './Button'

const ButtonMatrix = ({setValue}) => {
    return (
        <div className='btnMatrix'>
            <Button text='7' type='numeric' value={7} setValue={setValue}/>
            <Button text='8' type='numeric' value={8} setValue={setValue}/>
            <Button text='9' type='numeric' value={9} setValue={setValue}/>
            <Button text='/' type='divide' setValue={setValue}/>
            <Button text='4' type='numeric' value={4} setValue={setValue}/>
            <Button text='5' type='numeric' value={5} setValue={setValue}/>
            <Button text='6' type='numeric' value={6} setValue={setValue}/>
            <Button text='*' type='multiply' setValue={setValue}/>
            <Button text='1' type='numeric' value={1} setValue={setValue}/>
            <Button text='2' type='numeric' value={2} setValue={setValue}/>
            <Button text='3' type='numeric' value={3} setValue={setValue}/>
            <Button text='+' type='add' setValue={setValue}/>
            <Button text='0' type='numeric' value={0} setValue={setValue}/>
            <Button equal={true} text='=' type='equal' setValue={setValue}/>
            <Button text='-' type='subtract' setValue={setValue}/>
            </div>
    )
}

export default ButtonMatrix;