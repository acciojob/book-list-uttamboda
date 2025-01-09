//your JS code here. If required.
 const form = document.getElementById('book-form');
        const bookList = document.getElementById('book-list');

        // Add event listener to the form
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get input values
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;

            // Create a new row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="delete">Clear</button></td>
            `;

            // Append the row to the table
            bookList.appendChild(row);

            // Clear form fields
            form.reset();
        });

        // Add event listener to the table for the delete button
        bookList.addEventListener('click', function(e) {
            if (e.target.classList.contains('delete')) {
                const row = e.target.parentElement.parentElement;
                bookList.removeChild(row);
            }
        });