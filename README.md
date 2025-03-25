# Next.js + Payload CMS Starter Kit

A fully functional starter kit integrating **Next.js** with **Payload CMS**. This setup includes preconfigured **collections, API routes, and example Next.js pages** fetching data from Payload. Perfect for developers looking to build **headless CMS-powered applications** quickly.

## 🚀 Features
- **Preconfigured Payload CMS** with example collections.
- **Next.js frontend** with API calls to fetch data from Payload.
- **Environment variables setup** for easy configuration.

## 📂 Project Structure
```
/nextjs-payload-starter
│── /src/app
│──── /(frontend)  # like any normal Next JS project
│──── /(payload) # only add collections insid the /_collections folder, DON'T edit any other files
│── /public   # Static assets
│── .env  # Example environment variables
│── README.md  # Detailed usage guide
│── package.json
│── tsconfig.json
│── payload.config.ts # import collections inside this file
│── tailwind.config.mjs
│── next.config.js
```

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/nextjs-payload-starter.git
   cd nextjs-payload-starter
   ```

2. **Install dependencies:**
   ```sh
   npm i --legacy-peer-deps
   ```

3. **Set up environment variables:**
   Add your MongoDB connection string to `.env` and add any other values as needed.

4. **Run The application locally:**
   ```sh
   npm run dev
   ```

5. **Access the app:**
   - **Payload Admin Panel:** `http://localhost:3000/admin`
   - **Next.js Frontend:** `http://localhost:3000`

## 🛠 Extending the Starter Kit
- **Adding new collections:** Modify `/src/app/(payload)/_collections`.
- **Extending the frontend:** Feel free to treat `/src/app/(frontend)` like any app directory in your previous Next JS projects.

---

Feel free to contact me for any suggestions or feedback to enhance this starter kit! 🚀

