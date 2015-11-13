# sms-blog
App to publish short blog updates via SMS.

SMS Blog is a small project to test out the Twilio API and implement it in a responsive Node app with a React front-end.

Users can text a number (currently 1-630-534-1237) with their name and the post title in brackets (e.g. "[Michael/My Favorite Color]") followed by the post content. Texts with the same author name and post title will be appended to existing posts. The shown posts are updated automatically via Socket.io.

Currently only specific phone numbers can submit posts via text, so users may test the app through the form on the page. Other features will be added with time.

Technologies used: React.js, Node.js, Express.js, Socket.io, Twilio API, Twitter Bootstrap
