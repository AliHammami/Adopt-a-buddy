import React from 'react';
import axios from 'axios';

class UploadImage extends React.Component {
   
  state = {
    file: null,
    redirect: false,
  }

  handleFile(e) {
    const file = e.target.files[0];
    this.setState({ file: file })
  }

  handleUpload(e){

    const file = this.state.file;
    const animalId = localStorage.animal_id ;
    const formData = new FormData();

    formData.append('file', file)
    formData.append ('animal', animalId)

    axios({
      url: 'http://127.0.0.1:8001/api/animals_images',
      method: 'POST',
      data: formData
    }).then((res) => {
      localStorage.removeItem('animal_id');
    }).catch((err) => {
      console.log(err.response)
    })
    this.setState({ redirect: true });
  }

  render() {

    const redirect  = this.state.redirect;
    if (redirect) {
      return window.location.replace('/');
    }
    return (
      <div className="container uploadImageContainer" align="center">
        <h1>Ajouter une image à votre animal</h1>
        <input name="file" type="file" onChange={(e) => this.handleFile(e)} />
        <button className="btn btn-primary" type="submit" onClick={(e) => this.handleUpload(e)}>Upload!</button>
      </div>
    );
  }
}

export default UploadImage;
