import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_NOTIFICATIONS": {
      return { ...state, notifications: action.payload };
    }

    case "MARK_NOTIFICATIONS_READ": {
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.payload.id ? { ...notification, read: true } : notification
        )
      };
    }

    case "DELETE_NOTIFICATION": {
      return { ...state, notifications: action.payload };
    }

    case "CLEAR_NOTIFICATIONS": {
      return { ...state, notifications: action.payload };
    }

    default:
      return state;
  }
};

const NotificationContext = createContext({
  notifications: [],
  deleteNotification: () => {},
  clearNotifications: () => {},
  getNotifications: () => {},
  markNotificationAsRead: () => {},
  createNotification: () => {}
});

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const deleteNotification = async (notificationID) => {
    try {
      const res = await axios.delete(`/api/v1/notifications/${notificationID}`);
      dispatch({ type: "DELETE_NOTIFICATION", payload: res.data });
    } catch (e) {
      console.error(e);
    }
  };

  const clearNotifications = async () => {
    try {
      await axios.delete("/api/v1/notifications/clear_all");
      dispatch({ type: "CLEAR_NOTIFICATIONS", payload: [] });
    } catch (e) {
      console.error(e);
    }
  };

  const getNotifications = async () => {
    try {
      const res = await axios.get("/api/v1/notifications");
      dispatch({ type: "LOAD_NOTIFICATIONS", payload: res.data });
    } catch (e) {
      console.error(e);
    }
  };

  const markNotificationAsRead = async (id) => {
    try {
      const res = await axios.patch(`/api/v1/notifications/${id}/mark_as_read`);
      getNotifications();
      dispatch({ type: "MARK_NOTIFICATIONS_READ", payload: res.data });
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const createNotification = async (notification) => {
    try {
      const res = await axios.post("/api/v1/notifications", { notification });
      dispatch({ type: "CREATE_NOTIFICATION", payload: res.data });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        getNotifications,
        deleteNotification,
        clearNotifications,
        markNotificationAsRead,
        createNotification,
        notifications: state.notifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
