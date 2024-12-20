<template>
  <div class="login-page">
    <div class="login-container">
      <h2>Login to Your Wallet</h2>

      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">Username:</label>
          <input
              v-model="username"
              type="text"
              id="username"
              placeholder="Enter your username"
              required
              :class="{'input-error': loginError}"
          />
        </div>

        <div class="input-group">
          <label for="password">Password:</label>
          <input
              v-model="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              :class="{'input-error': loginError}"
          />
        </div>

        <!-- Error Message -->
        <div v-if="loginError" class="error-message">
          <p>{{ loginError }}</p>
        </div>

        <!-- Wallet Address -->
        <div v-if="walletAddress" class="wallet-info">
          <p><strong>Your Wallet Address:</strong> {{ walletAddress }}</p>
        </div>

        <!-- Submit Button -->
        <button type="submit" :disabled="isSubmitting" class="submit-btn">
          {{ isSubmitting ? "Logging in..." : "Login" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const username = ref("");
    const password = ref("");
    const isSubmitting = ref(false);
    const loginError = ref("");
    const walletAddress = ref("");

    // Dummy data for registered users
    const registeredUsers = ref([
      {
        username: "user1",
        password: "password123",
        walletAddress: "0xabc123def4567890abcdef1234567890abcdef12"
      },
      {
        username: "user2",
        password: "password456",
        walletAddress: "0xdef123abc4567890abcdef1234567890abcdef12"
      }
    ]);

    const handleLogin = async () => {
      isSubmitting.value = true;
      loginError.value = ""; // Clear previous error

      // Simulate login validation
      const user = registeredUsers.value.find(
          (user) => user.username === username.value && user.password === password.value
      );

      if (user) {
        walletAddress.value = user.walletAddress; // Set wallet address
      } else {
        loginError.value = "Invalid username or password.";
      }

      isSubmitting.value = false;
    };

    return {
      username,
      password,
      isSubmitting,
      loginError,
      walletAddress,
      handleLogin
    };
  }
});
</script>

<style scoped>
/* General Page Styling */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1A253E, #285F8D); /* Gradient between dark blue and lighter blue */
}

.login-container {
  background-color: rgba(161, 188, 214, 0.9); /* Slightly translucent white background */
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* Header Styling */
h2 {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 600;
}

/* Input Styling */
.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.input-group label {
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7); /* Light translucent white background */
  transition: all 0.3s ease-in-out;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
}

/* Focus and Error Styling */
.input-group input:focus {
  border-color: #285F8D; /* Highlight color */
  box-shadow: 0 0 5px rgba(40, 95, 141, 0.5); /* Subtle shadow effect on focus */
}

.input-group .input-error {
  border-color: red;
}

/* Button Styling */
.submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 1.2rem;
  background-color: #285F8D;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #1A253E;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Error Message */
.error-message {
  color: red;
  font-size: 1rem;
  margin-top: 15px;
}

/* Wallet Address */
.wallet-info {
  margin-top: 20px;
  font-size: 1rem;
  color: #333;
  text-align: center;
}

/* Loading State */
.loading {
  font-size: 1rem;
  color: #007bff;
  margin-top: 15px;
}
</style>
