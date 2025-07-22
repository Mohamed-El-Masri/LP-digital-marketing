# موقع التسويق الرقمي المحترف 🚀

## 🎯 نظرة عامة
موقع تسويق رقمي احترافي باللغة العربية مبني بـ React + TypeScript + Vite مع تصميم متقدم ومتجاوب.

## ✨ التحسينات المطبقة

### 🎨 التصميم والواجهة
- ✅ **CSS منفصل**: ملف مخصص لكل component
- ✅ **ألوان محسنة**: متغيرات CSS عامة للتحكم السهل
- ✅ **أنيميشنز متقدمة**: حركات سلسة وتأثيرات بصرية
- ✅ **أيقونات احترافية**: رموز واضحة ومناسبة
- ✅ **زر الرجوع محسن**: سهم صحيح للعربية بدون تسطير

### 🏗️ التحسينات التقنية
- ✅ **الصفحة الرئيسية**: سهم في الكروت بالاتجاه الصحيح (←) أسفل اليمين
- ✅ **صفحة الخدمات**: تصميم ثلاثي الأبعاد مع محتوى واقعي ومفصل
- ✅ **صفحة التواصل**: نموذج إرسال بريد إلكتروني مباشر بدون قاعدة بيانات
- ✅ **جميع الصفحات**: مراجعة شاملة للتصميم والمحتوى

## 🚀 كيفية التشغيل

```bash
# انتقل للمجلد
cd "e:\Gallery\Landing-pages\Digital marketing\v1"

# تثبيت المكتبات
npm install

# تشغيل المشروع
npm run dev
```

**الموقع يعمل على**: `http://localhost:5173`

## 📱 الميزات

- 🌐 **دعم RTL كامل** للغة العربية
- 📱 **تصميم متجاوب** لجميع الأجهزة  
- 🎨 **واجهة عصرية** مع تدرجات احترافية
- ⚡ **أداء سريع** مع Vite
- 📧 **إرسال بريد إلكتروني** مباشر
- 🔧 **TypeScript** للأمان والموثوقية

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
