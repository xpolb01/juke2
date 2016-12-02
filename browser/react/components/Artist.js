import React, { Component } from 'react';
import Songs from '../components/Songs';
import Albums from '../components/Albums';

export default class Artist extends Component {
  componentDidMount() {
    this.props.selectArtist(this.props.routeParams.artistId)
    this.props.selectAlbumsByArtist(this.props.routeParams.artistId)
    this.props.selectSongsByArtist(this.props.routeParams.artistId)
  }

  render() {
    const album = this.props.album

    return (
      <div className="artist">
          <h3>{this.props.artist.name}</h3>
          {this.props.artistAlbums &&
            <Albums albums={this.props.artistAlbums} selectAlbum={this.props.selectAlbum} />
          }
          <h4>SONGS</h4>
          {this.props.artistSongs &&
          <Songs
            songs={this.props.artistSongs}
            currentSong={this.props.currentSong}
            isPlaying={this.props.isPlaying}
            toggleOne={this.props.toggleOne} />
          }
      </div>
    );

  }

}
