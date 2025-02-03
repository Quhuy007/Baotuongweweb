 <script>
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll("h2").forEach(section => {
        section.addEventListener("click", function () {
          const content = this.nextElementSibling;
          content.style.display = content.style.display === "block" ? "none" : "block";
        });
      });
      
      document.querySelectorAll(".image").forEach(image => {
        image.addEventListener("click", function () {
          const modal = document.createElement("div");
          modal.classList.add("modal");
          modal.innerHTML = `
            <div class="modal-content">
              <img src="${this.dataset.src}" alt="Hình minh họa">
              <span class="close">&times;</span>
            </div>`;
          document.body.appendChild(modal);
          
          modal.querySelector(".close").addEventListener("click", () => modal.remove());
          modal.addEventListener("click", e => { if (e.target === modal) modal.remove(); });
        });
      });
    });
  </script>
