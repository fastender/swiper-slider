
# Swiper Slider Card for Home Assistant

A fully customizable Swiper Slider Card for Home Assistant dashboards.

![Swiper Slider Preview](assets/slider-preview.png)

## Features

- **Infinite Loop**: The slider cycles through all cards seamlessly.
- **Autoplay**: Automatically rotates cards at a configurable interval.
- **Coverflow Effect**: Adds a depth effect to displayed cards.
- **Highly Customizable**: Adjust the number of visible cards, spacing, and animation effects.

---

## Installation

### Option 1: Install via HACS

1. **Open HACS**: Navigate to **HACS** in your Home Assistant dashboard.
2. **Add Custom Repository**:
   - Click the three dots in the top-right corner and select **Custom Repositories**.
   - Add the repository:
     ```
     https://github.com/fastender/swiper-slider
     ```
   - Set the category to **Frontend** and confirm.
3. **Install the Integration**:
   - Search for `Swiper Slider Card` in HACS and install it.
4. **Restart Home Assistant**: Restart Home Assistant to apply changes.

---

### Option 2: Manual Installation

1. **Download Files**:
   - Download the latest version of the repository as a ZIP file from GitHub.
   - Extract the ZIP file on your computer.

2. **Copy Files**:
   - Copy the contents of the `dist/` folder to the following directory on your Home Assistant server:
     ```
     config/www/swiper-slider/
     ```

3. **Add Resources**:
   - Add the following resources to your `configuration.yaml` or use the Resource Manager in Home Assistant:
     ```yaml
     resources:
       - url: /local/swiper-slider/swiper-bundle.min.js
         type: module
       - url: /local/swiper-slider/swiper-bundle.min.css
         type: css
       - url: /local/swiper-slider/swiper-slider-card.js
         type: module
     ```

4. **Restart Home Assistant**:
   - Restart Home Assistant to apply the changes.

---

## Configuration

Add the Swiper Slider Card to your dashboard with the following example configuration:

```yaml
type: custom:swiper-slider-card
slidesPerView: 3
spaceBetween: -50
autoplayDelay: 4000
cards:
  - content: "Focus on the big picture"
  - content: "Stay tuned"
  - content: "Stay focused"
  - content: "Improve your workflow"
  - content: "Keep improving"
```

---

## Customization Options

### Parameters

| Parameter        | Description                                         | Default Value |
|------------------|-----------------------------------------------------|---------------|
| `slidesPerView`  | Number of cards visible at once                     | `3`           |
| `spaceBetween`   | Space between cards (in pixels)                     | `-50`         |
| `autoplayDelay`  | Delay in milliseconds for automatic rotation        | `4000`        |
| `loop`           | Enables infinite looping                            | `true`        |

---

## Development

### Project Structure

```
swiper-slider/
├── dist/
│   ├── swiper-slider-card.js
│   ├── swiper-bundle.min.js
│   └── swiper-bundle.min.css
├── LICENSE
├── README.md
├── assets/
│   └── slider-preview.png
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
