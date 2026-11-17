import { auth } from "./firebase.js";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged
} from "firebase/auth";

let verifier;

window.sendCode = async function () {
  const phone = document.getElementById("phone").value.trim();

  if (!phone.startsWith("+")) {
    alert("Numarayı ülke koduyla yaz. Örnek: +905xxxxxxxxx");
    return;
  }

  try {
    if (!verifier) {
      verifier = new RecaptchaVerifier(auth, "recaptcha", {});
    }

    const result = await signInWithPhoneNumber(auth, phone, verifier);
    window.confirmationResult = result;
    document.getElementById("codeArea").style.display = "block";
    alert("Doğrulama kodu gönderildi.");
  } catch (e) {
    alert("Hata: " + e.message);
    if (verifier) {
      await verifier.clear();
      verifier = null;
    }
  }
};

window.verifyCode = async function () {
  try {
    const code = document.getElementById("code").value.trim();
    await window.confirmationResult.confirm(code);
    alert("Giriş başarılı!");
  } catch (e) {
    alert("Kod hatalı veya süresi dolmuş.");
  }
};

onAuthStateChanged(auth, user => {
  document.getElementById("login").style.display = user ? "none" : "block";
  document.getElementById("home").style.display = user ? "block" : "none";
});

window.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, user => {
    document.getElementById("login").style.display = user ? "none" : "block";
    document.getElementById("home").style.display = user ? "block" : "none";
    document.getElementById("chat").style.display = "none";
  });
});
