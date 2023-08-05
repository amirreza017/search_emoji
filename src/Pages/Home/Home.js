import React, {  useEffect, useState } from 'react'
import './Home.css'
import EmojiList from '../../Data/EmojiList.json'


const Home = () => {
 
    // useState 
    const [textValue,setTextValue] = useState('')
    const [emojiData,setEmojiData] = useState([]);

    // Functions
    const textOnChange = (event) => {
        setTextValue(event.target.value)
    }

    useEffect(() => {
        if (textValue === '') {
            const result = EmojiList.filter(emj => emj.title.includes('محل'));
            setEmojiData(result);
        } else {
            const result = EmojiList.filter(emj => emj.title.includes(textValue) || emj.keywords.includes(textValue));
            setEmojiData(result);
        }
    },[textValue])

    

    // Return
    return (
        <div className='container'>
            <h1 className='container_header'>جست و جوی Emoji</h1>
            <h3 className='container_header2'>عنوان یا کلمه کلیدی که Emoji مورد نظر را توصیف می کند را در فیلد زیر بنویسید</h3>
            <input type='text' id='textvalueid' onChange={textOnChange} />
            <div className='container_result'>
                {emojiData.map((data,index) => {
                return (
                    <div key={index}>
                    <p><span className='para'>عنوان:</span> {data.title}</p>
                    <p><span className='para'>نماد:</span> {data.symbol}</p>
                    <p><span className='para'>کلمه کلیدی:</span> {data.keywords}</p>
                    <div className='border'></div>
                    </div>
                    )
                })}   
            </div>
        </div>
    )
}

export default Home