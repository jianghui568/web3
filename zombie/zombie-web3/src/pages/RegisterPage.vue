<template>
  <div class="wallet-creation">
    <h2>Create Your Wallet</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" placeholder="Enter your username" required />
      </div>

      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
      </div>

      <div>
        <label for="wallet-address">Wallet Address:</label>
        <input v-model="walletAddress" type="text" id="wallet-address" readonly />
      </div>

      <button type="submit">Register</button>
    </form>

    <div v-if="isSubmitting" class="loading">
      <span>Registering...</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ethers } from "ethers";

export default defineComponent({
  name: "CreateWallet",
  setup() {
    // Define form data
    const username = ref("");
    const password = ref("");
    const walletAddress = ref("");
    const isSubmitting = ref(false);

    // Function to generate wallet address
    const generateWalletAddress = () => {
      const wallet = ethers.Wallet.createRandom(); // Create a random wallet
      walletAddress.value = wallet.address; // Set the wallet address
    };

    // Call generate wallet address when component is mounted
    generateWalletAddress();

    // Handle form submit
    const handleSubmit = async () => {
      isSubmitting.value = true;
      try {
        // Here, you would save the username, password, and wallet address to your backend
        console.log("Registering user:", username.value);
        console.log("Generated Wallet Address:", walletAddress.value);
        // Simulating backend save with a timeout
        setTimeout(() => {
          console.log("User registered successfully");
          alert("User registered successfully");
        }, 2000);
      } catch (error) {
        console.error("Error registering user:", error);
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      username,
      password,
      walletAddress,
      isSubmitting,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.wallet-creation {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.wallet-creation h2 {
  text-align: center;
}

.wallet-creation form {
  display: flex;
  flex-direction: column;
}

.wallet-creation form div {
  margin-bottom: 15px;
}

.wallet-creation form label {
  margin-bottom: 5px;
  font-weight: bold;
}

.wallet-creation form input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.wallet-creation form button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.wallet-creation form button:hover {
  background-color: #0056b3;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #007bff;
}
</style>
