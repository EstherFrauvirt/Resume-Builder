import { useState,useContext } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase.config'; // ייתכן שתצטרך להתאים את הנתיב לקובץ firebase.js שלך
import { v4 } from 'uuid';
import dataContext from '../../context/data';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Avatar from '@mui/material/Avatar';

const UpImage = ({handleFileChange}) => {
    const {data,setData}=useContext(dataContext);
  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = async (e) => {
    e.preventDefault();

    try {
      if (imageUpload === null) return;

      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      await uploadBytes(imageRef, imageUpload);

     
      const imageUrl = await getDownloadURL(imageRef);
      console.log(imageUrl);
      setData({...data,imageUrl:imageUrl})
      
     // alert(`Image uploaded successfully! URL: ${imageUrl}`);
     
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImageUpload(selectedImage);
  };

  return (
    <div>

<div style={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Profile Picture
          </Typography>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              handleImageChange(e)
              handleFileChange(e, 'profilePicture')}}
            style={{ display: 'none' }}
            id="profile-picture-upload"
          />
          <label htmlFor="profile-picture-upload">
            <Avatar
              alt="Profile Picture"
              src={data.profilePicture ? URL.createObjectURL(data.profilePicture) : ''}
              sx={{ width: 100, height: 100, cursor: 'pointer', margin: 'auto' }}
            />
          </label>
        </div>
      {/* <input type="file" onChange={handleImageChange} /> */}
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
};

export default UpImage;