import React from 'react'
import galleryImages from './galleryImages'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry>
            <Masonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
                {galleryImages.map((item, index) => (
                    <img
                        key={index} 
                        src={item} 
                        alt="gallery" 
                        style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                        />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default MasonryImagesGallery