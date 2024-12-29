
# Swiper Slider for Home Assistant

A fully customizable swiper slider for Home Assistant dashboards.

## Features
- **Infinite loop**: Seamlessly loops through all cards.
- **Autoplay**: Automatically rotates cards at a configurable interval.
- **Coverflow effect**: Adds a depth effect to the displayed cards.
- **Configurable**: Easily adjust the number of visible cards, spacing, and animation effects.

---

## Installation

### Option 1: Through HACS
1. Open **HACS** in Home Assistant.
2. Go to **Frontend** and click the three dots in the top-right corner.
3. Select **Custom Repositories**.
4. Add this repository URL:
   ```
   https://github.com/fastender/swiper-slider
   ```
5. Set the category to **Frontend** and confirm.
6. Install the `Swiper Slider` integration.

### Option 2: Manual Installation
1. Download the repository as a ZIP file and extract it.
2. Copy the folder `dist/` to your Home Assistant `config/www/` directory.
3. Restart Home Assistant to load the integration.

---

## Configuration

### Add Required Resources
After installing the integration, add the following resources to your **Dashboard Resources**:

```yaml
resources:
  - url: /local/swiper-slider/swiper-bundle.min.js
    type: module
  - url: /local/swiper-slider/swiper-bundle.min.css
    type: css
  - url: /local/swiper-slider/custom-slider.js
    type: module
```

### Dashboard Example
Add the slider to your dashboard using the following configuration:

```yaml
type: custom-slider
slidesPerView: 3
spaceBetween: -50
autoplayDelay: 4000
cards:
  - content: "Focus on the big picture"
  - content: "Stay Tuned"
  - content: "Stay Focused"
  - content: "Improve Your Workflow"
  - content: "Keep Improving"
```

---

## Customization

### Parameters

| Parameter        | Description                                       | Default Value |
|------------------|---------------------------------------------------|---------------|
| `slidesPerView`  | Number of cards visible at once                  | `3`           |
| `spaceBetween`   | Spacing between cards (in pixels)                | `-50`         |
| `autoplayDelay`  | Delay in milliseconds for automatic slide rotation | `4000`        |
| `loop`           | Enables infinite loop                            | `true`        |

---

## Development

### Project Structure
```
swiper-slider/
├── dist/
│   ├── custom-slider.js
│   ├── swiper-bundle.min.js
│   └── swiper-bundle.min.css
├── LICENSE
├── README.md
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
