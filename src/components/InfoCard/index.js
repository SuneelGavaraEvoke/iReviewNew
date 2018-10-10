import React from 'react';


const InfoCard = ({data, styleName, onPress}) => {
    return (
        <div className={`jr-card net-chart ${styleName}`} onClick={() => {onPress()}}>
            <div className="jr-card-thumb">
                <img className="img-fluid bg-white" src={data.img}/>
            </div>
            <div className="jr-card-body br-break">
                <h4 className="mb-0"><strong>{data.title} </strong></h4>
                <p className="mb-0">{data.subTitle} </p>
            </div>

        </div>
    );
};

export default InfoCard;
InfoCard.defaultProps = {
    styleName: ''
};