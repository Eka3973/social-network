import React from 'react';
import style from "./Description.module.scss";
import PropTypes from "prop-types";


const Description = ({photo, fullName, description: {descriptionAlt,
    niceName, dateOfBirth, city, education, Twitter}}) => {

    return (
        <div className={style.descriptionWrapper}>
            <div className={style.descriptionImg}>
                <img
                    src={photo}
                    alt={descriptionAlt}/>
            </div>
            <div className={style.descriptionUser}>
                <div>
                    <h1>{fullName}<span>{niceName}</span></h1>
                </div>
                <div>
                    <div className={style.descriptionUserBiography}>
                        <span>About Me:</span>
                        <span>{dateOfBirth}</span>
                    </div>
                    <div className={style.descriptionUserBiography}>
                        <span>Looking for a job:</span>
                        <span>{city}</span>
                    </div>
                    <div className={style.descriptionUserBiography}>
                        <span>Facebook:</span>
                        <span>{education}</span>
                    </div>
                    <div className={style.descriptionUserBiography}>
                        <span>Twitter:</span>
                        <span>{Twitter}</span>

                    </div>
                </div>
            </div>
        </div>
    )

};
export default Description;

Description.propTypes = {
    description: PropTypes.object.isRequired,
};

Description.propTypes = {
    description: PropTypes.shape({
        niceName: PropTypes.string.isRequired,
        dateOfBirth: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        education: PropTypes.string.isRequired,
        Twitter: PropTypes.string.isRequired,
    })

};
