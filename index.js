document.getElementById('audio').addEventListener('change', (event) => {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.addEventListener('load', (event) => {
    const arrayBuffer = event.target.result;

    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();

    audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
      console.log(audioBuffer);
    });
  });
  reader.readAsArrayBuffer(file);
});
