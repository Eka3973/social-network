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
                facebook: values.facebook,
                github: values.github,
                twitter: values.twitter,
                youtube: values.youtube
            },
            fullName: values.fullName,
            lookingForAJob: values.lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription
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
                   name='facebook'
                   placeholder='Facebook'
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='twitter'
                   placeholder='Twitter'
            />
            <Field component={EditProfileInput}
                   type='text'
                   name='youtube'
                   placeholder='Youtube'
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