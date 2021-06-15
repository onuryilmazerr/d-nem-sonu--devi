window.onload = () => {

  function showTime() {
      let date = new Date();
      let hour = date.getHours(); // 0 dan 23 e
      let minutes = date.getMinutes(); // 0 dan 59 a
      let seconds = date.getSeconds(); // 0 dan 59 a



      hour = (hour < 10) ? '0' + hour : hour;
      minutes = (minutes < 10) ? '0' + minutes : minutes;
      seconds = (seconds < 10) ? '0' + seconds : seconds;

      let time = hour + ':' + minutes + ':' + seconds;

      document.querySelector('#myTime').innerText = time;


      setTimeout(showTime, 1000);
  }

  showTime();

}