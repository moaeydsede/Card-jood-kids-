
(() => {
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();

  const shareBtn = document.getElementById("shareBtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const url = window.location.href;
      try {
        if (navigator.share) {
          await navigator.share({ title: document.title, url });
        } else {
          await navigator.clipboard.writeText(url);
          alert("تم نسخ الرابط ✅");
        }
      } catch (_) {}
    });
  }
})();
