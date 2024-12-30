if (!window.Swiper) {
    throw new Error("Swiper.js is not loaded. Ensure it's included as a resource.");
}

class SwiperSliderCard extends HTMLElement {
    setConfig(config) {
        // Validierung der Konfiguration
        if (!config.cards || !Array.isArray(config.cards)) {
            throw new Error("Invalid configuration: 'cards' must be an array.");
        }
        this.config = config;
        this.render();
    }

    connectedCallback() {
        if (!this.isConnected) return;
        this.render();
    }

    render() {
        // Entfernen des bestehenden Sliders, falls vorhanden
        if (this.slider) {
            this.removeChild(this.slider);
            this.slider = null;
        }

        // Erstellen des Slider-Containers
        const container = document.createElement('div');
        container.className = 'swiper-container';
        container.innerHTML = `
          <div class="swiper-wrapper">
            ${this.config.cards
                .map(
                    (card) => `
              <div class="swiper-slide">
                <ha-card>${card.content}</ha-card>
              </div>`
                )
                .join('')}
          </div>
          <div class="swiper-pagination"></div>
        `;

        this.appendChild(container);

        // Initialisierung von Swiper
        try {
            const swiper = new Swiper(container, {
                loop: true,
                effect: 'coverflow',
                centeredSlides: true,
                slidesPerView: this.config.slidesPerView || 3,
                spaceBetween: this.config.spaceBetween || -50,
                autoplay: {
                    delay: this.config.autoplayDelay || 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 3,
                    slideShadows: true,
                },
            });

            this.slider = container;
        } catch (error) {
            console.error("Error initializing Swiper:", error);
        }
    }

    getCardSize() {
        // Angabe der Kartengröße
        return this.config?.cards?.length || 3;
    }
}

// Registrierung des Custom Elements
customElements.define('swiper-slider-card', SwiperSliderCard);
