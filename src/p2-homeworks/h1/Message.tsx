import React from 'react'
import styles from './Message.module.css';

type MessageTypeProps = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props: MessageTypeProps) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.avatar} src={props.avatar} alt="avatar"/>
            <div className={styles.content}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.message}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message;
