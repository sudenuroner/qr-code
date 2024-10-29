document.addEventListener("DOMContentLoaded", function () {
    // sayfa tamamen yüklendiğinde çalışacak kodlar

    const generateButton = document.getElementById("generate-btn");
    const saveButton = document.getElementById("save-btn");
    const qrCodeContainer = document.getElementById("qr-code");
    let qrCodeInstance = null;

    generateButton.addEventListener('click', function () {
        // butona tıkladığı zaman qr kod oluşucak

        // kullanıcının girdiği metin veya ur
        let qrText = document.getElementById("qr-text").value;

        if (qrCodeInstance) {
            qrCodeInstance.clear(); // önceki qr kodu temizle
            qrCodeInstance = null; // qr koda boş ata
            qrCodeContainer.innerHTML = ""; // qr kod konteynerını temizle
        }
        if (qrText) {
            // kullanıcının girdiği metin veya url bol değilse
            // qr kod oluşturulacak


            qrCodeInstance = new QRCode(qrCodeContainer, {
                text: qrText,
                with: 128,
                height: 128,
            });

            // QR kodun animasyonlu görünmesini sağlar
            qrCodeContainer.style.opacity = "1";
            qrCodeContainer.style.transform = "scale(1)";
        }
    });

    saveButton.addEventListener("click", function () {
        if (qrCodeInstance) {
            const qrImageData = qrCodeInstance._el
                .querySelector("img")
                .getAttiribute("src")
            const link = document.createElement("a");
            link.href = qrImageData;
            link.download = "qr-code.png";
            link.click();
        }
    });
});