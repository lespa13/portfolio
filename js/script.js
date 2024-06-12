 document.getElementById('feedbackForm').addEventListener('submit', function(event) {
                event.preventDefault();
            
                // Отримання даних з форми
                var name = document.getElementById('name').value;
                var email = document.getElementById('email').value;
                var message = document.getElementById('message').value;
            
                // Перевірка даних
                if (name && email && message) {
                    // Збереження відгуків у LocalStorage
                    var feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
                    feedbacks.push({ name: name, email: email, message: message });
                    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
            
                    // Оновлення списку відгуків
                    displayFeedbacks();
            
                    // Показ повідомлення подяки
                    document.getElementById('thankYouMessage').style.display = 'block';
                    document.getElementById('feedbackForm').style.display = 'none';
                } else {
                    alert('Будь ласка, заповніть всі поля форми.');
                }
            });
            
            function displayFeedbacks() {
                var feedbackContainer = document.getElementById('feedbackContainer');
                feedbackContainer.innerHTML = '';
            
                var feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
            
                feedbacks.forEach(function(feedback) {
                    var feedbackItem = document.createElement('div');
                    feedbackItem.className = 'feedback-item';
                    
                    var nameElement = document.createElement('p');
                    nameElement.textContent = 'Ім\'я: ' + feedback.name;
                    
                    var messageElement = document.createElement('p');
                    messageElement.textContent = 'Відгук: ' + feedback.message;
                    
                    feedbackItem.appendChild(nameElement);
                    feedbackItem.appendChild(messageElement);
            
                    feedbackContainer.appendChild(feedbackItem);
                });
            }
            
            // Відображення відгуків при завантаженні сторінки
            document.addEventListener('DOMContentLoaded', displayFeedbacks);
