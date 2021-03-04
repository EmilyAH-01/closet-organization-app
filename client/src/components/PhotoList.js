import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { openUploadWidget } from '../utils/CloudinaryService';
import { photosUploaded } from '../actions';
import Photo from './Photo';
//import FacebookImage from './FacebookImage';
//import Introduction from './Introduction';
import {CloudinaryContext} from 'cloudinary-react';

//const urlStart = "https://res.cloudinary.com/emilyah/image/upload/";

class PhotoList extends Component {
    render() {
        return (
            <div className="photoList">
                {/* <FacebookImage
                    publicId1="billclinton"
                    publicId2="officialchucknorrispage"
                /> */}
                {/* <Introduction /> */}
                <div className="actions">
                    <a
                        className="upload_link"
                        onClick={this.uploadImageWithCloudinary.bind(this)}
                    >
                        Upload Image
                    </a>
                </div>
                {/* <div className="actions">
                    <NavLink className="upload_link" exact to="/additem/new">
                        Add photo with React File upload
                    </NavLink>
                </div> */}
                <div className="photos">
                    {this.props.photos.length === 0 && (
                        <p>No photos were added yet.</p>
                    )}
                    {this.props.photos.map(photo => {
                        return (
                            <div>
                                <Photo
                                key={photo.public_id}
                                publicId={photo.public_id}
                                />
                                <p>{"https://res.cloudinary.com/emilyah/image/upload/" + photo.public_id}</p>
                            </div>
                        );
                    })}
                </div>
                {/* <div className="note">
                    Take a look at our documentation of{' '}
                    <a
                        href="https://cloudinary.com/documentation/image_transformations"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Image Transformations
                    </a>{' '}
                    for a full list of supported transformations.
                </div> */}
            </div>
        );
    }

    uploadImageWithCloudinary() {
        const uploadOptions = { tags: ['myphotoalbum'], ...this.context };
        console.log(uploadOptions);

        openUploadWidget(uploadOptions, (error, result) => {
          if (!error) {
            const {event, info} = result;
            if (event === "success") {
              this.props.onPhotosUploaded([info]);
            }
          } else {
            console.log(error);
          }
        });
    }
}

PhotoList.contextType = CloudinaryContext.contextType;

PhotoList.propTypes = {
    photos: PropTypes.array,
    onPhotosUploaded: PropTypes.func,
};

const PhotoListContainer = connect(
    state => ({ photos: state.photos }),
    {
        onPhotosUploaded: photosUploaded,
    }
)(PhotoList);

export default PhotoListContainer;
