import React from 'react';
import style from './News.module.scss';
import samuraiAPI from "../DAL/CreateInstance";


class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = React.createRef();
        this.clickFile = this.clickFile.bind(this);


    }

    onSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('avatar', this.onChange.current.files[0]);
        samuraiAPI.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/from-data'
            }
        });

    };

    clickFile(e){
        e.preventDefault();

        samuraiAPI.get('profile/1034')

    }


    render() {
        return (
            <div className={style.newsWrapper}>
                <form onSubmit={this.onSubmit}>
                    <img src={this.state.avatar} alt='Avatar'/>
                    <input ref={this.onChange} type="file"/>
                    <button type='submit'>Upload</button>
                </form>
                <button type='submit' onClick={this.clickFile}>click</button>
            </div>
        )
    }
};
export default News;

