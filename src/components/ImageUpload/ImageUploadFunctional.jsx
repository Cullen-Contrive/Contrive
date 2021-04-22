// Component to enable photo upload.
/* Import Libraries */
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import { useParams } from 'react-router-dom';

// Calls function to set user uploaded image url onto database
function ImageUpload(props) {
  const dispatch = useDispatch();
  let handleFinishedUpload = (info) => {
    console.log('File uploaded with filename: ', info.filename);
    console.log('Access it on s3 at: ', info.fileUrl);

<<<<<<< HEAD
    if (props.page === 'AddProfilePic') {
=======
    if( props.page === "AddProfilePic" ) {
>>>>>>> 3db6abcd51080037f64b2cb96dc69f4d10195991
      dispatch({
        type: 'SET_PROFILE_PIC',
        payload: info.fileUrl,
      });
    } else if (props.page === 'AddEventPhoto') {
      dispatch({
        type: 'SET_EVENT_PHOTO',
        payload: info.fileUrl,
      });
<<<<<<< HEAD
    }
  };
=======
    } else if ( props.page === "EditVendorProfilePic" ) {
      // editProfileElement passed through from EditVendorBasicInfo. 
      // dispatches data into edit vendor profile reducer
      props.editProfileElement('profilePic', info.fileUrl);
    }
  }
>>>>>>> 3db6abcd51080037f64b2cb96dc69f4d10195991

  const uploadOptions = {
    server: 'http://localhost:5000',
    // Works with or without, used to assign url query params, can look up later
    // signingUrlQueryParams: {uploadType: 'avatar'},
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 3db6abcd51080037f64b2cb96dc69f4d10195991

  const s3Url = process.env.REACT_APP_S3_URL;

  return (
    <DropzoneS3Uploader
      // children={innerDropElement}
      onFinish={handleFinishedUpload}
      // style={dropzoneStyle}
      s3Url={s3Url}
      maxSize={1024 * 1024 * 5}
      upload={uploadOptions}
    />
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 3db6abcd51080037f64b2cb96dc69f4d10195991
}

export default connect()(ImageUpload);
