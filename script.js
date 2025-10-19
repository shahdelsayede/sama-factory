// ====== سكرول ناعم عند التنقل ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// ====== رسالة بعد إرسال الفورم ======
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // عرض رسالة بسيطة
  alert("تم إرسال رسالتك بنجاح! 🎉\nشكرًا لتواصلك مع مصنع سما الخروبي ❤️");

  // إعادة تعيين الفورم
  form.reset();
});
