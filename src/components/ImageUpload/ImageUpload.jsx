// Component to enable photo upload.
/* Import Libraries */
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

// Calls function to set user uploaded image url onto database
function ImageUpload(props) {
  const dispatch = useDispatch();
  let handleFinishedUpload = (info) => {
    console.log('File uploaded with filename: ', info.filename);
    console.log('Access it on s3 at: ', info.fileUrl);

    if (props.page === 'AddProfilePic') {
      dispatch({
        type: 'SET_PROFILE_PIC',
        payload: info.fileUrl,
      });
    } else if (props.page === 'EditVendorProfilePic') {
      // editProfileElement passed through from EditVendorBasicInfo.
      // dispatches data into edit vendor profile reducer
      props.editProfileElement('profilePic', info.fileUrl);
    } else if (props.page === 'AddEventPhoto') {
      dispatch({
        type: 'SET_EVENT_PHOTO',
        payload: info.fileUrl,
      });
    }
  };

  const uploadOptions = {
    server: 'http://localhost:5000',
    // Works with or without, used to assign url query params, can look up later
    // signingUrlQueryParams: {uploadType: 'avatar'},
  };

  const s3Url = process.env.REACT_APP_S3_URL;

  return (
    <DropzoneS3Uploader
      onFinish={handleFinishedUpload}
      s3Url={s3Url}
      maxSize={1024 * 1024 * 5}
      upload={uploadOptions}
    />
  );
}

export default connect()(ImageUpload);
