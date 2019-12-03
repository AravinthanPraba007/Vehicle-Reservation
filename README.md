# Vehicle-Reservation

The Vehicle Reservation System has admin login and member login/register .The member has to register in the app for authorized login. Based on the approval status by the admin the member can login in to the page. If the admin accepts then the member can login in to the page. If admin declines the member login, the member cannot login further. If the member logins, he can view the vehicle details and book the vehicle, payment by choosing the categories of vehicles displayed. Admin can edit the vehicle details at any time and can see the status of the vehicles.

## Assumptions
>Multiple user Login/Registration,One Admin login

## Techonolgies
-

## Authentication
This project uses JWT authetication for login . Once User give correct credentials .The system provides the JWT token with that user can enter the system .Once the user logout the token expires.

## Vehicle details page
- User can view all the active vehicles 
- Admin can view all vehicle details and edit them
- Admin can add new vehicle to the system

## Booking details page
- User can book the vehicle by giving the start and end day for trip, The system will generate the bill based on the number of days and price of the vehicle.
- Admin can view all bookings done in the system
- User can only book one vehicle at a time and cant book the booked vehicle by other customer.




