import React, { Component } from 'react';
import Songs from '../components/Songs';


export default class Album extends Component {
  componentDidMount() {
    this.props.selectAlbum(this.props.routeParams.albumId)
  }

  render() {
    const album = this.props.album

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
    );

  }

}
