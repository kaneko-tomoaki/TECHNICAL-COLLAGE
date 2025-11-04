// ここからページ遷移時のフェードインを設定

window.addEventListener('DOMContentLoaded', () => {   // DOMの読み込み終了後に実行
  document.body.style.opacity = 0;                    // ページ表示直後は透明な状態のままで
  document.body.style.transition = 'opacity 0.8s';    // 透明度の変化（フェード）を0.8秒かけて行う
  setTimeout(() => {                                  // 少しだけ遅延させ透明化をスタート（フェードイン開始）
    document.body.style.opacity = 1;
  }, 10);
}); // フェードイン効果ここまで

// ここからはページ遷移時のフェードアウトを設定

  document.addEventListener('DOMContentLoaded', () => { // DOMの読み込み終了後に実行
    document.querySelectorAll('a').forEach(link => {    // すべてのaタグ（リンク）を網羅しつつ処理する
      if (link.target === '_blank' || link.href.startsWith('javascript')) return; // 新しいタブやjavascript:は遷移効果から除外
      link.addEventListener('click', function(e) {      // リンクがクリックされた際の処理を追加
        e.preventDefault();                             // デフォルトのリンク動作（即遷移）はストップし、
        document.body.style.opacity = 0;                // フェードアウト（ページを徐々に透明にして）
        setTimeout(() => {                              // 0.8秒後に次のリンク先へ遷移していく
          window.location.href = this.href;
        }, 800);
      });
    });
  }); // フェードアウト効果ここまで