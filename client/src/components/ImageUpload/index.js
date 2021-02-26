import React, { Component } from "react";
import axios from "axios";

class ImageUpload extends Component {
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        //this.setState({ selectedFile: event.target.files[0] });
    }

    // fileUploadHandler = () => {
    //     const fd = new FormData();
    //     fd.append("image", this.state.selectedFile, this.state.selectedFile.name);

    //     axios
    //         .post("/upload", fd)
    //         .then (res => {
    //             console.log(res);
    //         });
    // }

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileSelectedHandler} />
                {/* <button onClick={this.fileUploadHandler}>Upload</button> */}
            </div>
        );
    }
}

export default ImageUpload;