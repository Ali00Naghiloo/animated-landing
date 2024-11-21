# README: Backend Integration for `AiMode.jsx`

## Project: **Vyvo**

### File Location
The file is located at:
```
src/components/landing/chat/mods/AiMode.jsx
```

---

## Overview

`AiMode.jsx` is the main file that handles the interaction flow between the user and the AI within the **Vyvo** project. It uses React components and state management to move through different interaction phases (listening, waiting, thinking, and speaking).

This document explains how the backend developer can integrate their API to process user queries and provide AI responses.

---

## Key Concepts

1. **AI Modes:**
   - `listening`: The user inputs a query (text or voice).
   - `waiting`: Prepares the query data and sends it to the backend.
   - `thinking`: Displays a "thinking" animation while waiting for the backend response.
   - `speaking`: Displays the AI's response.

2. **Data Flow:**
   - User's query (`questionData`) is sent to the backend.
   - Backend processes the query and returns the AI's response (`aiResponse`).
   - Frontend handles animations and transitions between modes.

3. **Integration Point:**
   Backend integration is required in the `handleSendQuestion` function to handle API requests and responses.

---

## Code Snippet for API Integration

```javascript
const handleSendQuestion = async () => {
  setGetAnswerLoading(true);

  // Prepare the data to send to the backend
  const sendingData = {
    text: questionData.text, // User's text input
    voice: questionData.voice, // User's voice input (optional)
  };

  try {
    // Send the data to the backend API
    const response = await fetch("<BACKEND_API_ENDPOINT>", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendingData),
    });

    const data = await response.json();

    // Update AI response state with the backend's response
    setAiResponse({
      text: data.text, // AI response text
      voice: data.voice, // AI response voice (optional)
    });

    // Transition to the "speaking" mode
    setAiMode("speaking");
  } catch (error) {
    console.error("Error fetching AI response:", error);
  } finally {
    setGetAnswerLoading(false);
  }
};
```

---

## State Diagram

Below is a visual representation of how the states (`aiMode`) transition and where the backend API integration fits.

```plaintext
+-------------+        User Input        +-------------+
|             |  +-------------------->  |             |
| Listening   |                          |   Waiting    |
|             |  <--------------------+  |             |
+-------------+                          +-------------+
       |                                        |
       |                                        v
       |                                  +-------------+
       |                                  |             |
       |     API Request to Backend       |   Thinking  |
       +--------------------------------> |             |
                                          +-------------+
                                                 |
                                                 v
                                          +-------------+
                                          |             |
                                          |   Speaking  |
                                          |             |
                                          +-------------+
```

---

## Backend Developer Instructions

### 1. API Endpoint
Replace `<BACKEND_API_ENDPOINT>` in the `handleSendQuestion` function with the actual backend endpoint that processes user queries.

### 2. Request Payload
The payload sent to the backend contains the following structure:
```json
{
  "text": "User's question text",
  "voice": "User's voice input (optional)"
}
```

### 3. Response Format
The backend should return the following JSON structure:
```json
{
  "text": "AI's response text",
  "voice": "AI's response voice URL (optional)"
}
```

### 4. Error Handling
Ensure the backend API gracefully handles errors and returns appropriate HTTP status codes with error messages.

---

## Conclusion

The `AiMode.jsx` file is the core component of the AI interaction workflow in Vyvo. Backend developers are responsible for integrating the API within the `handleSendQuestion` function to process user queries and deliver AI responses. Follow the state diagram and provided code snippet for seamless integration.

For any questions, please reach out to the frontend team.
