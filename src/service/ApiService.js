



import axiosInstance from './axiosInstance';

export default class ApiService {
    static BASE_URL = 'http://localhost:4040';

    /** AUTH **/

    static async registerUser(registration) {
        const response = await axiosInstance.post(`/auth/register`, registration);
        return response.data;
    }

    static async loginUser(loginDetails) {
        const response = await axiosInstance.post(`/auth/login`, loginDetails);
        return response.data;
    }

    /** USERS **/

    static async getAllUsers() {
        const response = await axiosInstance.get(`/auth/all`);
        return response.data;
    }

    static async getUserProfile() {
        const response = await axiosInstance.get(`/auth/get-logged-in-profile-info`);
        return response.data;
    }

    static async getUser(userId) {
        const response = await axiosInstance.get(`/auth/get-by-id/${userId}`);
        return response.data;
    }

    static async getUserBookings(userId) {
        const response = await axiosInstance.get(`/auth/get-user-bookings/${userId}`);
        return response.data;
    }

    static async deleteUser(userId) {
        const response = await axiosInstance.delete(`/auth/delete/${userId}`);
        return response.data;
    }

    /** ROOMS **/

    static async addRoom(formData) {
        const response = await axiosInstance.post(`/rooms/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }

    static async getAllRooms() {
        const response = await axiosInstance.get(`/rooms/all`);
        return response.data;
    }

    static async getRoomTypes() {
        const response = await axiosInstance.get(`/rooms/types`);
        return response.data;
    }

    static async getAvailableRoomsByDateAndType(checkInDate, checkOutDate, roomType) {
        const response = await axiosInstance.get(`/rooms/available-rooms-by-date-and-type`, {
            params: {
                checkInDate,
                checkOutDate,
                roomType
            }
        });
        return response.data;
    }

    static async getAvailableRooms() {
        const response = await axiosInstance.get(`/rooms/all-available-rooms`);
        return response.data;
    }

    static async getRoomById(roomId) {
        const response = await axiosInstance.get(`/rooms/room-by-id/${roomId}`);
        return response.data;
    }

    static async deleteRoom(roomId) {
        const response = await axiosInstance.delete(`/rooms/delete/${roomId}`);
        return response.data;
    }

    static async updateRoom(roomId, formData) {
        const response = await axiosInstance.put(`/rooms/update/${roomId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }

    /** BOOKINGS **/

    static async bookRoom(roomId, userId, bookingData) {
        const response = await axiosInstance.post(`/bookings/book-room/${roomId}/${userId}`, bookingData);
        return response.data;
    }

    static async getAllBookings() {
        const response = await axiosInstance.get(`/bookings/all`);
        return response.data;
    }

    static async getBookingByConfirmationCode(code) {
        const response = await axiosInstance.get(`/bookings/get-by-confirmation-code/${code}`);
        return response.data;
    }

    static async cancelBooking(bookingId) {
        const response = await axiosInstance.get(`/bookings/cancel/${bookingId}`);
        return response.data;
    }

    /** AUTH CHECKING (LocalStorage) **/

    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    static isAuthenticated() {
        return !!localStorage.getItem('token');
    }

    static isAdmin() {
        return localStorage.getItem('role') === 'ADMIN';
    }

    static isUser() {
        return localStorage.getItem('role') === 'USER';
    }
}
