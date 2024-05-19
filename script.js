// Replace with your Lightning wallet address
const walletAddress = "hanif@getalby.com";

// Display wallet address
document.getElementById("walletAddress").innerText = `Wallet Address: ${walletAddress}`;

// Generate QR code
const qrCodeElement = document.getElementById("qrCode");
new QRCode(qrCodeElement, walletAddress);

// Fetch wallet address from backend
fetch('https://api.vercel.com/v1/integrations/deploy/prj_6CZqjLAYQYAuqvuNAyAj4qfPHarD/eAdEXw6cEa')
    .then(response => response.json())
    .then(data => {
        // Display wallet address
        document.getElementById("walletAddress").innerText = `Wallet Address: ${data.walletAddress}`;
        
        // Generate QR code
        new QRCode(document.getElementById("qrCode"), data.walletAddress);
    })
    .catch(error => console.error('Error fetching wallet address:', error));
