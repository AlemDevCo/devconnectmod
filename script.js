document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        username: document.getElementById("username").value,
        experience: document.getElementById("experience").value,
        why: document.getElementById("why").value,
    };

    // Send data to Discord webhook
    const webhookURL = "https://discord.com/api/webhooks/1067978852346908702/kSbKIm9bgjP68F5J0k-0HJFZvK8TY49CjsviElc9MXWBoRSUqocJyKsrUhMC_1_rBeSk";

    // Disable the submit button during the fetch
    document.querySelector('button[type="submit"]').setAttribute('disabled', 'true');

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            embeds: [
                {
                    title: "New Moderator Application",
                    fields: [
                        { name: "Discord Username", value: formData.username },
                        { name: "Moderation Experience", value: formData.experience },
                        { name: "Why Moderator", value: formData.why },
                    ],
                    color: 0x3498db,
                },
            ],
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        alert("Application submitted successfully!");

        // Reset the form after successful submission
        document.getElementById("applicationForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting application. Please try again later.");
    })
    .finally(() => {
        // Enable the submit button after the fetch (in case of an error)
        document.querySelector('button[type="submit"]').removeAttribute('disabled');
    });
});
