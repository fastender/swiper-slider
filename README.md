# Swiper Slider for Home Assistant

A fully customizable swiper slider card for Home Assistant dashboards.

## Features
- Infinite loop
- Autoplay
- Coverflow effect
- Fully configurable

## Installation
1. Copy the `custom_components/swiper_slider` folder to your Home Assistant `custom_components` directory.
2. Add the following to your `resources`:
   ```yaml
   - url: /local/swiper_slider/custom-slider.js
     type: module
