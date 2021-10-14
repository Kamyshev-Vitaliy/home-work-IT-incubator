import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: `https://www.soyuz.ru/public/uploads/files/3/7403808/2020030610494673a6064aab.jpg`,
    name: 'Mushu404',
    message: 'I found the lucky cricket!',
    time: '22:00',
}

const HW1 = () => {
    return (
        <div>
            <hr/>
            {/*should work (должно работать)*/}
            <Message avatar={messageData.avatar}
                     name={messageData.name}
                     message={messageData.message}
                     time={messageData.time}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
