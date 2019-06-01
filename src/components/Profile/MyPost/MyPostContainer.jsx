// import React from 'react';
// import style from "./MyPost.module.scss";
// import PropTypes from "prop-types";
// import MyPost from "./MyPost";
//
//
// class MyPostContainer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//         this.onPostChange = this.onPostChange.bind(this);
//         this.addText = this.addText.bind(this);
//     }
//
//     onPostChange(e) {
//         this.setState({value: e.target.value});
//     }
//
//     addText(e) {
//         this.props.addPost(this.state.value);
//         this.setState({value: ''});
//         e.preventDefault();
//     };
//
//
//     render() {
//         return (
//             <div className={style.myPostWrapper}>
//                 <div className={style.myPost}>
//                     <MyPost {...this.props}
//                             value={this.state.value}
//                             onPostChange={this.onPostChange}
//                             addText={this.addText}/>
//
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default MyPostContainer;
//
// MyPostContainer.propTypes = {
//     myPosts: PropTypes.shape({
//         titlePost: PropTypes.string.isRequired,
//         placeholderPost: PropTypes.string.isRequired
//     })
// };
