// pages/index.js
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getStorage, ref, uploadString } from "/pages/firebase/config";
import { storage } from "/pages/firebase/config";

export default function Home() {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const getCroppedImg = useCallback(async () => {
    const image = new Image();
    image.src = imageSrc;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/jpeg");
    });
  }, [imageSrc, croppedAreaPixels]);

  const handleUpload = async () => {
    const croppedImageBlob = await getCroppedImg();
    const croppedImageBase64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(croppedImageBlob);
    });

    const storageRef = ref(storage, `images/${Date.now()}.jpeg`);
    await uploadString(storageRef, croppedImageBase64, "data_url");
    alert("Imagen subida exitosamente!");
  };

  return (
    <div>
      <h1>Recorta tu imagen </h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageSrc && (
        <>
          <div className="crop-container">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <button onClick={handleUpload}>Subir Imagen</button>
        </>
      )}
      <style jsx>{`
        .crop-container {
          position: relative;
          width: 100%;
          height: 400px;
          background: #333;
        }
      `}</style>
    </div>
  );
}
 