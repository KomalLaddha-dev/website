import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Event.css';
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";
import {Link} from "react-router-dom";

const events = [
  {
    name: 'INDEPENDENCE DAY',
    images: [
      "https://www.rknec.edu/wp-content/uploads/2023/12/2-1-1.jpg",
      "https://www.rknec.edu/wp-content/uploads/2023/12/Dance1-526x526.jpg",
      "https://www.rknec.edu/wp-content/uploads/2023/12/Dance3-526x526.jpg",
    ],
    description1: 'A patriotic event celebrating India’s independence with cultural programs and flag hoisting.',
    description2: 'Students and faculty participate in speeches, dances, and community service initiatives.',
  },
  {
    name: 'YOGA DAY',
    images: [
      "https://github.com/himanshusalve16/website/blob/fff5ee9b4a6982a88988c2141bf0a8e5d6661d2c/src/Images/YOGA1.jpg",
      "https://github.com/himanshusalve16/website/blob/fff5ee9b4a6982a88988c2141bf0a8e5d6661d2c/src/Images/YOGA2.jpg",
      "https://github.com/himanshusalve16/website/blob/fff5ee9b4a6982a88988c2141bf0a8e5d6661d2c/src/Images/YOGA3.HEIC",
    ],
    description1: 'Promoting health and wellness through yoga sessions conducted by trained professionals.',
    description2: 'People of all ages join together to practice mindfulness and improve their physical well-being.',
  },
  {
    name: 'REPUBLIC DAY',
    images: [
      "https://github.com/himanshusalve16/website/blob/993015eb56145221c0cae2f1b4591da65da8397c/src/Images/RepublicDay1.jpeg",
      "https://github.com/himanshusalve16/website/blob/993015eb56145221c0cae2f1b4591da65da8397c/src/Images/RepublicDay2.jpeg",
      "https://github.com/himanshusalve16/website/blob/993015eb56145221c0cae2f1b4591da65da8397c/src/Images/RepublicDay3.jpeg",
    ],
    description1: 'Commemorating the adoption of the Indian Constitution with parades and cultural programs.',
    description2: 'A day filled with patriotic fervor, music, and awareness drives about citizens’ responsibilities.',
  },
  {
    name: 'AARAMBH FOUNDATION WEEK',
    images: [
      "/Aaramb/IMG_1591.jpg",
      "/Aaramb/IMG_1672.jpg",
      "/Aaramb/IMG_2911.jpg",
    ],
    description1: 'A week-long celebration of the foundation of NSS, featuring various activities and workshops.',
    description2: 'This event emphasizes the mission and vision of social service and community engagement.',
  },
  {
    name: 'HAPPYTHON',
    images: [
      "https://github.com/himanshusalve16/website/blob/fff5ee9b4a6982a88988c2141bf0a8e5d6661d2c/src/Images/YOGA1.jpg",
      "https://github.com/himanshusalve16/website/blob/fff5ee9b4a6982a88988c2141bf0a8e5d6661d2c/src/Images/YOGA2.jpg",
      "https://github.com/himanshusalve16/website/blob/fff5ee9b4a6982a88988c2141bf0a8e5d6661d2c/src/Images/YOGA3.HEIC",
    ],
    description1: 'A fun-filled marathon promoting happiness, mental health awareness, and physical well-being.',
    description2: 'Participants engage in joyful activities, interactive sessions, and group runs.',
  },
  {
    name: 'NATIONAL YOUTH DAY',
    images: [
      "https://github.com/himanshusalve16/website/blob/a6ddba311a4693fcd14fd45ae6312ea105d15687/src/Images/Happython1.jpg",
      "https://github.com/himanshusalve16/website/blob/a6ddba311a4693fcd14fd45ae6312ea105d15687/src/Images/Happython2.jpg",
      "https://github.com/himanshusalve16/website/blob/940d00e539c2efc822277e2970ba57fa1af12712/src/Images/Happython3.jpg",
    ],
    description1: 'Celebrating the energy and contribution of youth in nation-building and social welfare.',
    description2: 'The event includes motivational talks, debates, and youth-centric activities.',
  },
  {
    name: 'CLEANLINESS DRIVE',
    images: [
      "/Clean/IMG_20241002_094126.jpg",
      "/Clean/IMG_20241002_095147.jpg",
      "/Clean/IMG_20241002_115904.jpg",
    ],
    description1: 'A campaign to promote hygiene, waste management, and environmental sustainability.',
    description2: 'Volunteers clean public places and educate people about keeping surroundings clean.',
  },
  {
    name: 'BLOOD DONATION CAMP',
    images: [
      "/images/BloodDonation/DSC04275.JPG",
      "/images/BloodDonation/DSC04258.JPG",
      "/images/BloodDonation/IMG20240925123658.jpg",
    ],
    description1: 'A life-saving event encouraging individuals to donate blood and help those in need.',
    description2: 'Medical professionals guide donors and ensure safe and effective blood collection.',
  },
  {
    name: 'NATIONAL FOUNDATION DAY',
    images: [
      "https://github.com/himanshusalve16/website/blob/2653cc17cdb38d58cf6188489dc12f6bd525a1ae/src/Images/FoundationDay1.jpg",
      "https://github.com/himanshusalve16/website/blob/2653cc17cdb38d58cf6188489dc12f6bd525a1ae/src/Images/FoundationDay2.jpg",
      "https://github.com/himanshusalve16/website/blob/2653cc17cdb38d58cf6188489dc12f6bd525a1ae/src/Images/FoundationDay3.jpg",
    ],
    description1: 'A day of celebration marking the foundation of NSS, fostering unity and pride.',
  },
];

function EventSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings} className="event-slider">
      {images.map((img, idx) => (
        <div key={idx}>
          <img
  src={img}
  alt="event slide"
  className="event-slide-image"
  style={{ width: "100%", height: "300px", objectFit: "cover" }}
/>
        </div>
      ))}
    </Slider>
  );
}

function RegularEvents() {
  return (
    <div>
    <div className="events-container">
      <h2 className="events-title">EVENTS</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={event.name} className="event-box">
          <EventSlider images={event.images} />
          <div className="event-details">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-description">{event.description1}</p>
            <p className="event-description">{event.description2}</p>
            <Link to={`/event-report/${event.name}`} className="event-report-btn">
                  Event Report
                </Link>
          </div>
        </div>        
        ))}
      </div>
    </div>
    <NSSFooter />
    </div>

  );
}

export default RegularEvents;