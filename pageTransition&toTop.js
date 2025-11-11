// ここからページ遷移時のフェードイン・フェードアウトを設定
window.addEventListener('DOMContentLoaded', () => {
  // 最初のフェードイン
  document.body.style.opacity = 1;

  // フェードアウト
  document.querySelectorAll('a').forEach(link => {
    // 新規タブ・javascriptリンク・アンカーリンク除外
    if (
      link.target === '_blank' ||
      link.href.startsWith('javascript') ||
      link.getAttribute('href').startsWith('#')
    ) return;
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = this.href;
      }, 800);
    });
  });
});

/*
上述のコードとの関連で、style.cssに以下の設定を追記
@import url(common.css);の次の行に・・・

html{
  scroll-behavior:smooth;
}
body{
  ・・・・・既存の設定・・・・
  
  opacity:0; 
  transition:opacity 0.8s;
}

*/