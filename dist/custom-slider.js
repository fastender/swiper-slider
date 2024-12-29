
class CustomSlider extends HTMLElement {
    setConfig(config) {
        this.config = config;
        this.render();
    }

    connectedCallback() {
        if (!this.isConnected) return;
        this.render();
    }

    render() {
        if (this.slider) this.removeChild(this.slider);

        const container = document.createElement('div');
        container.className = 'swiper-container';
        container.innerHTML = `
          <div class="swiper-wrapper">
            ${this.config.cards.map((card) => `
              <div class="swiper-slide">
                <ha-card>${card.content}</ha-card>
              </div>`).join('')}
          </div>
          <div class="swiper-pagination"></div>
        `;

        this.appendChild(container);

        const swiper = new Swiper(container, {
            loop: true, // Endlosschleife aktivieren
            effect: 'coverflow', // Coverflow-Effekt
            centeredSlides: true,
            slidesPerView: this.config.slidesPerView || 3, // Anzahl sichtbarer Karten
            spaceBetween: this.config.spaceBetween || -50, // Abstand zwischen den Karten
            autoplay: {
                delay: this.config.autoplayDelay || 4000, // Automatische Rotation
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            coverflowEffect: {
                rotate: 0, // Keine Rotation
                stretch: 0, // Kein Strecken
                depth: 200, // Tiefeneffekt
                modifier: 3, // Skalierung
                slideShadows: true, // Schatten aktivieren
            },
        });

        this.slider = container;
    }

    getCardSize() {
        return 3; // Anzahl der sichtbaren Karten
    }
}

customElements.define('custom-slider', CustomSlider);
