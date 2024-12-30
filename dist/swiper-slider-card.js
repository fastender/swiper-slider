if (!window.Swiper) {
    throw new Error("Swiper.js is not loaded. Ensure it's included as a resource.");
}

class SwiperSlider extends HTMLElement {
    setConfig(config) {
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
        if (this.slider) {
            this.removeChild(this.slider);
            this.slider = null;
        }

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
            loop: true,
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: this.config.slidesPerView || 3,
            spaceBetween: this.config.spaceBetween || -50,
            autoplay: {
                delay: this.config.autoplayDelay || 4000,
                disableOnInteraction: false,
            },
  
