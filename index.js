import { NeynarAPIClient, isApiError } from "@neynar/nodejs-sdk";
import "dotenv/config";

// The Neynar API key is required for access.
// It should be set as an environment variable in a .env file or directly in the environment.
const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;

if (!NEYNAR_API_KEY) {
  console.error("Error: NEYNAR_API_KEY environment variable is not set.");
  console.error("To grant Yeynar the same accesses as Neynar, you must provide a valid Neynar API key.");
  process.exit(1);
}

const client = new NeynarAPIClient({ apiKey: NEYNAR_API_KEY });

// --- 1. Read Access Demonstration ---
async function demonstrateReadAccess() {
  console.log("--- Demonstrating Read Access (Fetching User Profile) ---");
  try {
    // Fetch data for a well-known Farcaster user (e.g., Dan Romero, FID 3)
    const fids = [3];
    const users = await client.fetchBulkUsers({ fids });
    
    if (users.users.length > 0) {
      const user = users.users[0];
      console.log(\`Successfully fetched user profile for \${user.display_name} (@\${user.username})\`);
      console.log(\`Follower Count: \${user.follower_count}\`);
    } else {
      console.log("Could not fetch user data.");
    }
  } catch (error) {
    console.error("Error during read access demonstration:", isApiError(error) ? error.response.data : error.message);
  }
}

// --- 2. Write Access Demonstration ---
async function demonstrateWriteAccess() {
  console.log("\n--- Demonstrating Write Access (Casting) ---");
  console.log("NOTE: Write access requires a valid signer UUID and a user's FID.");
  console.log("This code is a placeholder and will not execute a real cast without a valid signer.");
  
  // Placeholder values - replace with actual values for a live test
  const signerUuid = "YOUR_SIGNER_UUID"; 
  const fid = 12345; 
  const castText = "Hello from Yeynar! Testing write access to Farcaster.";

  try {
    // Check if placeholder values are still in use
    if (signerUuid === "YOUR_SIGNER_UUID" || fid === 12345) {
        console.log("Skipping actual cast: Placeholder signer UUID or FID detected.");
        return;
    }

    // This is the actual API call for write access (posting a cast)
    const cast = await client.publishCast(signerUuid, castText, { fid });
    console.log("Successfully published cast:", cast.hash);

  } catch (error) {
    console.error("Error during write access demonstration:", isApiError(error) ? error.response.data : error.message);
  }
}

async function main() {
  await demonstrateReadAccess();
  await demonstrateWriteAccess();
  console.log("\nYeynar now has the structure to access Farcaster data, similar to Neynar.");
}

main();
