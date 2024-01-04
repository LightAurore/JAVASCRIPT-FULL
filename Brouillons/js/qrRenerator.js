

const href = "https://www.243tech.com";
const size = 300;

new QRCode(document.querySelector("#qrcode"), {
text: href,
width: size,
height: size,

colorDark: "#000014",
colorLight: "#0099ff"
});

// {/* <div id="qrcode"></div> */}