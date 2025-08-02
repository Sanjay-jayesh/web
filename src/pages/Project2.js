import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Navbar from '../components/Navbar';
import mediaItems from '../data/mediaData2'; // Your media data file for Project2
import { FiX } from 'react-icons/fi';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Project2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(null);
  const scrollRef = useRef();
  const videoRefs = useRef([]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      scrollToIndex(index);
    }, 100);
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: 'instant',
      });
    }
  };

  const scrollBy = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') scrollBy(window.innerWidth);
      if (e.key === 'ArrowLeft') scrollBy(-window.innerWidth);
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      videoRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, [modalOpen]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === visibleIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [visibleIndex]);

  return (
    <>
      {!modalOpen && <Navbar />}
      <PageContainer>
        <GalleryGrid>
          {mediaItems.map((item, index) => (
            <MediaItem key={index} onClick={() => openModal(index)}>
              {item.type === 'image' ? (
                <Thumbnail src={item.src} alt={`media-${index}`} />
              ) : (
                <VideoWrapper>
                  <ThumbnailVideo src={item.src} muted loop playsInline />
                  <PlayOverlay>▶</PlayOverlay>
                </VideoWrapper>
              )}
            </MediaItem>
          ))}
        </GalleryGrid>

        {modalOpen && (
          <Modal onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <StyledCloseButton onClick={closeModal}>
                <FiX />
              </StyledCloseButton>
              <ArrowButton left onClick={() => scrollBy(-window.innerWidth)}>&#10094;</ArrowButton>
              <ArrowButton onClick={() => scrollBy(window.innerWidth)}>&#10095;</ArrowButton>

              <ScrollWrapper ref={scrollRef}>
                {mediaItems.map((item, index) =>
                  item.type === 'image' ? (
                    <ScrollMedia key={index} as="img" src={item.src} alt={`media-${index}`} />
                  ) : (
                    <ScrollMedia
                      key={index}
                      as="video"
                      src={item.src}
                      controls
                      loop
                      data-index={index}
                      ref={(el) => (videoRefs.current[index] = el)}
                    />
                  )
                )}
              </ScrollWrapper>
            </ModalContent>
          </Modal>
        )}
      </PageContainer>
    </>
  );
};

export default Project2;

// Styled Components

const PageContainer = styled.div`
  background: #000;
  min-height: 100vh;
  padding-top: 100px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  padding: 2rem;
`;

const MediaItem = styled.div`
  cursor: pointer;
  overflow: hidden;
  background: #111;
  position: relative;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const ThumbnailVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const PlayOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.85);
  pointer-events: none;
  z-index: 2;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  width: 100vw;
  background: #000;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const fadeInCSS = css`
  animation: ${fadeIn} 0.4s ease-in-out;
`;

const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100vw;
  height: 85vh;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollMedia = styled.img`
  flex-shrink: 0;
  width: 100vw;
  height: 85vh;
  object-fit: contain;
  scroll-snap-align: center;
  ${fadeInCSS}
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 3.5rem;
  color: #fff;
  background: none; 
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1200;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1); 
  }

  svg {
    stroke-width: 1.2;
  }
`;

const ArrowButton = styled.span`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? 'left: 10px;' : 'right: 10px;')}
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  user-select: none;
  transform: translateY(-50%);
  z-index: 1200;
  padding: 0 6px;
  border-radius: 50%;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-50%) scale(1.1); 
  }
`;

