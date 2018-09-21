import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestaurantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestaurantsProvider Provider');
  }

  getRestaurantByLatLong(lat,long) {
    console.log("Lat,Long",lat, long);
    return {
      "location": {
        "entity_type": "subzone",
        "entity_id": 6215,
        "title": "Vepery",
        "latitude": "13.0849120000",
        "longitude": "80.2612210000",
        "city_id": 7,
        "city_name": "Chennai",
        "country_id": 1,
        "country_name": "India"
      },
      "popularity": {
        "popularity": "3.94",
        "nightlife_index": "1.74",
        "nearby_res": [
          "66330",
          "67408",
          "66334",
          "67366",
          "66342",
          "66312",
          "68114",
          "18503354",
          "65505"
        ],
        "top_cuisines": [
          "South Indian",
          "North Indian",
          "Chinese",
          "Street Food",
          "Fast Food"
        ],
        "popularity_res": "100",
        "nightlife_res": "10",
        "subzone": "Park Town",
        "subzone_id": 6008,
        "city": "Chennai"
      },
      "link": "https://www.zomato.com/chennai/vepery-restaurants",
      "nearby_restaurants": [
        {
          "restaurant": {
            "R": {
              "res_id": 66330
            },
            "apikey": "6edf62dbdf6352b7d1f87d81fe4ad470",
            "id": "66330",
            "name": "Kakada Ramprasad",
            "url": "https://www.zomato.com/chennai/kakada-ramprasad-sowcarpet?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "Ground Floor, 348/343, Mint Street, Sowcarpet, Chennai",
              "locality": "Sowcarpet",
              "city": "Chennai",
              "city_id": 7,
              "latitude": "13.0904164410",
              "longitude": "80.2790978551",
              "zipcode": "0",
              "country_id": 1,
              "locality_verbose": "Sowcarpet, Chennai"
            },
            "switch_to_order_menu": 0,
            "cuisines": "Mithai, Street Food",
            "average_cost_for_two": 450,
            "price_range": 1,
            "currency": "Rs.",
            "offers": [],
            "opentable_support": 0,
            "is_zomato_book_res": 0,
            "mezzo_provider": "OTHER",
            "is_book_form_web_view": 0,
            "book_form_web_view_url": "",
            "book_again_url": "",
            "thumb": "https://b.zmtcdn.com/data/res_imagery/66330_CHAIN_1be5419ffdff7794e6acb1e23b315f8e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.4",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "697"
            },
            "photos_url": "https://www.zomato.com/chennai/kakada-ramprasad-sowcarpet/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/chennai/kakada-ramprasad-sowcarpet/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/res_imagery/66330_CHAIN_1be5419ffdff7794e6acb1e23b315f8e.jpg",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "include_bogo_offers": true,
            "deeplink": "zomato://restaurant/66330",
            "is_table_reservation_supported": 0,
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/chennai/kakada-ramprasad-sowcarpet/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 67408
            },
            "apikey": "6edf62dbdf6352b7d1f87d81fe4ad470",
            "id": "67408",
            "name": "Board Walk - Ramada",
            "url": "https://www.zomato.com/chennai/board-walk-ramada-egmore?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "2A Poniamman koil street, Egmore, Chennai-600008",
              "locality": "Ramada, Egmore",
              "city": "Chennai",
              "city_id": 7,
              "latitude": "13.0765958822",
              "longitude": "80.2651262283",
              "zipcode": "",
              "country_id": 1,
              "locality_verbose": "Ramada, Egmore, Chennai"
            },
            "switch_to_order_menu": 0,
            "cuisines": "North Indian, Continental, Cafe",
            "average_cost_for_two": 1650,
            "price_range": 3,
            "currency": "Rs.",
            "offers": [],
            "zomato_events": [
              {
                "event": {
                  "event_id": 241681,
                  "friendly_start_date": "03 August",
                  "friendly_end_date": "31 October",
                  "friendly_timing_str": "Friday, 3rd August - Wednesday, 31st October",
                  "start_date": "2018-08-03",
                  "end_date": "2018-10-31",
                  "end_time": "23:00:00",
                  "start_time": "12:00:00",
                  "is_active": 1,
                  "date_added": "2018-08-03 16:22:10",
                  "photos": [
                    {
                      "photo": {
                        "url": "https://b.zmtcdn.com/data/zomato_events/photos/cc0/c6aa0ae0cc3b13d8aaf737ec8329acc0_1533293530.jpg",
                        "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/cc0/c6aa0ae0cc3b13d8aaf737ec8329acc0_1533293530.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                        "order": 0,
                        "md5sum": "c6aa0ae0cc3b13d8aaf737ec8329acc0",
                        "photo_id": 333586,
                        "uuid": 1533293442015220,
                        "type": "NORMAL"
                      }
                    }
                  ],
                  "restaurants": [],
                  "is_valid": 1,
                  "share_url": "http://www.zoma.to/r/0",
                  "show_share_url": 0,
                  "title": "ALL YOU CAN DRINK!",
                  "description": "Unlimited Drinks with Food. \r\n\r\nDomestic Liquor : Rs. 1599 Nett\r\nImported Liquor : Rs. 2499 Nett\r\n\r\nSunday to Thursday! ",
                  "display_time": "12:00 pm - 11:00 pm",
                  "display_date": "03 August - 31 October",
                  "is_end_time_set": 1,
                  "disclaimer": "Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations/ modifications/ complaints.",
                  "event_category": 0,
                  "event_category_name": "",
                  "book_link": "",
                  "share_data": {
                    "should_show": 0
                  }
                }
              }
            ],
            "opentable_support": 0,
            "is_zomato_book_res": 0,
            "mezzo_provider": "OTHER",
            "is_book_form_web_view": 0,
            "book_form_web_view_url": "",
            "book_again_url": "",
            "thumb": "https://b.zmtcdn.com/data/pictures/chains/8/67408/7976cfb266da2c58e4ab49dc827222f2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.0",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "330"
            },
            "photos_url": "https://www.zomato.com/chennai/board-walk-ramada-egmore/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/chennai/board-walk-ramada-egmore/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/pictures/chains/8/67408/7976cfb266da2c58e4ab49dc827222f2.jpg?output-format=webp",
            "medio_provider": 1,
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "include_bogo_offers": true,
            "deeplink": "zomato://restaurant/67408",
            "is_table_reservation_supported": 1,
            "has_table_booking": 1,
            "book_url": "https://www.zomato.com/chennai/board-walk-ramada-egmore/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "events_url": "https://www.zomato.com/chennai/board-walk-ramada-egmore/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 66334
            },
            "apikey": "6edf62dbdf6352b7d1f87d81fe4ad470",
            "id": "66334",
            "name": "Novelty Tea House",
            "url": "https://www.zomato.com/chennai/novelty-tea-house-sowcarpet?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "175, Mint Street, Sowcarpet, Chennai",
              "locality": "Sowcarpet",
              "city": "Chennai",
              "city_id": 7,
              "latitude": "13.0889759648",
              "longitude": "80.2788514271",
              "zipcode": "600003",
              "country_id": 1,
              "locality_verbose": "Sowcarpet, Chennai"
            },
            "switch_to_order_menu": 0,
            "cuisines": "North Indian, South Indian, Street Food, Continental, Fast Food",
            "average_cost_for_two": 750,
            "price_range": 2,
            "currency": "Rs.",
            "offers": [],
            "opentable_support": 0,
            "is_zomato_book_res": 0,
            "mezzo_provider": "OTHER",
            "is_book_form_web_view": 0,
            "book_form_web_view_url": "",
            "book_again_url": "",
            "thumb": "https://b.zmtcdn.com/data/res_imagery/66334_CHAIN_63a6244ebbc03a134ba8162a3a93b352.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.0",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "267"
            },
            "photos_url": "https://www.zomato.com/chennai/novelty-tea-house-sowcarpet/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/chennai/novelty-tea-house-sowcarpet/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/res_imagery/66334_CHAIN_63a6244ebbc03a134ba8162a3a93b352.jpg",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "include_bogo_offers": true,
            "deeplink": "zomato://restaurant/66334",
            "is_table_reservation_supported": 0,
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/chennai/novelty-tea-house-sowcarpet/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 67366
            },
            "apikey": "6edf62dbdf6352b7d1f87d81fe4ad470",
            "id": "67366",
            "name": "Symphony - Ramada",
            "url": "https://www.zomato.com/chennai/symphony-ramada-egmore?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "Ramada, 2A Poniamman Koil Street,Gandhi Irwin Bridge Road, Egmore, Chennai",
              "locality": "Ramada, Egmore",
              "city": "Chennai",
              "city_id": 7,
              "latitude": "13.0765994746",
              "longitude": "80.2651426569",
              "zipcode": "0",
              "country_id": 1,
              "locality_verbose": "Ramada, Egmore, Chennai"
            },
            "switch_to_order_menu": 0,
            "cuisines": "North Indian, South Indian, Continental, Chinese",
            "average_cost_for_two": 1800,
            "price_range": 3,
            "currency": "Rs.",
            "offers": [],
            "opentable_support": 0,
            "is_zomato_book_res": 0,
            "mezzo_provider": "OTHER",
            "is_book_form_web_view": 0,
            "book_form_web_view_url": "",
            "book_again_url": "",
            "thumb": "https://b.zmtcdn.com/data/pictures/6/67366/904518846015e2a25b0e594d0fcb7069.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "3.8",
              "rating_text": "Good",
              "rating_color": "9ACD32",
              "votes": "136"
            },
            "photos_url": "https://www.zomato.com/chennai/symphony-ramada-egmore/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/chennai/symphony-ramada-egmore/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/pictures/6/67366/904518846015e2a25b0e594d0fcb7069.jpg?output-format=webp",
            "medio_provider": 1,
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "include_bogo_offers": true,
            "deeplink": "zomato://restaurant/67366",
            "is_table_reservation_supported": 1,
            "has_table_booking": 1,
            "book_url": "https://www.zomato.com/chennai/symphony-ramada-egmore/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "events_url": "https://www.zomato.com/chennai/symphony-ramada-egmore/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 66342
            },
            "apikey": "6edf62dbdf6352b7d1f87d81fe4ad470",
            "id": "66342",
            "name": "Sree Agarwal Bhojanaalay",
            "url": "https://www.zomato.com/chennai/sree-agarwal-bhojanaalay-sowcarpet?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "15, Venkatarayan Lane, N.S.C Bose Road, Sowcarpet, Chennai",
              "locality": "Sowcarpet",
              "city": "Chennai",
              "city_id": 7,
              "latitude": "13.0905833150",
              "longitude": "80.2758466825",
              "zipcode": "0",
              "country_id": 1,
              "locality_verbose": "Sowcarpet, Chennai"
            },
            "switch_to_order_menu": 0,
            "cuisines": "Rajasthani, Street Food",
            "average_cost_for_two": 300,
            "price_range": 1,
            "currency": "Rs.",
            "offers": [],
            "opentable_support": 0,
            "is_zomato_book_res": 0,
            "mezzo_provider": "OTHER",
            "is_book_form_web_view": 0,
            "book_form_web_view_url": "",
            "book_again_url": "",
            "thumb": "https://b.zmtcdn.com/data/reviews_photos/9ef/797cc9fadff12009200fb00da83d59ef_1431844211.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "4.2",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "238"
            },
            "photos_url": "https://www.zomato.com/chennai/sree-agarwal-bhojanaalay-sowcarpet/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/chennai/sree-agarwal-bhojanaalay-sowcarpet/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/reviews_photos/9ef/797cc9fadff12009200fb00da83d59ef_1431844211.jpg?output-format=webp",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "include_bogo_offers": true,
            "deeplink": "zomato://restaurant/66342",
            "is_table_reservation_supported": 0,
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/chennai/sree-agarwal-bhojanaalay-sowcarpet/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 66312
            },
            "apikey": "6edf62dbdf6352b7d1f87d81fe4ad470",
            "id": "66312",
            "name": "National Durbar Restaurant",
            "url": "https://www.zomato.com/chennai/national-durbar-restaurant-park-town?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "3, Raja Muthiah Road, Opposite Corporation, Near Central Railway Station, Park Town, Chennai",
              "locality": "Park Town",
              "city": "Chennai",
              "city_id": 7,
              "latitude": "13.0810030656",
              "longitude": "80.2708024532",
              "zipcode": "0",
              "country_id": 1,
              "locality_verbose": "Park Town, Chennai"
            },
            "switch_to_order_menu": 0,
            "cuisines": "North Indian, Chinese",
            "average_cost_for_two": 350,
            "price_range": 1,
            "currency": "Rs.",
            "offers": [],
            "opentable_support": 0,
            "is_zomato_book_res": 0,
            "mezzo_provider": "OTHER",
            "is_book_form_web_view": 0,
            "book_form_web_view_url": "",
            "book_again_url": "",
            "thumb": "https://b.zmtcdn.com/data/reviews_photos/77a/cc9c8e776e49cf5cf335c24ac522077a_1475908097.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "3.9",
              "rating_text": "Good",
              "rating_color": "9ACD32",
              "votes": "143"
            },
            "photos_url": "https://www.zomato.com/chennai/national-durbar-restaurant-park-town/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/chennai/national-durbar-restaurant-park-town/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/reviews_photos/77a/cc9c8e776e49cf5cf335c24ac522077a_1475908097.jpg?output-format=webp",
            "has_online_delivery": 0,
            "is_delivering_now": 0,
            "include_bogo_offers": true,
            "deeplink": "zomato://restaurant/66312",
            "is_table_reservation_supported": 0,
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/chennai/national-durbar-restaurant-park-town/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 68114
            },
            "apikey": "6edf62dbdf6352b7d1f87d81fe4ad470",
            "id": "68114",
            "name": "Seena Bhai Tiffin Centre",
            "url": "https://www.zomato.com/chennai/seena-bhai-tiffin-centre-sowcarpet?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "51/105, N.S.C Bose Road, Opposite Apollo Medicals, Sowcarpet, Chennai",
              "locality": "Sowcarpet",
              "city": "Chennai",
              "city_id": 7,
              "latitude": "13.0895536585",
              "longitude": "80.2786955237",
              "zipcode": "",
              "country_id": 1,
              "locality_verbose": "Sowcarpet, Chennai"
            },
            "switch_to_order_menu": 0,
            "cuisines": "Street Food",
            "average_cost_for_two": 200,
            "price_range": 1,
            "currency": "Rs.",
            "offers": [],
            "opentable_support": 0,
            "is_zomato_book_res": 0,
            "mezzo_provider": "OTHER",
            "is_book_form_web_view": 0,
            "book_form_web_view_url": "",
            "book_again_url": "",
            "thumb": "",
            "user_rating": {
              "aggregate_rating": "4.0",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "128"
            },
            "photos_url": "https://www.zomato.com/chennai/seena-bhai-tiffin-centre-sowcarpet/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/chennai/seena-bhai-tiffin-centre-sowcarpet/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "",
            "has_online_delivery": 1,
            "is_delivering_now": 0,
            "include_bogo_offers": true,
            "deeplink": "zomato://restaurant/68114",
            "is_table_reservation_supported": 0,
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/chennai/seena-bhai-tiffin-centre-sowcarpet/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 18503354
            },
            "apikey": "6edf62dbdf6352b7d1f87d81fe4ad470",
            "id": "18503354",
            "name": "Liza Restaurant",
            "url": "https://www.zomato.com/chennai/liza-restaurant-vepery?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "7/4, Vepery High Road, Opposite Periampet Masjid, Periampet, Vepery, Chennai",
              "locality": "Vepery",
              "city": "Chennai",
              "city_id": 7,
              "latitude": "13.0842795815",
              "longitude": "80.2698905021",
              "zipcode": "",
              "country_id": 1,
              "locality_verbose": "Vepery, Chennai"
            },
            "switch_to_order_menu": 0,
            "cuisines": "North Indian, Arabian",
            "average_cost_for_two": 400,
            "price_range": 1,
            "currency": "Rs.",
            "offers": [],
            "opentable_support": 0,
            "is_zomato_book_res": 0,
            "mezzo_provider": "OTHER",
            "is_book_form_web_view": 0,
            "book_form_web_view_url": "",
            "book_again_url": "",
            "thumb": "https://b.zmtcdn.com/data/pictures/4/18503354/c0adf8fc0cb6997c2314467fe80431cf.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "3.6",
              "rating_text": "Good",
              "rating_color": "9ACD32",
              "votes": "179"
            },
            "photos_url": "https://www.zomato.com/chennai/liza-restaurant-vepery/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/chennai/liza-restaurant-vepery/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/pictures/4/18503354/c0adf8fc0cb6997c2314467fe80431cf.jpg",
            "has_online_delivery": 1,
            "is_delivering_now": 1,
            "include_bogo_offers": true,
            "deeplink": "zomato://restaurant/18503354",
            "order_url": "https://www.zomato.com/chennai/liza-restaurant-vepery/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "order_deeplink": "",
            "is_table_reservation_supported": 0,
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/chennai/liza-restaurant-vepery/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        },
        {
          "restaurant": {
            "R": {
              "res_id": 65505
            },
            "apikey": "6edf62dbdf6352b7d1f87d81fe4ad470",
            "id": "65505",
            "name": "Hotel Saravana Bhavan",
            "url": "https://www.zomato.com/chennai/hotel-saravana-bhavan-egmore?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "location": {
              "address": "21, Kennet Lane, Egmore, Chennai",
              "locality": "Egmore",
              "city": "Chennai",
              "city_id": 7,
              "latitude": "13.0767601528",
              "longitude": "80.2624135092",
              "zipcode": "0",
              "country_id": 1,
              "locality_verbose": "Egmore, Chennai"
            },
            "switch_to_order_menu": 0,
            "cuisines": "South Indian, North Indian, Mithai",
            "average_cost_for_two": 450,
            "price_range": 1,
            "currency": "Rs.",
            "offers": [],
            "opentable_support": 0,
            "is_zomato_book_res": 0,
            "mezzo_provider": "OTHER",
            "is_book_form_web_view": 0,
            "book_form_web_view_url": "",
            "book_again_url": "",
            "thumb": "https://b.zmtcdn.com/data/res_imagery/65499_CHAIN_ec76b9389430abe6a042d6e90b0f95f4.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "user_rating": {
              "aggregate_rating": "3.5",
              "rating_text": "Good",
              "rating_color": "9ACD32",
              "votes": "160"
            },
            "photos_url": "https://www.zomato.com/chennai/hotel-saravana-bhavan-egmore/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "menu_url": "https://www.zomato.com/chennai/hotel-saravana-bhavan-egmore/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "featured_image": "https://b.zmtcdn.com/data/res_imagery/65499_CHAIN_ec76b9389430abe6a042d6e90b0f95f4.jpg?output-format=webp",
            "has_online_delivery": 1,
            "is_delivering_now": 1,
            "include_bogo_offers": true,
            "deeplink": "zomato://restaurant/65505",
            "order_url": "https://www.zomato.com/chennai/hotel-saravana-bhavan-egmore/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "order_deeplink": "",
            "is_table_reservation_supported": 0,
            "has_table_booking": 0,
            "events_url": "https://www.zomato.com/chennai/hotel-saravana-bhavan-egmore/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
          }
        }
      ]
    }
  }

}
