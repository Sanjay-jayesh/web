import React, { useEffect, useRef } from 'react';
import './GalleryModal.css';

const GalleryModal = ({ media, currentIndex, onClose, onPrev, onNext }) => {
  if (!media || currentIndex === null) return null;

  const currentMedia = media[currentIndex];
  const isVideo = currentMedia.endsWith('.mp4');
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onNext(); // swipe left
      } else {
        onPrev(); // swipe right
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {isVideo ? (
          <div className="video-wrapper">
            <video className="modal-media" controls autoPlay playsInline>
              <source src={currentMedia} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <img src={currentMedia} alt="" className="modal-media" />
        )}

        {currentIndex > 0 && (
          <button className="modal-nav left" onClick={onPrev}>
            ‹
          </button>
        )}
        {currentIndex < media.length - 1 && (
          <button className="modal-nav right" onClick={onNext}>
            ›
          </button>
        )}
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
