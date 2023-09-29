import './gpmm.css';
import './gpmmMobile.css';
import React, { useEffect, useState, useCallback } from "react";
import { useMediaQuery } from 'react-responsive';
import { useWindowDimensions } from '../../Utilities/windowDimension';
import { FaServer } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';
import { MdMonitor } from 'react-icons/md';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import ImageViewer from 'react-simple-image-viewer';
import Img1 from '../../Assets/GPMM_Alertes/GPMM_011.png';
import Img2 from '../../Assets/GPMM_Alertes/GPMM_Android_002.png';
import Img3 from '../../Assets/GPMM_Alertes/GPMM_Android_003.png';
import Img4 from '../../Assets/GPMM_Alertes/GPMM_004.png';
import Img5 from '../../Assets/GPMM_Alertes/GPMM_001.png';
import Img6 from '../../Assets/GPMM_Alertes/GPMM_006.png';
import Img7 from '../../Assets/GPMM_Alertes/GPMM_007.png';
import Img8 from '../../Assets/GPMM_Alertes/GPMM_003.png';
import Img9 from '../../Assets/GPMM_Alertes/GPMM_010.png';
import Img10 from '../../Assets/GPMM_Alertes/GPMM_005.png';
import Img11 from '../../Assets/GPMM_Alertes/GPMM_Desktop_02.png';
import Img12 from '../../Assets/GPMM_Alertes/GPMM_009.png';



/*
Component that display the page about the Battery Montiroring project. http://www.mathieuhuet.com/gpmm/
*/


function GPMM (props) {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const { height, width } = useWindowDimensions();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    Img1,
    Img3,
    Img4,
    Img2,
    Img12,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11
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
    <div className='gpmm'>
      <div className='gpmm-container'>
        <div className='gpmm-left'>
          <div className='gpmm-title'>
            GPMM Alertes
          </div>
          <div className='gpmm-description'>
            Application mobile et web pour monitorer les activitées de maintenance sur le réseau du REM pour les employés de GPMM O&M. L'application permet de faire des rapports des activités et de faire un suivi des évenements.
          </div>
          <div className='gpmm-disclaimer'>
            *Cette application n'est pas utilisé par GPMM O&M ils préfèrent out-source leur logiciels, ils utilisent présentement l'application Maximo de IBM pour faire le suivi des interventions.
          </div>
          <div className='gpmm-all-link'>
            <div className='gpmm-hover-animation'>
              <a 
                href='https://github.com/mathieuhuet/GPMM_Alertes'
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
                &nbsp; Code pour l'application
              </a>
            </div>
            <div className='gpmm-hover-animation'>
              <a 
                href='https://github.com/mathieuhuet/GPMM_Alertes_Desktop'
                target="_blank"
                rel="noopener noreferrer"
                style={
                  isMobile ? 
                  {textDecoration: 'none', color: '#004638', display: 'flex', alignItems: 'center', marginLeft: '2vmin', marginRight: '2vmin', fontSize: '4vmin'}
                  :
                  {textDecoration: 'none', color: '#004638', display: 'flex', alignItems: 'center', marginLeft: 16, marginRight: 16, fontSize: 32}
              }
              >
                <MdMonitor />
                &nbsp; Code pour la version web
              </a>
            </div>
            <div className='gpmm-hover-animation'>
              <a 
                href='https://github.com/mathieuhuet/GPMM_Alertes_server'
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
                &nbsp; Code pour le serveur
              </a>
            </div>
            <div className='gpmm-hover-animation'>
              <a 
                href='https://github.com/mathieuhuet/GPMM_Alertes_CREATEUSER'
                target="_blank"
                rel="noopener noreferrer"
                style={
                  isMobile ? 
                  {textDecoration: 'none', color: '#004638', display: 'flex', alignItems: 'center', marginLeft: '2vmin', marginRight: '2vmin', fontSize: '4vmin'}
                  :
                  {textDecoration: 'none', color: '#004638', display: 'flex', alignItems: 'center', marginLeft: 16, marginRight: 16, fontSize: 32}
              }
              >
                <FaUserPlus />
                &nbsp; Code ajout d'utilisateur
              </a>
            </div>
          </div>
        </div>
        <div className='gpmm-right'>
          <div>
            <div className='gpmm-screenshot-title'>
              Captures d'écran ({images.length}) :
            </div>
            {isMobile &&
              <div>
                  <img
                    src={ Img3 }
                    onClick={ () => openImageViewer(1) }
                    width={width > height ? height / 2.5 : width / 2.5}
                    style={{ margin: '2px', cursor: 'pointer' }}
                    alt=""
                  />
                  <img
                    src={ Img2 }
                    onClick={ () => openImageViewer(3) }
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
                    src={ Img2 }
                    onClick={ () => openImageViewer(3) }
                    width="160"
                    style={{ margin: '2px', cursor: 'pointer' }}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={ Img4 }
                    onClick={ () => openImageViewer(2) }
                    width="160"
                    style={{ margin: '2px', cursor: 'pointer' }}
                    alt=""
                  />
                  <img
                    src={ Img3 }
                    onClick={ () => openImageViewer(1) }
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

export default GPMM;