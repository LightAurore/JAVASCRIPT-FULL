import { Blobify } from "blobfy";

const displayImage = async (imageUrl) => {
  const blob = await Blobfy(imageUrl);

  const blobUrl = URL.createObjectURL(blob);
  const imgElement = document.createElement('img');
  imgElement.src = blobUrl;
  document.body.appendChild(imgElement);

  blob.close();
};

const imageUrl = 'https://example.com/image.jpg';
displayImage(imageUrl);