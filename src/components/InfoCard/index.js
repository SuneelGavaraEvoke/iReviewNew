import React from 'react';
import './infocard.css';


const InfoCard = ({data, styleName, onPress, className}) => {
    return (
        <div className={`jr-card net-chart ${styleName} ${className}`} onClick={() => {onPress()}}>
            <div className="jr-card-thumb">
                <img className="img-fluid bg-white" src={data.img}/>
            </div>
            <div className="jr-card-body br-break">
                <h4 className="mb-0"><strong className="fontTitle" style={{color: 'white'}}>{data.title} </strong></h4>
                <p className="mb-0" style={{color: 'white'}}>{data.subTitle} </p>
            </div>

        </div>
    );
};

export default InfoCard;
InfoCard.defaultProps = {
    styleName: ''
};