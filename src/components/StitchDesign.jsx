// src/components/StitchDesign.jsx
import React from 'react';
import './StitchDesign.css';

// Updated image paths for public folder
const imgDepth5Frame0 = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=128&h=128&fit=crop&crop=face";
const imgDepth4Frame1 = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=70&h=70&fit=crop";
const imgDepth4Frame2 = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=70&h=70&fit=crop";
const imgDepth4Frame3 = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=70&h=70&fit=crop";
const imgDepth4Frame0 = "https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png";
const imgVector0 = "https://img.icons8.com/ios-glyphs/30/ffffff/share--v1.png";
const imgVector1 = "https://img.icons8.com/ios-glyphs/30/9eb8a8/home--v1.png";
const imgVector2 = "https://img.icons8.com/ios-glyphs/30/9eb8a8/search--v1.png";
const imgVector3 = "https://img.icons8.com/ios-glyphs/30/9eb8a8/plus-math--v1.png";
const imgVector4 = "https://img.icons8.com/ios-glyphs/30/9eb8a8/bookmark--v1.png";
const imgVector5 = "https://img.icons8.com/ios-glyphs/30/ffffff/user--v1.png";

export default function StitchDesign() {
  const tracks = [
    { title: "Neon Nights", year: "2023", image: imgDepth4Frame1 },
    { title: "Electric Dreams", year: "2022", image: imgDepth4Frame2 },
    { title: "Cosmic Pulse", year: "2021", image: imgDepth4Frame3 }
  ];

  const navItems = [
    { icon: imgVector1, label: "Home", active: false },
    { icon: imgVector2, label: "Search", active: false },
    { icon: imgVector3, label: "Upload", active: false },
    { icon: imgVector4, label: "Collection", active: false },
    { icon: imgVector5, label: "Profile", active: true }
  ];

  return (
    <div className="stitch-design">
      <div className="main-container">
        <div className="content-wrapper">
          {/* Header */}
          <div className="header">
            <div className="header-content">
              <div className="menu-icon">
                <img src={imgDepth4Frame0} alt="Menu" />
              </div>
              <div className="share-icon">
                <img src={imgVector0} alt="Share" />
              </div>
            </div>
          </div>
          
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-content">
              <div className="profile-image" style={{backgroundImage: `url('${imgDepth5Frame0}')`}}>
              </div>
              
              <div className="profile-info">
                <h1 className="profile-name">DJ Echo</h1>
                <p className="profile-description">Electronic music producer</p>
                <p className="profile-followers">12K followers</p>
              </div>
              
              <div className="action-buttons">
                <button className="follow-button">Follow</button>
                <button className="message-button">Message</button>
              </div>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="nav-tabs">
            <div className="nav-tabs-content">
              <div className="nav-tab active">Tracks</div>
              <div className="nav-tab">Albums</div>
              <div className="nav-tab">Playlists</div>
            </div>
          </div>
          
          {/* Track List */}
          <div className="track-list">
            {tracks.map((track, index) => (
              <div key={index} className="track-item">
                <div className="track-info">
                  <p className="track-label">Track</p>
                  <h3 className="track-title">{track.title}</h3>
                  <p className="track-details">DJ Echo · {track.year}</p>
                </div>
                <div className="track-cover" style={{backgroundImage: `url('${track.image}')`}}>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <div className="nav-bar">
            {navItems.map((item, index) => (
              <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                <div className="nav-icon">
                  <img src={item.icon} alt={item.label} />
                </div>
                <span className="nav-label">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="bottom-spacer"></div>
        </div>
      </div>
    </div>
  );
}
