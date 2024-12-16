import React from 'react';

export default function YouTubeIframe ({ videoId, nomeReceita }) {
    const iframeUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <iframe
            src={iframeUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`Video receta de ${nomeReceita}`}
        />
    );
};