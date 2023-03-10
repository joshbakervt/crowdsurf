import { useState } from 'react'

export default function TrackSearchResult( { track, onSelect }) {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        onSelect(track);
        setIsSelected(true);
    };

    return (
        <div className="d-flex m-2 align-items-center" onClick={handleClick}>
            <img src={track.albumUrl} style={{ height: '64px', width: '64px' }} />
            <div className="ms-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
            {isSelected && (
                <div className="ms-auto">
                    <button className="btn btn-primary" onClick={() => console.log("Submit Request clicked for track:", track)}>Submit Request</button>
                </div>
            )}
        </div>
    )
}
