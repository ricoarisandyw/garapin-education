import React from 'react'

import StarIcon from '@material-ui/icons/Star';

const InputStar = () => {
    const [rating, setRating] = React.useState(0)

    const stars = [1,2,3,4,5].map((val) => (
        <StarIcon style={{cursor:"pointer",color:rating >= val ? "#F5C53B" : "silver"}} key={val} onClick={() => setRating(val)} />
    ))
    
    return <div>
        {stars}
    </div>
}

export default InputStar