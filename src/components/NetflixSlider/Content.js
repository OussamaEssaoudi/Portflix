import React from 'react';
import IconCross from './../Icons/IconCross';
import './Content.scss';

const Content = ({ movie, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${movie.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.title}</div>
        <div className="content__description">
        {movie.descFr}
        </div>
              <div className="flex pt-8 xl:pt-16 pl-6 xl:pl-0 infos">
                {movie.lang.map(lg => (<p className="mr-3">{lg}</p>))}
              </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
