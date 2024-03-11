const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');

    let count = 0;

    
    function incrementCounter() {
      count++;
      counterElement.textContent = count;
    }

    function decrementCounter() {
      count--;
      counterElement.textContent = count;
    }

    incrementButton.addEventListener('click', incrementCounter);
    decrementButton.addEventListener('click', decrementCounter);
