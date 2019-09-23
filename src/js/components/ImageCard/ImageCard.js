import React from 'react'
import {base_path_posterlg} from '../../utils/api';

const ImageCard = ({path, alt}) =>{
    return <img src={`${base_path_posterlg}${path}`} alt={alt}/>
}

export default ImageCard;