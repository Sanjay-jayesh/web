import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import mediaItems from '../data/mediaData';
import { FiX } from 'react-icons/fi';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Project1 = () => {
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

    const scrollMedia = scrollRef.current?.querySelectorAll('[data-index]');
    scrollMedia?.forEach((el) => observer.observe(el));

    return () => {
      scrollMedia?.forEach((el) => observer.unobserve(el));
    };
  }, [modalOpen]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === visibleIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [visibleIndex]);

  return (
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
            <ArrowButton left onClick={() => scrollBy(-window.innerWidth)}>
              &#10094;
            </ArrowButton>
            <ArrowButton onClick={() => scrollBy(window.innerWidth)}>
              &#10095;
            </ArrowButton>

            <ScrollWrapper ref={scrollRef}>
              {mediaItems.map((item, index) =>
                item.type === 'image' ? (
                  <ScrollMedia 
                    key={index} 
                    as="img" 
                    src={item.src} 
                    alt={`media-${index}`} 
                    data-index={index} // Added data-index for IntersectionObserver
                  />
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
  );
};

export default Project1;

// Styled Components

const PageContainer = styled.div`
  background: #000;
  min-height: 100vh;
  padding-top: 100px;
`;

// 🔑 FIX: Switched to CSS Columns for Masonry (freestyle) Layout
const GalleryGrid = styled.div`
  column-count: 3; /* Default: 3 columns */
  column-gap: 16px; 
  padding: 2rem;

  @media (max-width: 1024px) {
    column-count: 2;
  }
  @media (max-width: 600px) {
    column-count: 1;
  }
`;

const MediaItem = styled.div`
  cursor: pointer;
  overflow: hidden;
  background: #111;
  position: relative;
  /* Required for masonry layout */
  margin-bottom: 16px; 
  break-inside: avoid; 
  display: inline-block; 
  width: 100%;
`;

const Thumbnail = styled.img`
  /* Cleaned up styling for masonry */
  display: block;
  width: 100%; /* Ensure it fills the column width */
  height: auto; /* Allow natural aspect ratio to determine height */
  /* Removed redundant max-width/max-height, margin, padding, border, object-fit */
  vertical-align: middle;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const ThumbnailVideo = styled.video`
  /* Cleaned up styling for masonry */
  display: block;
  width: 100%; /* Ensure it fills the column width */
  height: auto; /* Allow natural aspect ratio to determine height */
  /* Removed redundant max-width/max-height, margin, padding, border, object-fit */
  vertical-align: middle;
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

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 4px;
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

  @media (max-width: 768px) {
    font-size: 2rem;
    ${({ left }) => (left ? 'left: 6px;' : 'right: 6px;')}
  }
`;