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
│──── /(payload) # only add collections inside the /_collections folder, DON'T edit any other files
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
   git clone git@github.com:Muhamedsafwat/Next-Payload-starter-kit.git
   cd Next-Payload-starter-kit
   ```

2. **Install dependencies:**

   ```sh
   npm i --legacy-peer-deps
   ```

3. **Set up environment variables:**
   Create `.nev` file in the root directory and add the next variables
   NEXT_PUBLIC_BASE_URL=http://localhost:3000/ 'or whaterve port you're running the application on'
   NEXT_PUBLIC_DB_KEY= 'Your MongoDB Connection String'
   NEXT_PUBLIC_PAYLOAD_SECRET= 'Any random string '

4. **Run The application locally:**

   ```sh
   npm run dev
   ```

5. **Access the app:**
   - **Payload Admin Panel:** `http://localhost:3000/admin`
   - **Next.js Frontend:** `http://localhost:3000`

## 🛠 Extending the Starter Kit

- **Adding new collections:** Modify `/src/app/(payload)/_collections`.
- **Fields in Payload CMS:** Explore all field types that payload offers [here](https://payloadcms.com/docs/fields/overview)
- **Extending the frontend:** Feel free to treat `/src/app/(frontend)` like any app directory in your previous Next JS projects.

---

Feel free to contact me for any suggestions or feedback to enhance this starter kit! 🚀
