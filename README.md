# Vue-Jobs

Quick Vue.js learning project designed to display and manage job listings. It provides a clean and intuitive interface where users can view, add, delete, and update job listings. This project is built for learning purposes and does not include authentication features.

Inspired by: Traversy Media [Vue.js Crash Course 2024](https://youtu.be/VeNfHj6MhgA?si=nFuYPUJjAHisxa-H)

## Features

- View jobs
- Add new job
- Update existing job
- Delete job
- Skeleton loading animations for better UX
- Responsive design for all devices

## Run with Docker

You can run this project using Docker for a hassle-free setup.

## Installation (Manual Setup)

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Samcoops/vue-jobs
   cd vue-jobs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the project in your browser at:
   ```
   http://localhost:3000
   ```

## API

Create a `.env.local` file and add the following variable:
   ```bash
   VITE_MOCKAPI_ENDPOINT=<your_mockapi_endpoint>
   ```
   - Example endpoint: `https://{clientid}.mockapi.io/jobs`

## Job Interface Definition

```ts
type tJobsType = 'Full-Time' | 'Part-Time' | 'Remote' | 'Internship';
type tJobsSalary =
    | '<50'
    | '50,60'
    | '60,70'
    | '70,80'
    | '80,90'
    | '90,100'
    | '100,125'
    | '125,150'
    | '150,175'
    | '175,200'
    | '>200';

export interface iJob {
    title: string;
    type: tJobsType;
    description: string;
    location: string;
    salary: tJobsSalary;
    companyName: string;
    companyDescription: string;
    companyContactEmail: string;
    companyContactPhone: string;
    id: string;
    slug: string;
}
```

## Main Technologies Used

- Vue.js
- TypeScript
- Tailwind CSS
