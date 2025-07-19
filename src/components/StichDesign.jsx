{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww23640\viewh18940\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // src/components/StitchDesign.jsx\
import React from 'react';\
import './StitchDesign.css';\
\
// Updated image paths for public folder\
const imgDepth5Frame0 = "/images/profile.png";\
const imgDepth4Frame1 = "/images/track1.png";\
const imgDepth4Frame2 = "/images/track2.png";\
const imgDepth4Frame3 = "/images/track3.png";\
const imgDepth4Frame0 = "/images/menu-icon.svg";\
const imgVector0 = "/images/menu-icon.svg";\
const imgVector1 = "/images/home-icon.svg";\
const imgVector2 = "/images/search-icon.svg";\
const imgVector3 = "/images/upload-icon.svg";\
const imgVector4 = "/images/collection-icon.svg";\
const imgVector5 = "/images/profile-icon.svg";\
\
export default function StitchDesign() \{\
  const tracks = [\
    \{ title: "Neon Nights", year: "2023", image: imgDepth4Frame1 \},\
    \{ title: "Electric Dreams", year: "2022", image: imgDepth4Frame2 \},\
    \{ title: "Cosmic Pulse", year: "2021", image: imgDepth4Frame3 \}\
  ];\
\
  const navItems = [\
    \{ icon: imgVector1, label: "Home", active: false \},\
    \{ icon: imgVector2, label: "Search", active: false \},\
    \{ icon: imgVector3, label: "Upload", active: false \},\
    \{ icon: imgVector4, label: "Collection", active: false \},\
    \{ icon: imgVector5, label: "Profile", active: true \}\
  ];\
\
  return (\
    <div className="stitch-design">\
      <div className="main-container">\
        <div className="content-wrapper">\
          \{/* Header */\}\
          <div className="header">\
            <div className="header-content">\
              <div className="menu-icon">\
                <img src=\{imgDepth4Frame0\} alt="Menu" />\
              </div>\
              <div className="share-icon">\
                <img src=\{imgVector0\} alt="Share" />\
              </div>\
            </div>\
          </div>\
          \
          \{/* Profile Section */\}\
          <div className="profile-section">\
            <div className="profile-content">\
              <div className="profile-image" style=\{\{backgroundImage: `url('$\{imgDepth5Frame0\}')`\}\}>\
              </div>\
              \
              <div className="profile-info">\
                <h1 className="profile-name">DJ Echo</h1>\
                <p className="profile-description">Electronic music producer</p>\
                <p className="profile-followers">12K followers</p>\
              </div>\
              \
              <div className="action-buttons">\
                <button className="follow-button">Follow</button>\
                <button className="message-button">Message</button>\
              </div>\
            </div>\
          </div>\
          \
          \{/* Navigation Tabs */\}\
          <div className="nav-tabs">\
            <div className="nav-tabs-content">\
              <div className="nav-tab active">Tracks</div>\
              <div className="nav-tab">Albums</div>\
              <div className="nav-tab">Playlists</div>\
            </div>\
          </div>\
          \
          \{/* Track List */\}\
          <div className="track-list">\
            \{tracks.map((track, index) => (\
              <div key=\{index\} className="track-item">\
                <div className="track-info">\
                  <p className="track-label">Track</p>\
                  <h3 className="track-title">\{track.title\}</h3>\
                  <p className="track-details">DJ Echo \'b7 \{track.year\}</p>\
                </div>\
                <div className="track-cover" style=\{\{backgroundImage: `url('$\{track.image\}')`\}\}>\
                </div>\
              </div>\
            ))\}\
          </div>\
        </div>\
        \
        \{/* Bottom Navigation */\}\
        <div className="bottom-nav">\
          <div className="nav-bar">\
            \{navItems.map((item, index) => (\
              <div key=\{index\} className=\{`nav-item $\{item.active ? 'active' : ''\}`\}>\
                <div className="nav-icon">\
                  <img src=\{item.icon\} alt=\{item.label\} />\
                </div>\
                <span className="nav-label">\{item.label\}</span>\
              </div>\
            ))\}\
          </div>\
          <div className="bottom-spacer"></div>\
        </div>\
      </div>\
    </div>\
  );\
\}}