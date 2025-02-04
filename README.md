# Mock Landing Page – Technical Test for AM

## 🚀 Live Demo
[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://nucleus-am.vercel.app/)

## 📌 Summary
- Built with **Next.js**, **TypeScript**, and **SCSS**, hosted on **Vercel**.
- **Responsive** across mobile, tablet, and desktop breakpoints, including fluid typography with `clamp()`.
- **Lazy loading** for images by default through Next.js.
- **Optimized images**: Exported main large image in three sizes for better performance on different screens. Using this image as background-image allowed for better responsive resizing, so opted for no Next.js optimisation.
- **Animations**: Applied to the CTA button, accordion, mobile menu sidebar, and minor hover effects.
- Ensured keyboard navigation and screen reader support.
- Re-arranged the main tagline's words & icons for better mobile display.

## 📈 Potential Improvements
- **Cross-browser testing**: Access to multiple devices or a BrowserStack subscription would improve testing.
- **Mobile menu alignment**: Not properly aligned on iPhone; troubleshooting was limited without access.
- **Performance optimization**: Core Web Vitals "Performance" score is 95%; could further optimize large images and explore **WebP**.
- **CSS transitions**: Some `transition` properties had to be repeated—need, want to investigate a solution to better follow **DRY principles**.

## 📊 Lighthouse Report
![Lighthouse Report](https://github.com/user-attachments/assets/f5c47953-04f6-40d3-94a5-d3053f0db835)

## 🌍 Core Web Vitals
[View Analysis](https://pagespeed.web.dev/analysis/https-nucleus-am-vercel-app/u7pa8iac1m)

## Screenshots
![Core Web Vitals](https://github.com/user-attachments/assets/02e4d076-d132-477e-aa3f-346647f6b3a7)
![image](https://github.com/user-attachments/assets/07f5dc10-2bd7-4805-ac17-a03043e6dab5)
![image](https://github.com/user-attachments/assets/0283f279-cb81-45ea-901d-c18f4b3daed3)
![image](https://i.imgur.com/OuVB2mE.gif)
![image](https://i.imgur.com/u0cQpIT.gif)
![image](https://i.imgur.com/lnHvTFh.gif)

