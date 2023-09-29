import './friendlyBets.css';
import './friendlyBetsMobile.css';
import React, { useEffect, useState, useCallback } from "react";
import { useMediaQuery } from 'react-responsive';
import { useWindowDimensions } from '../../Utilities/windowDimension';
import { FaServer } from 'react-icons/fa';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import ImageViewer from 'react-simple-image-viewer';
import Img1 from '../../Assets/FriendlyBets/FriendlyBets_001.png';
import Img2 from '../../Assets/FriendlyBets/FriendlyBets_003.png';
import Img3 from '../../Assets/FriendlyBets/FriendlyBets_012.png';
import Img4 from '../../Assets/FriendlyBets/FriendlyBets_013.png';
import Img5 from '../../Assets/FriendlyBets/FriendlyBets_014.png';
import Img6 from '../../Assets/FriendlyBets/FriendlyBets_007.png';
import Img7 from '../../Assets/FriendlyBets/FriendlyBets_015.png';
import Img8 from '../../Assets/FriendlyBets/FriendlyBets_016.png';
import Img9 from '../../Assets/FriendlyBets/FriendlyBets_017.png';
import Img10 from '../../Assets/FriendlyBets/FriendlyBets_018.png';
import Img11 from '../../Assets/FriendlyBets/FriendlyBets_019.png';
import Img12 from '../../Assets/FriendlyBets/FriendlyBets_020.png';
import Img13 from '../../Assets/FriendlyBets/FriendlyBets_008.png';
import Img14 from '../../Assets/FriendlyBets/FriendlyBets_009.png';
import Img15 from '../../Assets/FriendlyBets/FriendlyBets_010.png';
import Img16 from '../../Assets/FriendlyBets/FriendlyBets_011.png';
import Img17 from '../../Assets/FriendlyBets/FriendlyBets_004.png';
import Img18 from '../../Assets/FriendlyBets/FriendlyBets_006.png';
import Img19 from '../../Assets/FriendlyBets/FriendlyBets_005.png';


/*
Component that display the page about the Battery Montiroring project. http://www.mathieuhuet.com/friendly_bets/
*/

function FriendlyBets (props) {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const { height, width } = useWindowDimensions();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
    Img19
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    props.setAllowMobileMenu(false);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    props.setAllowMobileMenu(true);
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
          <div className='friendly-bets-disclaimer'>
            *Cette application n'est pas terminé.
          </div>
          <div className='friendly-bets-all-link'>
            <div className='friendly-bets-hover-animation'>
              <a className='friendly-bets-client-link'
                href='https://github.com/mathieuhuet/FriendlyBetsClient'
                target="_blank"
                rel="noopener noreferrer"
                style={
                  isMobile ? 
                  {textDecoration: 'none', color: '#004638', display: 'flex', alignItems: 'center', marginLeft: '2vmin', marginRight: '2vmin', fontSize: '4vmin'}
                  :
                  {textDecoration: 'none', color: '#004638', display: 'flex', alignItems: 'center', marginLeft: 16, marginRight: 16, fontSize: 32}
              }
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
                style={
                  isMobile ? 
                  {textDecoration: 'none', color: '#004638', display: 'flex', alignItems: 'center', marginLeft: '2vmin', marginRight: '2vmin', fontSize: '4vmin'}
                  :
                  {textDecoration: 'none', color: '#004638', display: 'flex', alignItems: 'center', marginLeft: 16, marginRight: 16, fontSize: 32}
              }
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
            {isMobile &&
              <div>
                  <img
                    src={ Img1 }
                    onClick={ () => openImageViewer(0) }
                    width={width > height ? height / 2.5 : width / 2.5}
                    style={{ margin: '2px', cursor: 'pointer' }}
                    alt=""
                  />
                  <img
                    src={ Img6 }
                    onClick={ () => openImageViewer(5) }
                    width={width > height ? height / 2.5 : width / 2.5}
                    style={{ margin: '2px', cursor: 'pointer' }}
                    alt=""
                  />
              </div>
            }
            {!isMobile && 
              <>
                <div>
                  <img
                    src={ Img1 }
                    onClick={ () => openImageViewer(0) }
                    width="160"
                    style={{ margin: '2px', cursor: 'pointer' }}
                    alt=""
                  />
                  <img
                    src={ Img6 }
                    onClick={ () => openImageViewer(5) }
                    width="160"
                    style={{ margin: '2px', cursor: 'pointer' }}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={ Img7 }
                    onClick={ () => openImageViewer(6) }
                    width="160"
                    style={{ margin: '2px', cursor: 'pointer' }}
                    alt=""
                  />
                  <img
                    src={ Img15 }
                    onClick={ () => openImageViewer(14) }
                    width="160"
                    style={{ margin: '2px', cursor: 'pointer' }}
                    alt=""
                  />
                </div>
              </>
            }
            {isViewerOpen && (
              <ImageViewer
                src={ images }
                currentIndex={ currentImage }
                disableScroll={ true }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
                backgroundStyle={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendlyBets;