const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
  }, 1500);
  //특정 주기마다 실행
  const interval = setInterval(() => {
    console.log('1초마다 실행');
  }, 1000);
  
  const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
  }, 3000);
  
  setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);// 인터벌 중지(무한루프방지)
  }, 2500);
  
  const immediate = setImmediate(() => {
    console.log('즉시 실행');
  });
  
  const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다');
  });
  
  clearImmediate(immediate2);