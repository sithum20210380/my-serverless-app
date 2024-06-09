# Serverless Application with React and Node.js

This repository contains the code for a serverless application built using React for the frontend and Node.js for the backend. The backend is hosted using AWS Lambda and API Gateway, while the frontend is deployed on AWS S3 and CloudFront for a scalable, cost-effective solution.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Serverless architecture for cost-efficient and scalable applications.
- React frontend for a responsive and dynamic user interface.
- Node.js backend hosted on AWS Lambda for efficient serverless functions.
- AWS API Gateway for routing and API management.
- AWS DynamoDB for NoSQL database solutions.
- Secure and fast frontend deployment using AWS S3 and CloudFront.

## Architecture

![Architecture Diagram](https://github.com/sithum20210380/99xDashboard/blob/main/Group%203.png?raw=true)

## Tech Stack

- **Frontend:** React, JavaScript, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** AWS DynamoDB
- **Hosting & Deployment:** AWS Lambda, AWS API Gateway, AWS S3, AWS CloudFront

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js and npm installed on your local machine.
- AWS CLI configured with appropriate permissions.
- AWS SAM CLI for local development and testing of serverless applications.

### Setup Instructions

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/serverless-react-node-app.git
    cd serverless-react-node-app
    ```

2. **Install dependencies for both frontend and backend:**

    ```sh
    # Install frontend dependencies
    cd frontend
    npm install
    
    # Install backend dependencies
    cd ../backend
    npm install
    ```

3. **Setup AWS services:**

    Ensure your AWS CLI is configured properly and create necessary services like DynamoDB table, Lambda functions, and API Gateway.

### Local Development

#### Running the Frontend

```sh
cd frontend
npm start
```

#### Running the Backend Locally

Use AWS SAM CLI to start the backend locally:

```sh
cd backend
sam local start-api
```

## Deployment

### Deploying the Frontend

1. **Build the React app:**

    ```sh
    cd frontend
    npm run build
    ```

2. **Deploy to AWS S3:**

    Upload the contents of the `build` folder to an S3 bucket.

3. **Configure CloudFront:**

    Set up a CloudFront distribution pointing to your S3 bucket for better performance and security.

### Deploying the Backend

1. **Package and Deploy Lambda Functions:**

    ```sh
    cd backend
    sam package --s3-bucket your-bucket-name --output-template-file packaged.yaml
    sam deploy --template-file packaged.yaml --stack-name your-stack-name --capabilities CAPABILITY_IAM
    ```

2. **Configure API Gateway:**

    Ensure your API Gateway is set up to route requests to the appropriate Lambda functions.

## Usage

Once deployed, you can access the frontend through the CloudFront URL. The frontend will interact with the backend through the API Gateway, which routes requests to the Lambda functions.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add some YourFeature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

Feel free to adjust any sections to better fit your project specifics and ensure to include the correct paths for images and other resources.
