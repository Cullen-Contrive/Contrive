// Component to enable photo upload.
/* Import Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import { useParams } from 'react-router-dom';
// import './ImageUpload.css';

// Styling for dropbox
// const dropzoneStyle = {
//   border: '1px solid black',
//   height: '50px',
//   width: '200px',
//   "background-color": "#dddddd",
// }

// Calls function to set user uploaded image url onto database
class ImageUpload extends Component {

  handleFinishedUpload = info => {
    console.log('File uploaded with filename: ', info.filename);
    console.log('Access it on s3 at: ', info.fileUrl);

    if (this.props.page === "AddProfilePic") {
      this.props.dispatch({
        type: 'SET_PROFILE_PIC',
        payload: info.fileUrl
      });
    }

    // if( this.props.page === "AddArtworkImage" )
    // {
    // this.props.dispatch({
    //   type: 'SET_IMAGE_URL',
    //   payload: info.fileUrl
    // });
    // } else if (this.props.page === "AddProfilePicture")
    // {
    //   this.props.dispatch({
    //     type: 'SET_PFP_URL',
    //     payload: info.fileUrl
    //   });
    // };
    // return(
    // <div>
    //   <p>File Uploaded!</p>
    // </div>
    // );
  }

  render() {

    const uploadOptions = {
      server: 'http://localhost:5000',
      // Works with or without, used to assign url query params, can look up later
      // signingUrlQueryParams: {uploadType: 'avatar'},
    }

    const s3Url = process.env.REACT_APP_S3_URL;

    /* MORE STYLING */
    // Displays text inside the dropbox
    // const innerDropElement = (
    //   <div class="inner-drop">
    //     <p>Click or Drop File Here!</p>
    //   </div>
    // )

    // Displays new message once image is fully uploaded (NOT WORKING)
    // const completedDropElement = (
    //   <div class="completed-drop">
    //     <p>File Uploaded!</p>
    //   </div>
    // )

    return (
      <DropzoneS3Uploader
        // children={innerDropElement}
        onFinish={this.handleFinishedUpload}
        // style={dropzoneStyle}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    )
  }
}

export default connect()(ImageUpload);
