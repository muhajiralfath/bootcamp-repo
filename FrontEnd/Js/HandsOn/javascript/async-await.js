// Fungsi untuk memanggil API penerjemah eksternal
const translateText = (text, sourceLang, targetLang) => {
    // Simulasi panggilan API penerjemah dengan setTimeout
    return new Promise((resolve) => {
        setTimeout(() => {
            // Contoh respons dari API penerjemah
            const translatedText = `Translated: "${text}" from ${sourceLang} to ${targetLang}`;
            resolve(translatedText);
        }, 2000); // Waktu simulasi response dari API (dalam milidetik)
    });
};

// Fungsi utama untuk menerjemahkan teks
const translateApp = async () => {
    const sourceText = "Hello, how are you?";
    const sourceLang = "en";
    const targetLang = "fr";

    try {
        console.log("Starting translation...");
        const translationResult = await translateText(sourceText, sourceLang, targetLang);
        console.log(translationResult);
        console.log("Translation completed!");
    } catch (error) {
        console.error("Translation failed:", error.message);
    }
};

// Menjalankan aplikasi penerjemah
translateApp();
