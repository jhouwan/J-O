// Ambil elemen modal dan elemen di dalamnya
const modal = document.getElementById("media-modal");
const modalImage = document.getElementById("modal-image");
const modalVideo = document.getElementById("modal-video");
const closeModal = document.querySelector(".modal .close");

// Tambahkan event listener ke semua gambar dan video
document.querySelectorAll(".media-item img, .media-item video").forEach((media) => {
  media.addEventListener("click", () => {
    // Tentukan apakah media adalah gambar atau video
    if (media.tagName === "IMG") {
      modalImage.src = media.src;
      modalImage.style.display = "block";
      modalVideo.style.display = "none";
    } else if (media.tagName === "VIDEO") {
      modalVideo.src = media.querySelector("source").src;
      modalVideo.style.display = "block";
      modalImage.style.display = "none";
    }

    // Tampilkan modal
    modal.style.display = "flex";
  });
});

// Tutup modal ketika tombol close ditekan
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalImage.src = ""; // Hapus sumber untuk mencegah beban berlebih
  modalVideo.src = ""; // Hapus sumber untuk mencegah suara terus berjalan
});

// Tutup modal ketika area luar modal diklik
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalImage.src = "";
    modalVideo.src = "";
  }
});
