const startButton = document.getElementById("startButton");
const callButton = document.getElementById("callButton");
const hangupButton = document.getElementById("hangupButton");
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");

let localStream;
let pc;
const servers = null; // Use default STUN/TURN servers

startButton.onclick = start;
callButton.onclick = call;
hangupButton.onclick = hangup;

async function start() {
  startButton.disabled = true;
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  localVideo.srcObject = stream;
  localStream = stream;
  callButton.disabled = false;
}

async function call() {
  callButton.disabled = true;
  hangupButton.disabled = false;

  pc = new RTCPeerConnection(servers);
  pc.onicecandidate = ({ candidate }) => sendMessage({ candidate });
  pc.ontrack = (event) => (remoteVideo.srcObject = event.streams[0]);

  localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  sendMessage({ offer });
}

function hangup() {
  pc.close();
  pc = null;
  hangupButton.disabled = true;
  callButton.disabled = false;
}

function sendMessage(message) {
  // Implement your signaling server here
  // Example: socket.emit('message', message);
}

// Listen for messages from signaling server
// Example: socket.on('message', message => handleMessage(message));

async function handleMessage(message) {
  if (message.offer) {
    await pc.setRemoteDescription(new RTCSessionDescription(message.offer));
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    sendMessage({ answer });
  } else if (message.answer) {
    await pc.setRemoteDescription(new RTCSessionDescription(message.answer));
  } else if (message.candidate) {
    await pc.addIceCandidate(new RTCIceCandidate(message.candidate));
  }
}
