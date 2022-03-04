import mainImg from "../assets/images/homeBackgroudImg.png";
import luffy from '../assets/images/monkeydluffy.svg';
import ace from '../assets/images/ace.svg';
import zoro from '../assets/images/zoro.svg';
import nico from '../assets/images/nico.svg';
import reverse from '../assets/images/reverse.svg';
import gomu from '../assets/images/gomu.svg';
import logo from '../assets/images/One-Piece-Logo.svg';
import en from '../assets/images/en.svg';
import es from '../assets/images/es.svg';
import footerImg from '../assets/images/skull.svg';

// This simulates a service that load information

var Data = {
  "heroes":[
    {"imgAlt":"Monkey D. Luffy","imgSrc":luffy,"imgClass":"card-img","name":"Monkey D. Luffy"},
    {"imgAlt":"Portgas D. Ace","imgSrc":ace,"imgClass":"card-img","name":"Portgas D. Ace"},
    {"imgAlt":"Roronoa Zoro","imgSrc":zoro,"imgClass":"card-img","name":"Roronoa Zoro"},
    {"imgAlt":"Nico Robin","imgSrc":nico,"imgClass":"card-img","name":"Nico Robin"},
  ],
  "islands":[
    {"imgAlt":"Reverse Mountain","imgSrc":reverse,"imgClass":"card-img-island","name":"Reverse Mountain","location":"Red Line"},
    {"imgAlt":"Reverse Mountain","imgSrc":reverse,"imgClass":"card-img-island","name":"Reverse Mountain","location":"Red Line"},
    {"imgAlt":"Reverse Mountain","imgSrc":reverse,"imgClass":"card-img-island","name":"Reverse Mountain","location":"Red Line"},
  ],
  "objects":[
    {"imgAlt":"Gomu Gomu No Mi","imgSrc":gomu,"imgClass":"card-img-object","title":"Gomu Gomu No Mi","text":"Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."},
    {"imgAlt":"Gomu Gomu No Mi","imgSrc":gomu,"imgClass":"card-img-object","title":"Gomu Gomu No Mi","text":"Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."},
    {"imgAlt":"Gomu Gomu No Mi","imgSrc":gomu,"imgClass":"card-img-object","title":"Gomu Gomu No Mi","text":"Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."},
    {"imgAlt":"Gomu Gomu No Mi","imgSrc":gomu,"imgClass":"card-img-object","title":"Gomu Gomu No Mi","text":"Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."},
  ],
  "navBar":{
    "image":{"imgAlt":"alternative","imgSrc":logo,"imgClass":"nav-image"},
    "navlist":[
      {"page": "Home","link": "#"},{"page": "Characters","link": "#"},{"page": "Islands","link": "#link"},{"page": "Mist Objects","link": "#"}
    ],
    "flaglist":[
      {"imgAlt":"en","imgSrc":en,"imgClass":"flag-img"},
      {"imgAlt":"es","imgSrc":es,"imgClass":"flag-img"}
    ]
  },
  "footer":{
    "image":{"imgAlt":"alternative","imgSrc":footerImg,"imgClass":"footer-image"},
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at vel congue scelerisque tortor tortor.",
  },
  "synopsis":{
    "image":{"imgAlt":"alternative","imgSrc":logo,"imgClass":"nav-image"},
    "text": "Synopsis",
    "textButton": "Read More"
  },
  "mainImage":{"imgAlt":"alternative","imgSrc":mainImg,"imgClass":"main-image"}
}

export default Data;