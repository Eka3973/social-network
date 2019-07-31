import React from 'react';
import style from './EditProfile.module.scss';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {IEditProfileForm} from "../../Types/TypesProfile";


interface IEditProfile {
    getEditProfile: Function
}

const EditProfile = ({getEditProfile}: IEditProfile) => {
    const changeProfile = (values: any) => {
        const userProfile = {
            aboutMe: values.aboutMe,
            contacts: {
                github: values.github,
                vk: values.vk,
                facebook: values.facebook,
                instagram: values.instagram,
                twitter: values.twitter,
                website: values.website,
                youtude: values.youtude,
                mainLink: values.mainLink
            },
            lookingForAJob: values.lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription,
            fullName: values.fullName,
        };
        getEditProfile(userProfile)
    };

    return (
        <div className={style.wrapper}>
            <EditProfileConnect onSubmit={changeProfile}/>
        </div>
    )
};
export default EditProfile;


const EditProfileForm = ({handleSubmit}: InjectedFormProps<IEditProfileForm>) => {
    return (
        <form onSubmit={handleSubmit} className={style.wrapperForm}>
            <Field component={EditProfileInput}
                   type='text'
                   name='fullName'
                   placeholder='Your full name?'
                   validate={required}
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='aboutMe'
                   placeholder='About Me'
                   validate={required}
            />
            <label>
                <Field component={EditProfileInput}
                       type='checkbox'
                       name='lookingForAJob'
                />
                <div>Are you looking for work?</div>
            </label>
            <Field component={EditProfileInput}
                   type='text'
                   name='lookingForAJobDescription'
                   placeholder='What position are you looking for?'
                   validate={required}
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='github'
                   placeholder='Github'
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='vk'
                   placeholder='Vk'
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='facebook'
                   placeholder='Facebook'
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='instagram'
                   placeholder='Instagram'
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='twitter'
                   placeholder='Twitter'
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='website'
                   placeholder='Website'
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='youtude'
                   placeholder='Youtude'
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='mainLink'
                   placeholder='MainLink'
            />
            <button className={style.button}>Save Changes</button>
        </form>
    );

};


const EditProfileConnect: any = reduxForm<IEditProfileForm>({form: 'editProfile-form'})(EditProfileForm);

interface IInput {
    input: object,
    meta: any
}

const EditProfileInput = ({input, meta: {touched, error, warning}, ...props}: IInput) => {
    return (
        <div>
            <input {...input} {...props} className={style.input}/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
};

const required = (value: any) => (value || typeof value === 'number' ? undefined : 'Required');