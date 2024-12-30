
class SwiperSlider extends HTMLElement {
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
    }

    getCardSize() {
        return 3;
    }
}

customElements.define('swiper-slider-card', SwiperSlider);
