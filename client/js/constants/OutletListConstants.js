var BASE_URL = 'http://localhost:3000/';

var loginConstants = {
  BASE_URL: BASE_URL,
  OUTLET_DATA: BASE_URL + 'api/outlets',
  ADD_OUTLET: BASE_URL + 'api/addOutlet',
  OUTLET_RESERVATIONS: BASE_URL + 'api/outletReservations',
  TIME_SLOTS: BASE_URL + 'api/seeTimeSlots',
  MAKE_RESERVATION: BASE_URL + 'api/makeReservation',
  OUTLETS_BYUSER: BASE_URL + 'api/users/manageMyOutlets',
  SEEBUYER_RESERVATIONS: BASE_URL + 'api/users/seeBuyerReservations',
  TURNON_OUTLET: BASE_URL + 'api/on',
  TRANSACTION_CURRENT: BASE_URL + 'api/setTransaction'
};

module.exports = loginConstants;