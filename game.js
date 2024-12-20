body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.game-container {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 350px;
    text-align: center;
}

h1 {
    color: #6742ed;
    font-size: 28px;
    margin-bottom: 20px;
}

input[type="text"] {
    width: 80%;
    padding: 8px;
    margin: 10px 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
}

button {
    width: 80%;
    padding: 10px;
    background-color: #6742ed;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #6742ed;
}

.hidden {
    display: none;
}

.game-container p {
    font-size: 16px;
    color: #333;
}

.game-container #feedback {
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
}

.game-container #guess-count {
    font-size: 18px;
    font-weight: bold;
    color: #555;
}

.game-container #end-screen {
    margin-top: 20px;
    padding: 15px;
    background-color: #e9f7e9;
    border-radius: 5px;
    color: #28a745;
    border: 1px solid #4CAF50;
}

.game-container #end-screen h2 {
    color: #28a745;
}

.game-container #end-screen p {
    font-size: 18px;
    margin: 5px 0;
}

.game-container #end-screen span {
    font-weight: bold;
}

.game-container button:focus {
    outline: none;
    box-shadow: 0 0 5px #6742ed;
}
