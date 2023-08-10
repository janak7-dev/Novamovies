!(function () {
    function f() {
      var a = document.getElementById("post-box");
      a.innerHTML =
        '<p class="note noteAlert blocked"><strong>Ad-Block Detected :((</strong><br><br>Sorry, We detected that you have activated Ad-Blocker.&nbsp;<br> Please Consider supporting us by disabling your Ad-Blocker,It helps us in maintaining this website.&nbsp;<br>To View the content disable adblocker and refresh the page.<br><br>Thank You !!!</p>';
    }
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.onerror = function () {
      f();
      window.adblock = !0;
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e);
  })();