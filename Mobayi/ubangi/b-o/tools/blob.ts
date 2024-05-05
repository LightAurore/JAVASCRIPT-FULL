
public blobToFile = (theBlob: Blob, fileName:string): File => {
  const b: any = theBlob;
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  b.lastModifiedDate = new Date();
  b.name = fileName;
    
  //Cast to a File() type
  return theBlob as File;
}


// ----------------------------------
public blobToFile = (theBlob: Blob, fileName:string): File => {       
  return new File(
      [theBlob as any], // cast as any
      fileName, 
      {
          lastModified: new Date().getTime(),
          type: theBlob.type 
      }
  )
}
function blobToFile(theBlob, fileName){       
  return new File([theBlob], fileName, { lastModified: new Date().getTime(), type: theBlob.type })
}