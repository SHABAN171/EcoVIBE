function playNatureSound() {
    const audio = document.getElementById('forestAudio');
    if (audio) {
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
  }
  