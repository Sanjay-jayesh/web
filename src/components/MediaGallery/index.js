import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 60px 24px;
  background-color: #010606;
  justify-content: center;
`;

const MediaThumbnail = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const ModalOverlay = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.9);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 90vw;
  max-height: 90vh;
  position: relative;

  img, video {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  ${({ direction }) => direction}: 16px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 1;
`;

const mediaItems = [
  { type: 'image', src: require('../../images/Dodge.jpg') },
  { type: 'image', src: require('../../images/rafah.jpg') },
  { type: 'video', src: require('../../videos/video.mp4') },
];

const MediaGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openModal = (index) => {
    setCurrentIdx(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const next = () => setCurrentIdx((prev) => (prev + 1) % mediaItems.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);

  const current = mediaItems[currentIdx];

  return (
    <>
      <GalleryContainer>
        {mediaItems.map((item, idx) => (
          <MediaThumbnail key={idx} onClick={() => openModal(idx)}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`media-${idx}`} />
            ) : (
              <video src={item.src} muted />
            )}
          </MediaThumbnail>
        ))}
      </GalleryContainer>

      <ModalOverlay open={isOpen} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Arrow direction="left" onClick={prev}>&#10094;</Arrow>
          {current.type === 'image' ? (
            <img src={current.src} alt="fullscreen" />
          ) : (
            <video src={current.src} controls autoPlay />
          )}
          <Arrow direction="right" onClick={next}>&#10095;</Arrow>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default MediaGallery;
