document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailPattern = /^\S+@\S+\.\S+$/;

    // Validate name
    if (name === '') {
      alert('❌ Name is required.');
      return;
    }

    // Validate email
    if (!emailPattern.test(email)) {
      alert('❌ Please enter a valid email address.');
      return;
    }

    // Validate subject
    if (subject === '') {
      alert('❌ Subject is required.');
      return;
    }

    // Validate message
    if (message === '') {
      alert('❌ Message cannot be empty.');
      return;
    }

    alert('✅ Message submitted successfully!');
    this.reset();
  });
