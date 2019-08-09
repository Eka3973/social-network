import React from 'react';
import style from './ProfileContacts.module.scss'


interface IProfileContacts {
    contacts: any

}

const ProfileContacts = ({contacts: {facebook, twitter, youtube}}: IProfileContacts) => {
    return (
        <div className={style.wrapper}>
            <a className={style.spriteSocial + ' ' + style.iconFacebook} href={facebook} target='_blank'/>
            <a className={style.spriteSocial + ' ' + style.iconTwitter} href={twitter} target='_blank'/>
            <a className={style.spriteSocial + ' ' + style.iconYoutube} href={youtube} target='_blank'/>
        </div>
    )

};
export default ProfileContacts;