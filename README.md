
# Custom Slider for Home Assistant

A fully customizable swiper slider for Home Assistant dashboards.

## Features
- **Infinite loop**: The slider seamlessly loops through all cards.
- **Autoplay**: Automatically rotates cards at a configurable interval.
- **Coverflow effect**: Adds a depth effect to the displayed cards.
- **Configurable**: Easily adjust the number of visible cards, spacing, and animation effects.

---

## Installation

### Option 1: Through HACS
1. Open **HACS** in Home Assistant.
2. Go to **Integrations** and click the three dots in the top-right corner.
3. Select **Custom Repositories**.
4. Add this repository URL:
   ```
   https://github.com/fastender/swiper-slider
   ```
5. Set the category to **Integration** and confirm.
6. Install the `Custom Slider` integration.

### Option 2: Manual Installation
1. Download the repository as a ZIP file and extract it.
2. Copy the folder `custom_components/custom_slider` to your Home Assistant `config/custom_components/` directory.
3. Restart Home Assistant to load the integration.

---

## Configuration

### Add Required Resources
After installing the integration, add the following resources to your **Dashboard Resources**:

```yaml
resources:
  - url: /hacsfiles/custom_slider/swiper-bundle.min.js
    type: module
  - url: /hacsfiles/custom_slider/swiper-bundle.min.css
    type: css
  - url: /hacsfiles/custom_slider/custom-slider.js
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
hacs-custom-slider/
├── custom_components/
│   └── custom_slider/
│       ├── __init__.py
│       ├── manifest.json
│       ├── custom-slider.js
│       ├── swiper-bundle.min.js
│       └── swiper-bundle.min.css
├── .translations/
│   ├── en.json
│   └── de.json
├── info.md
├── hacs.json
├── LICENSE
├── README.md
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
