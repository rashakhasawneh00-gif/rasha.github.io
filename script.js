// 1. مسك الفورم من الـ HTML باستخدام الـ ID
const form = document.getElementById("contactForm");

// 2. الاستماع لحدث الضغط على زر الإرسال (Submit Event)
form.addEventListener("submit", function(event) {
    
    // منع السلوك الافتراضي للمتصفح (إعادة تحميل الصفحة فوراً)
    event.preventDefault();

    // 3. جلب القيم المكتوبة داخل الحقول وقص المسافات الزائدة
    const nameValue = document.getElementById("fullName").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const countryValue = document.getElementById("country").value.trim();
    const commentsValue = document.getElementById("comments").value.trim();

    // 4. فحص هل يوجد أي حقل فارغ؟
    if (nameValue === "" || emailValue === "" || countryValue === "" || commentsValue === "") {
        // إذا كان أي حقل فاضي، بنطلع تنبيه للمستخدم
        alert("Please fill in all the required fields before submitting!");
        return; // توقيف عمل الكود هون وعدم الإكمال
    }

    // 5. إذا كل الحقول معبأة، إظهار رسالة النجاح وتفريغ الفورم
    alert("Your message has been submitted successfully!");
    form.reset();
});