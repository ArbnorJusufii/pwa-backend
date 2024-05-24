self.addEventListener('push', (event) => {
    // console.log('data => ', event.data);
    // const data = event.data.json();
    // const title = data.title;
    // const body = data.body;
    // const icon = data.icon;
    // const url = data.data.url;

    // const notificationOptions = {
    //     body: body,
    //     tag: 'unique-tag', // Use a unique tag to prevent duplicate notifications
    //     icon: icon,
    //     data: {
    //         url: url, // Replace with the desired URL for redirecting user to the desired page
    //     },
    // };

    // self.registration.showNotification(title, notificationOptions);
    const data = event.data.json();

    const notification = {
        title: 'Hello, Notifications!',
        options: {
            body: data,
            tag: Math.floor(Math.random() * 1000),
            icon: './images/banner.jpg',
            image: './images/maskable_icon_x192.png',
            vibrate: [100, 50, 200],
            badge: './icon-192x192.png',
            tag: 'new-offers',
            renotify: true,
            actions: [{ action: 'confirm', title: 'Check offer', icon: '' }],
        },
    };

    self.registration.showNotification(
        notification.title,
        notification.options
    );
});
