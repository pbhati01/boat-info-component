export default ([
  {
    id: 'boat1',
    image_url: '/images/boat-image_2020-06-05/boat-image.jpg',
    image_urls: [
      '/images/boat-image_2020-06-05/boat-image@2x.jpg',
      '/images/boat-image_2020-06-05/boat-image@3x.jpg'
    ],
    is_recommended: true,
    name: 'Jeannau Sun Odyssey 45.2',
    make_year: 2001,
    city: 'Split',
    country: 'Croatia',
    is_liked: false,
    hot: {
      views: 69,
      since: 86400000 // miliseconds = 24 hours (24 * 60 * 60 * 1000)
    },
    length: '12.04m',
    num_of_cabins: 4,
    max_num_of_guests: 10,
    reviews: {
      count: 3,
      overall_rating: 5,
    },
    features: ['Sicherungsshein', 'Luxury'],
    sail_type: 'Rolling Mainsail',
    free_extras: ['AirCon', 'WiFi', 'Very Long Extra Description'],
    price: {
      value: '€1,083.00',
      type: 'weekly',
      more_info: 'Weekly price is €1,083.00. Some other info.'
    },
    is_direct_booking_available: true
  },
  {
    id: 'boat2',
    image_url: '/images/boat-image_2020-06-05/boat-image.jpg',
    image_urls: [
      '/images/boat-image_2020-06-05/boat-image@2x.jpg',
      '/images/boat-image_2020-06-05/boat-image@3x.jpg'
    ],
    is_recommended: false,
    name: 'Jeannau Sun Odyssey 45.2',
    make_year: 2001,
    city: 'Split',
    country: 'Croatia',
    is_liked: true,
    hot: {
      views: 25,
      since: 86400000 // miliseconds = 24 hours (24 * 60 * 60 * 1000)
    },
    length: '12.04m',
    num_of_cabins: 4,
    max_num_of_guests: 10,
    reviews: {
      count: 20,
      overall_rating: 3,
    },
    features: ['Sicherungsshein', 'Luxury'],
    sail_type: 'Rolling Mainsail',
    free_extras: ['AirCon', 'WiFi', 'Very Long Extra Description'],
    price: {
      value: '€1,083.00',
      type: 'weekly',
      more_info: 'Weekly price is €1,083.00. Some other info.'
    },
    is_direct_booking_available: false
  }
]);
