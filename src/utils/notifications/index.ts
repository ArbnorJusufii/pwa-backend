export const getNotificationPermision = () => {
  Notification.requestPermission();
};

export const generateNotification = (
  title: string,
  options: NotificationOptions
) => {
  if (Notification.permission) new Notification(title, options);
};
