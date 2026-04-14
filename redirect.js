(function () {
  if (window.location.pathname.includes("page2.html")) {

    document.addEventListener("click", function (e) {
      const link = e.target.closest("a");

      // sirf page3 link pe apply hoga
      if (link && link.href.includes("page3.html")) {
        e.preventDefault(); // normal redirect rok diya

        // message create
        const msg = document.createElement("div");
        msg.innerText = "Welcome dear user, thanks for visiting site";

        msg.style.position = "fixed";
        msg.style.top = "50%";
        msg.style.left = "50%";
        msg.style.transform = "translate(-50%, -50%)";
        msg.style.background = "#000";
        msg.style.color = "#fff";
        msg.style.padding = "20px 30px";
        msg.style.borderRadius = "10px";
        msg.style.fontSize = "18px";
        msg.style.zIndex = "9999";

        document.body.appendChild(msg);

        // 🔥 EXACT: 10 seconds baad redirect
        setTimeout(function () {
          window.location.href = "page3.html";
        }, 10000);
      }
    });

  }
})();