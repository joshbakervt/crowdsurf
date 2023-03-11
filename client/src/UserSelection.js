import React from 'react'

export default function UserSelection({ onUserSelection }) {
return (
<div>
    <button type="button" onClick={() => onUserSelection('dj')}>
        i'm a dj
    </button>
    <button type="button" onClick={() => onUserSelection('listener')}>
        i'm a listener
    </button>
</div>
)
}
