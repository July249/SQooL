const $body = document.querySelector("body");
const $switchBtn = $body.querySelector(".btn-darkmode");

function toggleMode() {
  const $sideBar = $body.querySelector(".side-bar");
  const $header = $body.querySelector(".global-header");
  const $main = $body.querySelector("main");
  // 메인-에디터 팀에서 다크모드 적었습니다.
  const $editor_1 = $body.querySelector(".cm-keyword");
  const $editor_2 = $body.querySelector(".cm-s-default");

  const $footer = $body.querySelector(".sql-footer");
  const $sqlBtnWrap = $sideBar.querySelector(".sql-btn-wrap");
  // sql-btn-wrap sideBar=> body로 수정 가넝?

  $body.classList.toggle("dark-mode");
  $sideBar.classList.toggle("dark-mode");
  $header.classList.toggle("dark-mode");
  $switchBtn.classList.toggle("dark-mode");
  $main.classList.toggle("dark-mode");
  // 메인-에디터 팀에서 다크모드 적었습니다.
  $footer.classList.toggle("dark-mode");
  $editor_1.classList.toggle("dark-mode");
  $editor_2.classList.toggle("dark-mode");
  $sqlBtnWrap.classList.toggle("dark-mode");
}

$switchBtn.addEventListener("click", toggleMode);
