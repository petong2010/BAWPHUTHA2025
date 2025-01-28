document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน (จำลองข้อมูล)
    const correctUsername = "admin";
    const correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        alert("เข้าสู่ระบบสำเร็จ!");
        window.location.href = "dashboard.html"; // ไปยังหน้า Dashboard หรือหน้าหลัก
    } else {
        errorMessage.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!";
    }
});
