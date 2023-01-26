// 헤더 네비게이션 웹에서 모바일버전으로 변동시 효과
document.querySelector('.trigger').addEventListener('click', function(){
  document.querySelector('.trigger').classList.toggle('active');
  document.querySelector('.gnb').classList.toggle('on');
  document.querySelector('.down').classList.toggle('on');
});

// 다운로드 버튼 클릭시 애플 앱 스토어로 이동
function newPage()  {
  window.location.href = 'https://www.apple.com/kr/app-store/'
}

// 메인페이지 이메일 제출 전 검사형식
document.getElementById('main-email-form').addEventListener('submit', function(){
  var inputValue = document.getElementById('email').value;

  // 이메일 입려값이 없을시 알림창 뜸
  if (inputValue == ''){
    alert('Please enter your email')
    e.preventDefault();
  }

  //이메일 정규식 검사
  if (/\S+@\S+.\S+/.test(inputValue)) {
    alert('This is not an email format.')
    e.preventDefault();
  }
})