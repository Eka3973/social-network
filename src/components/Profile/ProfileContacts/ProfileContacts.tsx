import React from 'react';
import style from './ProfileContacts.module.scss'

const ProfileContacts = ()=>{
    return (
        <div className={style.wrapper}>
            <a className={style.spriteSocial+' '+style.iconFacebook} href='https://www.facebook.com/people/Ekaterina-Voronkevich/100007207356065' target='_blank'/>
            <a  className={style.spriteSocial+' '+style.iconTwitter} href='https://twitter.com/EVoronkevich' target='_blank'/>
            <a className={style.spriteSocial+' '+style.iconYoutube} href='https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g' target='_blank'/>
        </div>
    )

};
export default ProfileContacts;