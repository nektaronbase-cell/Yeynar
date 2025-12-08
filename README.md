# Yeynar: A Farcaster Integration Tool

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Neynar API](https://img.shields.io/badge/Neynar_API-000000?style=for-the-badge&logo=web3foundation&logoColor=white)
![Farcaster](https://img.shields.io/badge/Farcaster-505050?style=for-the-badge&logo=farcaster&logoColor=white)

---

## Table of Contents

-   [About Yeynar](#about-yeynar)
-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Environment Setup](#environment-setup)
-   [Usage](#usage)
-   [Neynar API Features](#neynar-api-features)
-   [Project Structure](#project-structure)
-   [Contributing](#contributing)
-   [License](#license)

---

## About Yeynar

Yeynar is a robust Node.js-based integration tool designed to simplify interaction with the Farcaster decentralized social network. By leveraging the powerful [Neynar API](https://neynar.com/), Yeynar provides developers with a straightforward way to access Farcaster's public data (read access) and perform authenticated actions like casting new messages (write access).

This project serves as a practical example and a starting point for building sophisticated Farcaster applications, bots, or custom integrations, offering clear demonstrations of how to utilize the `@neynar/nodejs-sdk` for both reading Farcaster data and publishing content.

---

## Features

Yeynar showcases the fundamental capabilities of Farcaster integration via the Neynar API:

-   **Read Access:**
    -   Fetch detailed user profiles (e.g., username, display name, Farcaster ID (FID), follower/following counts)
    -   Retrieve casts from specific users or channels
    -   Explore Farcaster channels and their associated casts
-   **Write Access:**
    -   Publish new casts to Farcaster
    -   Reply to existing casts
    -   (Demonstrated via `index.js` for basic casting)
-   **Node.js Powered:** Built entirely with Node.js, ensuring a familiar and efficient development experience
-   **Environment Configuration:** Utilizes `dotenv` for secure and easy management of API keys
-   **Modular Design:** `index.js` provides clear examples, making it easy to adapt and extend for your specific needs

---

## Prerequisites

Before you begin, ensure you have the following installed and set up:

-   **Node.js**: Version 18.x or higher recommended
    -   [Download Node.js](https://nodejs.org/en/download/)
-   **npm** (Node Package Manager) or **pnpm**: Comes bundled with Node.js
-   **Neynar API Key**:
    -   Obtain a free or paid API key from the [Neynar Developer Hub](https://neynar.com/developers)
-   **Farcaster Account (Optional for Write Access):**
    -   If you intend to use the write access features, you'll need an active Farcaster account and generate a **signer UUID** via the Neynar API

---

## Installation

Follow these steps to get Yeynar up and running on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/nektaronbase-cell/Yeynar.git
    cd Yeynar
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or if you prefer pnpm
    # pnpm install
    ```

    This will install `@neynar/nodejs-sdk` and `dotenv`, which are required for the project.

---

## Environment Setup

To securely manage your Neynar API key and other sensitive credentials, Yeynar uses environment variables loaded via `dotenv`.

1.  **Create a `.env` file:**
    In the root directory of your `yeynar` project, create a new file named `.env`.

2.  **Add your Neynar API Key:**
    Open the `.env` file and add your Neynar API key as follows:

    ```env
    NEYNAR_API_KEY="YOUR_NEYNAR_API_KEY_HERE"
    ```

---

## Usage

The `index.js` file contains demonstrations of both read and write access to Farcaster using the Neynar API.

### Running the Demo

To execute the demo and see Yeynar in action, simply run:

```bash
node index.js
```

The script will output results directly to your console, showcasing a user profile lookup and, if a `FARCASTER_SIGNER_UUID` is configured, an attempt to publish a new cast.

---

## Neynar API Features

The `@neynar/nodejs-sdk` provides comprehensive access to the Farcaster protocol, enabling a wide range of functionalities:

-   **User Data:** Lookup users by FID or username, fetch followers/following
-   **Cast Data:** Fetch casts by user, retrieve specific casts, get channel casts
-   **Write Operations:** Publish casts, recast, like, follow/unfollow users
-   **Channel Data:** Fetch all channels, lookup specific channels

For more information, refer to the [Neynar Node.js SDK Documentation](https://github.com/neynar-api/neynar-nodejs-sdk) and the [Neynar API Reference](https://docs.neynar.com/reference/overview).

---

## Project Structure

```
yeynar/
├── index.js              # Main application file with read/write access demos
├── index.html            # Web interface (if applicable)
├── package.json          # Project metadata and dependency list
├── .env                  # Environment variables (not tracked in git)
├── .gitignore            # Git ignore rules
└── README.md             # This comprehensive README file
```

---

## Contributing

We welcome contributions to Yeynar! If you have suggestions, bug reports, or want to contribute code:

1.  **Fork the repository**
2.  **Create a new branch** for your feature: `git checkout -b feature/your-feature-name`
3.  **Make your changes**
4.  **Commit your changes**: `git commit -m "feat: Add new feature"`
5.  **Push to your fork**: `git push origin feature/your-feature-name`
6.  **Open a Pull Request**

---

## License

This project is licensed under the MIT License.

---

## Contact

If you have any questions or need further assistance, please open an issue on the GitHub repository.
