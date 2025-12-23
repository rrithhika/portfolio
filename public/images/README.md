# How to Add Your Hero Background Image

## Steps:

1. **Add your image file** to this folder (`public/images/`)
2. **Name it** `hero-background.jpg` (or any name you prefer)
3. **Update** `src/components/Hero.css` with the correct path

## Example:

If your image is named `hero-background.jpg`, update the `.hero` class in `src/components/Hero.css`:

```css
.hero {
  height: 100vh;
  background: 
    linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.85) 50%, rgba(51, 65, 85, 0.85) 100%),
    url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* rest of the styles... */
}
```

## Supported Image Formats:
- JPG/JPEG
- PNG
- WebP
- SVG

## Recommended Image Size:
- Width: 1920px or larger
- Height: 1080px or larger
- Aspect Ratio: 16:9

## Tips:
- Use high-quality images for best results
- Keep file size under 500KB for faster loading
- Dark or neutral images work best with the overlay
