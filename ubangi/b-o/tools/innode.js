// f-i

var data = {
  "file": file, //this is blob
  "file_name": bucket_string
};

return await axios.post(`/files/upload-file`, data);

// b-o
const file = new File(data['file'], "tests/" + customer + "/" + sound + ".wav");