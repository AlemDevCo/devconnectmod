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
                    color: 0x3498db, // Embed color (you can use a color picker)
                },
            ],
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        alert("Application submitted successfully!");
        // You can redirect the user or perform other actions here
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting application. Please try again later.");
    });
});
