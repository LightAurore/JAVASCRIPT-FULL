
function blobToFile(theBlob, fileName){
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}

const myBlob = new Blob();

//do stuff here to give the blob some data...

const myFile = blobToFile(myBlob, "my-image.png");


// -------------------------------
function blob2file(blobData) {
  const fd = new FormData();
  fd.set('a', blobData, 'filename');
  return fd.get('a');
}


// ----------------------------------------




// -------------------------------------

var blob = new Blob(["Hello world"], { type: "text/plain;charset=utf-8"})
var file = new File([blob], "name.txt");
// ---------------------------
var file1 = new File([Blob], `my_image${new Date()}.jpeg`, {
  type: "image/jpeg",
  lastModified: new Date(),
  size: 2,
});


var file = new File([blob], "my_image.png",{type:"image/png", lastModified:new Date().getTime()})

// ------------------------------
var dataUrl = canvas.toDataURL('image/jpeg');
var bytes = dataUrl.split(',')[0].indexOf('base64') >= 0 ?
          atob(dataUrl.split(',')[1]) :
          (<any>window).unescape(dataUrl.split(',')[1]);

var mime = dataUrl.split(',')[0].split(':')[1].split(';')[0];

var max = bytes.length;

var ia = new Uint8Array(max);

for (var i = 0; i < max; i++) {

  ia[i] = bytes.charCodeAt(i);
  
}

var newImageFileFromCanvas = new File([ia], 'fileName.jpg', { type: mime });


---------------------------------------------------