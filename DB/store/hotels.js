const hotels = [
    {
      "Id": 10,
      "HotelName": "Countryside Hotel",
      "Description": "Save up to 50% off traditional hotels. Free WiFi, great location near downtown, full kitchen, washer & dryer, 24\/7 support, bowling alley, fitness center and more.",
      "Description_fr": "Économisez jusqu'à 50% sur les hôtels traditionnels. WiFi gratuit, très bien situé près du centre-ville, cuisine complète, laveuse & sécheuse, support 24\/7, bowling, centre de fitness et plus encore.",
      "Category": "Extended-Stay",
      "Tags": [ "24-hour front desk service", "laundry service", "free wifi" ],
      "ParkingIncluded": true,
      "IsDeleted": false,
      "LastRenovationDate": "2019-09-06T00:00:00Z",
      "Rating": 2.70,
      "Address": {
        "StreetAddress": "6910 Fayetteville Rd",
        "City": "Durham",
        "StateProvince": "NC",
        "PostalCode": "27713",
        "Country": "USA"
      },
      "Location": {
        "type": "Point",
        "coordinates": [ -78.940483, 35.904160 ]
      },
      "Rooms": [
        {
            "Id": 1,
            "Description": "Suite, 1 King Bed (Amenities)",
            "Description_fr": "Suite, 1 très grand lit (Services)",
            "Type": "Suite",
            "BaseRate": 244.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "coffee maker" ]
          },
          {
            "Id":2,
            "Description": "Budget Room, 1 Queen Bed (Amenities)",
            "Description_fr": "Chambre Économique, 1 grand lit (Services)",
            "Type": "Budget Room",
            "BaseRate": 76.99,
            "BedOptions": "1 Queen Bed",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "coffee maker" ]
          }
      ]
    },
    {
      "Id": 11,
      "HotelName": "Royal Cottage Resort",
      "Description": "Your home away from home. Brand new fully equipped premium rooms, fast WiFi, full kitchen, washer & dryer, fitness center. Inner courtyard includes water features and outdoor seating. All units include fireplaces and small outdoor balconies. Pets accepted.",
      "Description_fr": "Votre maison loin de chez vous. Flambant neuf chambres Premium entièrement équipées, WiFi rapide, cuisine complète, laveuse & sécheuse, centre de fitness. La cour intérieure comprend des points d'eau et des sièges à l'extérieur. Toutes les unités comprennent des cheminées et de petits balcons extérieurs. Animaux acceptés.",
      "Category": "Extended-Stay",
      "Tags": [ "free wifi", "free parking", "24-hour front desk service" ],
      "ParkingIncluded": true,
      "IsDeleted": false,
      "LastRenovationDate": "2023-11-26T00:00:00Z",
      "Rating": 2.50,
      "Address": {
        "StreetAddress": "22422 29th Dr SE",
        "City": "Bothell",
        "StateProvince": "WA",
        "PostalCode": "98021",
        "Country": "USA"
      },
      "Location": {
        "type": "Point",
        "coordinates": [ -122.196700, 47.794540 ]
      },
      "Rooms": [
        {
            "Id": 1,
            "Description": "Deluxe Room, 1 Queen Bed (Waterfront View)",
            "Description_fr": "Chambre Deluxe, 1 grand lit (vue sur le front de mer)",
            "Type": "Deluxe Room",
            "BaseRate": 144.99,
            "BedOptions": "1 Queen Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "coffee maker", "tv", "coffee maker" ]
          },
          {
            "Id": 2,
            "Description": "Suite, 2 Queen Beds (Mountain View)",
            "Description_fr": "Suite, 2 grands lits (vue sur la montagne)",
            "Type": "Suite",
            "BaseRate": 248.99,
            "BedOptions": "2 Queen Beds",
            "SleepsCount": 4,
            "SmokingAllowed": true,
            "Tags": [ "suite", "bathroom shower" ]
          }
      ]
    }
]

export default hotels