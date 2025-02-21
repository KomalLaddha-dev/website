import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Event.css';
import Navbar from './Navbar.js';
import NSSFooter from './NSSFooter.js';
import {Link} from 'react-router-dom';

function DomainReport() {
  const { labelreport } = useParams(); // Get labelreport from URL params
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const eventCategories = {
    educationreport: {
        title : "Education Domain",
        events : [
          {
            name: "SAHYOG",
            images: [
              "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
              "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
              "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
            ],
            description1: "An education initiative to educate children about computers.",
            description2: "Volunteers take initiative to teach children about computers.",
          },
        ],
    },
  
      healthreport: {
        title : "Health Domain",
        events : [
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
        ],
    },
  
      innovationreport: {
        title : "Innovation Domain",
        events : [
          {
            name: "Prayas",
            images: [
              "https://github.com/himanshusalve16/website/blob/main/src/Images/Prayas1.jpg?raw=true",
      "https://github.com/himanshusalve16/website/blob/main/src/Images/Prayas2.jpg?raw=true",
      "https://github.com/himanshusalve16/website/blob/main/src/Images/Prayas3.jpg?raw=true",
            ],
            description1: "A showcase of innovative projects and research.",
            description2: "Students and professionals demonstrate their tech solutions.",
          },

          {
            name: "Socio Hackathon",
            images: [
              "https://github.com/himanshusalve16/website/blob/main/src/Images/SocioHackathon1.jpg?raw=true",
      "https://github.com/himanshusalve16/website/blob/main/src/Images/SocioHackathon2.jpg?raw=true",
      "https://github.com/himanshusalve16/website/blob/main/src/Images/SocioHackathon3.jpg?raw=true",
            ],
            description1: "A showcase of innovative projects and research.",
            description2: "Students and professionals demonstrate their tech solutions.",
          },
        ],
        
    },
  
      societyreport: {
        title : "Society Domain",
        events : [
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
        ],
    },
  
      environmentreport: {
        title : "Environment Domain",
        events : [
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
        ],
    },
  
      ruralreport: {
        title : "Rural Domain",
        events : [
          {
            name: "Rural Development Program",
            images: [
              "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
              "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
              "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
            ],
            description1: "Programs aimed at empowering rural communities.",
            description2: "Workshops, training, and development projects in villages.",
          },
        ],
    },
    // Add other categories...
  };

  const selectedCategory = eventCategories[labelreport] || { title: 'Events', events: [] };

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

  return (
    <div>
      <Navbar />
      <div className="events-container">
        <h2 className="events-title">{selectedCategory.title}</h2>
        <div className="events-list">
          {selectedCategory.events.map((event) => (
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

export default DomainReport;