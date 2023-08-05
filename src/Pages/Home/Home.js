import React, { useState } from 'react'
import './Home.css'
import EmojiList from '../../Data/EmojiList.json'


const Home = () => {
    
    // useState 
    const [textValue,setTextValue] = useState('ffffffffffffffff')

    // Functions
    const textOnChange = (event) => {
        setTextValue(event.target.value)
    }
    
    EmojiList.forEach((data,index) => {
        if (EmojiList[index].title.includes(textValue) ) {
            document.getElementById('container_result').innerHTML += `
                <p className='para'>عنوان: <span id='result-title'>${EmojiList[index].title}</span></p>
                <p className='para'>نماد: <span id='result-symbol'>${EmojiList[index].symbol}</span></p>
                <p className='para'>کلمه کلیدی: <span id='result-keyword'>${EmojiList[index].keywords}</span></p>
                <div className='border'></div>
            `
        }
    })

    // Return
    return (
        <div className='container' id='container'>
            <h1 className='container_header'>جست و جوی Emoji</h1>
            <h3 className='container_header2'>عنوان یا کلمه کلیدی که Emoji مورد نظر را توصیف می کند را در فیلد زیر بنویسید</h3>
            <input type='text' id='textvalueid' onChange={event => textOnChange(event)} />
            <div className='container_result' id='container_result'>
                <p className='para'>عنوان: <span id='result-title'></span></p>
                <p className='para'>نماد: <span id='result-symbol'></span></p>
                <p className='para'>کلمه کلیدی: <span id='result-keyword'></span></p>
                <div className='border'></div>
            </div>
        </div>
    )
}

export default Home