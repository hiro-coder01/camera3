$(function () {
  // カルーセル
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // homeの文字をホバー中薄くする
  $(".home").on("mouseover", function () {
    $(this).animate({
      opacity: 0.5,
    });
  });
  $(".home").on("mouseout", function () {
    $(this).animate({
      opacity: 1.0,
    });
  });

  // worksの文字をホバー中薄くする
  $(".opa").on("mouseover", function () {
    $(this).animate({
      opacity: 0.5,
    });
  });
  $(".opa").on("mouseout", function () {
    $(this).animate({
      opacity: 1.0,
    });
  });

  //モーダルで画面を大きくする
  $(".item").on("click", function () {
    $("#modal").show;
    // オーバーレイをフェードインで表示
    $("#modal").fadeIn(300);

    // attrメソッドでクリックされた画像のsrcを取得す]る
    const pic = $(".item img").attr("src");
    console.log(pic);
    // img要素に書き換える
    $(".bigimg").show();
    $(".bigimg").attr("src", "pic");

    return false;
  });

  // クローズボタン
  $(".close-btn").on("click", function () {
    $("#modal").fadeOut();
    $("body", "html").css("overflow-y", "visible");
    return false;
  });

  // スクロールしたときにTPOへ戻るぼたんを表示
  // ●pxスクロールしたとき
  $(window).scroll(function () {
    let top = $(window).scrollTop();
    console.log(top);
    // TOPボタンを表示する
    if (top >= 400) {
      $("#top-btn").fadeIn();
    } else {
      $("#top-btn").fadeOut();
    }

    // 5. スクロールしたときにセクションをフェードインさせる
    // スクロール量がXセクションの位置を超えているか判定
    const windowHeight = $(window).height();

    $(".fadein").each(function () {
      const targetPositionA = $(this).offset().top;
      if (top > targetPositionA - windowHeight + 200) {
        $(this).addClass("is-fadein");
      }
    });
  });

  // 4. ページ内リンクのスクロールをなめらかにする
  // attr()メソッドを使い、クリックされたa要素のhref属性の値を取得する
  $('a[href ^= "#"]').on("click", function () {
    let position = $(this).offset().top;
    $("html").animate({
      scrollTop: position,
    });
    console.log(position);
    // アニメーションでスクロール先の位置まで移動する
  });
});
