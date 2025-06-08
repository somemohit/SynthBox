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

var arr = [1, 2, 3, 4, 5, 6, 7];
var chunkSize = 2;
for (let i = 0; i < arr.length; i++) {
  var chunk = arr.slice(i * chunkSize, (i + 1) * chunkSize);
  const min = Math.min(...chunk);
  console.log(min);
}
