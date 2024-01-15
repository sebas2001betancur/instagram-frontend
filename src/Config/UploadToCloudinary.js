export const uploadToCloudinary = async (image) => {
  if (image) {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_present", "instagram");
    data.append("cloud_name", "dj7gpfpz5");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dj7gpfpz5/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const fileData = await res.json();

    console.log("fileData ", fileData);
    return fileData.url.toString();
  }
};
