function checkDictation() {
    const dictationText = document.getElementById('dictationText').value;
    const answer = 'hello world';  // Define the correct answer here

    if (dictationText.toLowerCase() === answer) {
        document.getElementById('result').innerText = 'Correct!';
    } else {
        document.getElementById('result').innerText = 'Incorrect. Try again!';
    }
}
