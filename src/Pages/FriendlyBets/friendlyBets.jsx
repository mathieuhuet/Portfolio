import './friendlyBets.css';
import './friendlyBetsMobile.css';
import React, { useEffect, useState, useCallback } from "react";
import { useMediaQuery } from 'react-responsive';
import { FaServer } from 'react-icons/fa';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import ImageViewer from 'react-simple-image-viewer';
import Img1 from '../../Assets/FriendlyBets/FriendlyBets_001.png';
import Img2 from '../../Assets/FriendlyBets/FriendlyBets_003.png';
import Img3 from '../../Assets/FriendlyBets/FriendlyBets_007.png';
import Img4 from '../../Assets/FriendlyBets/FriendlyBets_004.png';
import Img5 from '../../Assets/FriendlyBets/FriendlyBets_005.png';

/*
Component that display the page about the Battery Montiroring project. http://www.mathieuhuet.com/friendly_bets/
*/

function FriendlyBets () {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='friendly-bets'>
      <div className='friendly-bets-top'>
        Work in progress
      </div>
      <div className='friendly-bets-container'>
        <div className='friendly-bets-left'>
          <div className='friendly-bets-title'>
            FriendlyBets
          </div>
          <div className='friendly-bets-description'>
            Application mobile pour faire des paris avec vos amis et faire le suivi de vos paris et de vos comptes a rendre.
          </div>
          <div className='friendly-bets-all-link'>
            <div className='friendly-bets-hover-animation'>
              <a className='friendly-bets-client-link'
                href='https://github.com/mathieuhuet/FriendlyBetsClient'
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: 'none', color: '#004638', display: 'flex', alignItems: 'center', marginLeft: 16, marginRight: 16, fontSize: 32}}
              >
              <HiDevicePhoneMobile />
                &nbsp; Code pour le Front-end
              </a>
            </div>
            <div className='friendly-bets-hover-animation'>
              <a className='friendly-bets-client-link'
                href='https://github.com/mathieuhuet/FriendlyBetsServer'
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: 'none', color: '#004638', display: 'flex', alignItems: 'center', marginLeft: 16, marginRight: 16, fontSize: 32}}
              >
                <FaServer />
                &nbsp; Code pour le Back-end
              </a>
            </div>
          </div>
        </div>
        <div className='friendly-bets-right'>
          <div>
            <div className='friendly-bets-screenshot-title'>
              Captures d'écran ({images.length}) :
            </div>
            <img
              src={ Img1 }
              onClick={ () => openImageViewer(0) }
              width="200"
              style={{ margin: '2px', cursor: 'pointer' }}
              alt=""
            />
            <img
              src={ Img3 }
              onClick={ () => openImageViewer(2) }
              width="200"
              style={{ margin: '2px', cursor: 'pointer' }}
              alt=""
            />
            {isViewerOpen && (
              <ImageViewer
                src={ images }
                currentIndex={ currentImage }
                disableScroll={ true }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendlyBets;