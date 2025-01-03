## Create booking

**URL** : `/api/v1/booking`

**Method** : `POST`

**Header** : `application/json`

**Auth required** : None

**Permissions required** : None

## Success Response

**Code** : `200`

**Response**

```json
{
    "CheckIn": "2024-12-18T00:00:00Z",
    "CheckOut": "2024-12-18T00:00:00Z",
    "Days": 2,
    "RoomNumbers": [
        1
    ],
    "BookedOn": "2024-12-18T00:00:00Z",
    "Ammount": 2024.5,
    "Location": "",
    "UserID": 10,
    "HotelID": 11,
    "People": {
        "children": 1,
        "adult": 2
    }
    }
```

## Retreive bookings

**URL** : `/api/v1/bookings`

**Method** : `GET`

**Header** : `application/json`

**Auth required** : None

**Permissions required** : None

## Success Response

**Code** : `200`

**Response**

```json
[
    {
        "CheckIn": "2024-12-18T00:00:00Z",
        "CheckOut": "2024-12-18T00:00:00Z",
        "Days": 2,
        "RoomNumbers": [
            1
        ],
        "BookedOn": "2024-12-18T00:00:00Z",
        "Ammount": 2024.5,
        "Location": "",
        "UserID": 10,
        "HotelID": 11,
        "People": {
            "children": 1,
            "adult": 2
        }
    },
    {
        "CheckIn": "2024-12-18T00:00:00Z",
        "CheckOut": "2024-12-18T00:00:00Z",
        "Days": 2,
        "RoomNumbers": [
            2
        ],
        "BookedOn": "2024-12-18T00:00:00Z",
        "Ammount": 4000,
        "Location": "",
        "UserID": 11,
        "HotelID": 11,
        "People": {
            "children": 1,
            "adult": 2
        }
    }
]
```